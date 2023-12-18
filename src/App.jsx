import { useState, useEffect } from "react";
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

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <h1 className="fixed top-5 text-3xl font-bold">Markdown Previewer</h1>
        <div className="flex gap-1 w-11/12 h-5/6 rounded-lg shadow-lg shadow-black p-2">
          <div className="flex flex-col justify-start items-start w-full p-1">
            <h1 className="text-3xl">Editor</h1>
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
            className="flex flex-col justify-start items-start w-full p-1"
          >
            <h1 className="text-3xl">Previewer</h1>
            <div className="w-full h-full border-2 border-black rounded-lg p-1">
              {markdown}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
