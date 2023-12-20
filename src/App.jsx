import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer.jsx";

import MarkdownPreview from "@uiw/react-markdown-preview"; // Markdown previewer library

// Default markdown: https://www.markdownguide.org/basic-syntax/
const defaultMarkdown = `<br>

Type your Markdown in the Editor!
<br>

### Hi there 👋 I'm [Juan](https://github.com/JuanPabloDiaz), a Passionate Front End Developer💻

\`\`\`javascript
const JuanDiaz = {
  Root: "Bogota | Colombia",
  code: [Javascript, React, Astro, Vue, HTML, CSS Tailwind, Python, Java, C#],
  tools: [VS-Code, Copilot],
  architecture: ["microservices", "event-driven", "design system pattern"],
  techCommunities: {
    Web: Platzi, FreeCodeCamp
  },
  #NeverStopLearning : true,
  @1diazDev: {
    Twitter: https://twitter.com/1diazdev,
    LinkedIn: https://www.linkedin.com/in/1diazdev/,
    GitHub: https://github.com/JuanPabloDiaz
  },
};
\`\`\`

## Basic Syntax

### Heading

# h1
## h2
### h3

### Text Decoration

**bold text**, *italic text*, ~~Strikethrough~~

### Blockquote

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

+ Sub-lists are made by indenting 2 spaces:
  - Item
    * Sub-item
+ Very easy!

### Mixed List

1. First item
   - Sub-item
      * Sub-sub-item
2. Second item
   - Sub-item

### Code

\`code\`

    // Some comments
    line 1 of code
    line 2 of code

### Link

[Markdown Guide](https://www.markdownguide.org)

Juan's: [Github](https://github.com/JuanPabloDiaz) & [Linkedin](https://www.linkedin.com/in/1diazdev/)

### Image

![juan dev](https://github.com/JuanPabloDiaz/markdownPreviewer/blob/main/src/assets/image/dev.png?raw=true)

### Image with Link

[![alt text](https://img.shields.io/badge/@1diazdev-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/1diazdev/)
[![Twitter](https://img.shields.io/badge/@1diazdev-1D9BF0.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://www.twitter.com/1diazdev)

### Horizontal Rule

---

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "Juan",
  "lastName": "Diaz",
  "role": "Front End Developer",
  "age": 30,
}
\`\`\`

\`\`\`bash
npm i @uiw/react-markdown-preview
\`\`\`

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### [Definition list](https://github.com/markdown-it/markdown-it-deflist)

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
`;

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
        {/* <div className="flex flex-col-reverse md:flex-row gap-1 w-11/12 h-5/6 rounded-lg shadow-lg shadow-black"> */}
        <div className="flex flex-col-reverse md:flex-row gap-1 w-11/12 h-5/6">
          <div className="flex flex-col justify-start items-start h-96 md:h-auto sm:w-full md:w-2/5 p-1 m-2 border-2 border-black rounded-lg shadow shadow-violet-950 shadow-lg">
            <h1 className="text-md md:text-2xl">Editor</h1>
            <textarea
              id="editor"
              className="w-full h-full p-1 custom-scrollbar"
              placeholder="Enter markdown here"
              onChange={(e) => setMarkdown(e.target.value)}
              value={markdown}
            ></textarea>
          </div>
          <div
            id="preview"
            className="custom-scrollbar flex flex-col justify-start items-start h-96 md:h-auto sm:w-full md:w-3/5 px-1 m-2 overflow-auto rounded-lg shadow-lg shadow-black"
          >
            <h1 className="fixed flex justify-start items-end text-md md:text-2xl bg-white h-10 w-6/12 z-50">
              Previewer
            </h1>
            <div className="w-full h-full px-5 pt-5">
              <MarkdownPreview
                source={markdown}
                // Set the default color mode for the rendered HTML:
                wrapperElement={{
                  "data-color-mode": "light",
                }}
                // Disable header links:
                // rehypeRewrite={(node, index, parent) => {
                //   if (
                //     node.tagName === "a" &&
                //     parent &&
                //     /^h(1|2|3|4|5|6)/.test(parent.tagName)
                //   ) {
                //     parent.children = parent.children.slice(1);
                //   }
                // }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
