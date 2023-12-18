import { useState, useEffect } from "react";
import { marked } from "marked"; // Markdown parser library
import "./App.css";

// Enable GitHub flavored markdown (GFM)
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Default markdown: https://www.markdownguide.org/basic-syntax/
const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>


# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as 1.

Start numbering with offset:

57. foo
1. bar


## Code


Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Prevents scrolling on the body when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // To test the markdown parser, try this: https://markdown-it.github.io/

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="fixed top-5 text-3xl font-bold">Markdown Previewer</h1>
        <div className="flex flex-col-reverse md:flex-row gap-1 w-11/12 h-5/6 rounded-lg shadow-lg shadow-black p-2">
          <div className="flex flex-col justify-start items-start h-96 md:h-auto sm:w-full p-1">
            <h1 className="text-md md:text-2xl">Editor</h1>
            <textarea
              id="editor"
              className="w-full h-full border-2 border-black rounded-lg p-1 custom-scrollbar"
              placeholder="Enter markdown here"
              onChange={(e) => setMarkdown(e.target.value)}
              value={markdown}
            ></textarea>
          </div>
          <div
            id="preview"
            className="custom-scrollbar flex flex-col justify-start items-start h-96 md:h-auto sm:w-full p-1 overflow-auto"
          >
            <h1 className="text-md md:text-2xl">Previewer</h1>
            <div className="w-full h-full p-1">
              <div
                dangerouslySetInnerHTML={{ __html: marked(markdown) }} // Converts markdown to HTML
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-end fixed sm:bottom-6 bottom-2 w-5/6 gap-2">
          <p className="text-sm sm:text-md md:text-lg font-normal text-[#5f5f5f]">
            Developed by:
          </p>
          <span className="text-sm sm:text-md md:text-lg font-normal text-[#999999] hover:text-[#F8F9FA] transition duration-300">
            <a href="https://jpdiaz.dev/">Juan Diaz</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
