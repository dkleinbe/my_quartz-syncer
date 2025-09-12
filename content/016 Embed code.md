---
publish: true
---
## Debug

```embed-bash
PATH: "vault://dot_bash_aliases.bash" 
```

> [!note]+  .bash_aliases
>
>```embed-bash
>PATH: "vault://dot_bash_aliases.bash" 
>```



## Embed Code from file


```embed-bash
PATH: "vault://dot_bashrc.bash" 
LINES: 1-15
```

## Embed Code from file with title 

```embed-bash
PATH: "vault://dot_bashrc.bash" 
TITLE: "This is the yaml title"
LINES: 1-15
```
## Embed Code from file with title option

```embed-bash
PATH: "vault://dot_bashrc.bash" 
TITLE: "This is the title"
LINES: 1-15
OPTIONS: 'title="THE option Title" showLineNumbers {3-5}' 
```

## Embed Code from file with title inside callout

> [!NOTE] My Title 
>```embed-bash
>PATH: "vault://dot_bashrc.bash" 
>TITLE: "This is the title"
>LINES: 1-15
>```


### Jusy shiki

```bash title="coucou" showLineNumbers {3-5}
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
```
## Shiki in callout

>[!code] My Title
>```bash title="coucou" showLineNumbers {3-5}
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


## Simple

```jsx title="COUCOU" showLineNumbers
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


```jsx title="COUCOU" 
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
