#
# My alias
#
ll() {
        LC_COLLATE=C ls -ail $* --color=always --group-directories-first | less -eRX;
}
#
# Deal with history
#
alias h='history | less -eRX'
# edit cmd with vi
alias fce='fc -e vi'
# list last 30 cmd
alias fcl='fc -l -30'
#
# Logging
alias bootlog="sudo sed $'s/\^\[/\E/g;s/\[1G\[/\[27G\[/' /var/log/boot.log"
#
# asciinema
#
#    rec name[options] => asciinema rec ~/tmp/<date>-rec_name options
#
#    play file [options] => asciinema play file options 
#
rec() {
	asciinema rec ~/tmp/`date +%Y-%m-%d-rec_`$*
}

play() {

	asciinema play $*
}
testargs() {
	echo "Last arg: ${@: -1}"
	echo "Args except last: ${@: 1: $#-1}"
}

