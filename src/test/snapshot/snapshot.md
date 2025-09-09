IMAGES: 
A Assets/travolta.png
,A Assets/travolta.webp
,A Assets/unused_image.png
==========
0 QA hell/Break links + transclusions.md
==========
---
publish: true
---
Link with whitespace after link part: 
[[Empty file \| hehe this one breaks for real]]

Whitespace and bar in name: 


Random hashes in transclusion title: 


This is a header ref which doesn't exist: 


This is above the header
## Header

This should be in this header block

## Another header

This shouldn't be under a header transclusion



Cheese 


This is a header transclusion that is slightly that uses a special character in the header

## Header

This should be in this header block



==========
000 Home.md
==========
---
{"publish":true,"permalink":"/000 Home.md","created":"2025-08-09T16:08:28.650+02:00","modified":"2025-08-09T16:08:28.650+02:00","cssclasses":""}
---

## Welcome

Welcome to the digital garden testing vault! 

This vault is part of the `quartz-syncer` repository, and meant to act as a staging area for 

1. providing a maintainable testing ground for the digital garden features
2. documenting features in action 

Hopefully in the future it can be part of automated testing too! Say, snapshot testing the output from this garden would actually be relatively easy! :) 

> [!info] See README for instructions on adding info to .env for testing


## Snapshot tests

This test vault enables snapshot testing of the garden compilation! To generate the snapshot: 

- run `Generate Syncer Snapshot` from the command palette
- Snapshot generation is also run on plugin load. 


## Plugins 

This garden should have the following plugins 

- [x] [[P Plugins/PE Excalidraw/PE1 Transcluded excalidraw]]
- [x] [[P Plugins/PD Dataview/PD1 Dataview]]
- [x] hot reload (reloads obsidian dev plugins on changes)
==========
016 Embed code.md
==========
---
{"publish":true,"permalink":"/016 Embed code.md","created":"2025-08-28T18:29:05.609+02:00","modified":"2025-08-29T18:43:52.573+02:00","cssclasses":""}
---

## Just code

```bash
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
...
```

## With title

```bash
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
...
```

## Inside callout

> [!NOTE] Title
> ```bash
>  # ~/.bashrc: executed by bash(1) for non-login shells.
> # see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
> # for examples
> 
> # If not running interactively, don't do anything
> case $- in
>     *i*) ;;
>       *) return;;
> esac
> 
> # don't put duplicate lines or lines starting with space in the history.
> # See bash(1) for more options
> HISTCONTROL=ignoreboth
> 
> # append to the history file, don't overwrite it
> ...
> ```

## Shiki in callout

>[!code]
>```bash title="coucou" showLineNumbers
># ~/.bashrc: executed by bash(1) for non-login shells. 
># see /usr/share/doc/bash/examples/startup-files (in the package bash-doc) 
># for examples 
># If not running interactively, don't do anything 
>case $- in
 >   *i*) ;;
 >     *) return;;
>esac
>
># don't put duplicate lines or lines starting with space in the history.
># See bash(1) for more options
>HISTCONTROL=ignoreboth
>```





## Shiki test

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

==========
E Embeds/E02 PNG published.md
==========
---
publish: true
---


![[A Assets/travolta.png]]
A Assets/travolta.png
==========
E Embeds/E04 PNG reuse.md
==========
---
publish: true
---
This file uses the same image as in [[E Embeds/E03 PNG_not_published]]. When removing the other one, the image should not be removed. 

![[A Assets/unused_image.png|100]]
A Assets/travolta.png
,A Assets/unused_image.png
==========
E Embeds/E05 WEBP published.md
==========
---
publish: true
---

![[A Assets/travolta.webp]]
A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/E07 Image with alt attributes.md
==========
---
publish: true
---
This should render to a 200 px wide image with the alt text "center"
Like so: `![travolta.png|center|200](/img/user/A%20Assets/travolta.png)`
![[A Assets/travolta.png|center|200]]


This should render to an image with the alt text "left", like so:
`[travolta.png|left](/img/user/A%20Assets/travolta.png)`
![[A Assets/travolta.png|left]]
A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T1 BaseFile.md
==========
---
{"publish":true,"permalink":"/E Embeds/Transclusions/T1 BaseFile.md","created":"2025-08-09T16:08:28.658+02:00","modified":"2025-08-09T16:08:28.658+02:00","cssclasses":""}
---


---
publish: false
---
How deep can you go? 

[[E Embeds/Transclusions/files/T4 Deeper]]

---
publish: false
---
I can go deeper!

---
publish: false
---
There must be a limit!!!

[[E Embeds/Transclusions/T1 BaseFile]] recursive linking yay

---
publish: false
---
This is as far as we can go! Or is it???

![[E Embeds/Transclusions/T2 Too deep to transclude\| This transclusion will be left out :(())]]

Bonus: 
---
publish: true
---

![[Excalidraw/Drawing 2023-09-23 22.41.09.excalidraw]]

Bonus pic: 

![[A Assets/travolta.png|100]]


A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T2 Too deep to transclude.md
==========
---
publish: true
---
This one isn't isn't transcluded anymore (too deep)

![[A Assets/travolta.png|100]]
A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T3 Transcluded block.md
==========
---
publish: true
---

Below it should just say "cheese": 

cheese 

A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T4 Transcluded header.md
==========
---
publish: true
---

Below should be a header and one line of text: 
## Header

This should be in this header block



A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T5 transclude custom filters.md
==========
---
publish: true
---




this plugin has custom filter that turns ❄️ (snow emoji) into 🌞 (THE SUN). When published, this file should have a lot of sun-emojis. 


❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️

A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
E Embeds/Transclusions/T6 transclusion inside codeblock.md
==========
---
publish: true
---
#known-issue [Issue](https://github.com/oleeskild/quartz-syncer/issues/113)

Transclusions inside code blocks should not show transcluded content, but the literal text inside. Currently it transcludes the content

`


this plugin has custom filter that turns ❄️ (snow emoji) into 🌞 (THE SUN). When published, this file should have a lot of sun-emojis. 


❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️
`

```



this plugin has custom filter that turns ❄️ (snow emoji) into 🌞 (THE SUN). When published, this file should have a lot of sun-emojis. 


❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️

```
A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
L Languages/Transclude Headers.md
==========
---
publish: true
---

#  解决

This should be visible when transcluding the header above



A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
L Links/01 Link to header.md
==========
---
publish: true
---
Link to header should keep header link info
[[000 Home#Welcome]]

Link to header with special characters should work
# A header: With a colon
Body under header

A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
P Plugins/PE Excalidraw/PE1 Transcluded excalidraw.md
==========
---
publish: true
---

![[Excalidraw/Drawing 2023-09-23 22.41.09.excalidraw]]
A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
P Plugins/PE Excalidraw/PE2 excalidraw with image.md
==========
---
publish: true
---
#known-issue 


![[Excalidraw/with image.excalidraw]]


A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
Path Rewriting/004 Folder set to root.md
==========
---
publish: true
---
This folder is set in path rewrite settings as 

`folder:`

This means this file should be in the root directory :) 

This subfolder also contains path rewrite testing! 

A Assets/travolta.png
,A Assets/unused_image.png
,A Assets/travolta.webp
==========
