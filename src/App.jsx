import { useState, useEffect } from "react";
import { marked } from "marked"; // Markdown parser library
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

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
              className="w-full h-full border-2 border-black rounded-lg p-1"
              placeholder="Enter markdown here"
              onChange={(e) => setMarkdown(e.target.value)}
              value={markdown}
            ></textarea>
          </div>
          <div
            id="preview"
            className="flex flex-col justify-start items-start h-96 md:h-auto sm:w-full p-1 overflow-auto"
          >
            <h1 className="text-md md:text-2xl">Previewer</h1>
            <div className="w-full h-full p-1">
              <div
                className="p-2"
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
