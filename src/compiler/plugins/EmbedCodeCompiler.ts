import { App, parseYaml, requestUrl, TFile } from "obsidian";
import { TCompilerStep } from "src/compiler/SyncerPageCompiler";
import { surroundWithCalloutBlock, sanitizeQuery } from "src/utils/utils";
import Logger from "js-logger";

export class EmbedCodeCompiler {
	app: App;

	constructor(app: App) {
		this.app = app;
	}

	compile: TCompilerStep = (file) => async (text) => {
		let replacedText = text;
		const embedCodeRegex = /```(embed-)(?<lang>\w*)\s(?<yaml>.+?)```/gms;

		const matches = text.matchAll(embedCodeRegex);

		if (!matches) {
			return text;
		}

		for (const embed of matches) {
			const block = embed[0];
			const lang = embed[2];
			const yaml = embed[3];

			const { isInsideCalloutDepth, finalQuery } = sanitizeQuery(yaml);

			let fullSrc = "";
			let src = "";

			let metaYaml: any;

			try {
				metaYaml = parseYaml(finalQuery);
			} catch (e) {
				replacedText = replacedText.replace(
					block,
					"`ERROR: invalid embedding (invalid YAML)`",
				);

				return replacedText;
			}

			let srcPath = metaYaml.PATH;

			if (!srcPath) {
				replacedText = replacedText.replace(
					block,
					"`ERROR: invalid source path`",
				);

				return replacedText;
			}

			if (
				srcPath.startsWith("https://") ||
				srcPath.startsWith("http://")
			) {
				try {
					const httpResp = await requestUrl({
						url: srcPath,
						method: "GET",
					});
					fullSrc = httpResp.text;
				} catch (e) {
					const errMsg = `\`ERROR: could't fetch '${srcPath}'\``;
					replacedText = replacedText.replace(block, errMsg);

					return replacedText;
				}
			} else if (srcPath.startsWith("vault://")) {
				srcPath = srcPath.replace(/^(vault:\/\/)/, "");

				const tFile = this.app.vault.getAbstractFileByPath(srcPath);

				if (tFile instanceof TFile) {
					fullSrc = await this.app.vault.read(tFile);
				} else {
					const errMsg = `\`ERROR: could't read file '${srcPath}'\``;
					replacedText = replacedText.replace(block, errMsg);

					return replacedText;
				}
			} else {
				const errMsg =
					"`ERROR: invalid source path, use 'vault://...' or 'http[s]://...'`";
				replacedText = replacedText.replace(block, errMsg);

				return replacedText;
			}

			let srcLinesNum: number[] = [];
			const srcLinesNumString = metaYaml.LINES;

			if (srcLinesNumString) {
				srcLinesNum = analyseSrcLines(srcLinesNumString);
			}

			if (srcLinesNum.length == 0) {
				src = fullSrc;
			} else {
				src = extractSrcLines(fullSrc, srcLinesNum);
			}

			let title = metaYaml.TITLE;

			if (!title) {
				title = srcPath;
			}

			let options = metaYaml.OPTIONS;

			if (!options) {
				options = 'title="' + title + '"';
			}
			//
			// Escape '$' caracter to avoid unwanted replacement
			// see replace documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement
			//
			src = src.replace(/\$/g, "$$$$");

			if (isInsideCalloutDepth > 0) {
				const calloutSymbol = "> ".repeat(isInsideCalloutDepth);
				src = surroundWithCalloutBlock(src, isInsideCalloutDepth);

				replacedText = replacedText.replace(
					block,
					"```" +
						lang +
						" " +
						options +
						"\n" +
						calloutSymbol +
						src +
						"\n" +
						calloutSymbol +
						"```",
				);
			} else {
				replacedText = replacedText.replace(
					block,
					"```" + lang + " " + options + "\n" + src + "\n```",
				);
			}
		}

		return replacedText;
	};
}

function analyseSrcLines(str: string): number[] {
	str = str.replace(/\s*/g, "");
	const result: number[] = [];

	const strs = str.split(",");

	strs.forEach((it) => {
		if (/\w+-\w+/.test(it)) {
			const left = Number(it.split("-")[0]);
			const right = Number(it.split("-")[1]);

			for (let i = left; i <= right; i++) {
				result.push(i);
			}
			result.push(0); // three dots
		} else {
			result.push(Number(it));
			result.push(0); // three dots
		}
	});

	return result;
}

function extractSrcLines(fullSrc: string, srcLinesNum: number[]): string {
	let src = "";

	const fullSrcLines = fullSrc.split("\n");
	const fullSrcLinesLen = fullSrcLines.length;

	srcLinesNum.forEach((lineNum, index, arr) => {
		if (lineNum > fullSrcLinesLen) {
			arr.splice(index, 1);
		}
	});

	srcLinesNum.forEach((lineNum, index, arr) => {
		if (lineNum == 0 && arr[index - 1] == 0) {
			arr.splice(index, 1);
		}
	});

	srcLinesNum.forEach((lineNum, index) => {
		if (lineNum > fullSrcLinesLen) {
			return;
		}

		if (
			index == srcLinesNum.length - 1 &&
			lineNum == 0 &&
			srcLinesNum[index - 1] == fullSrcLinesLen
		) {
			return;
		}

		if (index == 0 && lineNum != 1) {
			src = "..." + "\n" + fullSrcLines[lineNum - 1];

			return;
		}

		// zeros is dots (analyseSrcLines)
		if (lineNum == 0) {
			src = src + "\n" + "...";

			return;
		}

		if (index == 0) {
			src = fullSrcLines[lineNum - 1];
		} else {
			src = src + "\n" + fullSrcLines[lineNum - 1];
		}
	});

	return src;
}
