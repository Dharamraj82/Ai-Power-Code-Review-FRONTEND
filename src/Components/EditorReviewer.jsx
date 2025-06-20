import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism, { languages } from "prismjs";
import "prismjs/components/prism-jsx";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";

const EditorReviewer = () => {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState(``);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeReview = async () => {
    const response = await axios.post(
      "https://ai-power-code-review-backend.onrender.com/ai/get-response/",
      { prompt: code }
    );
    // console.log(response.data);
    setReview(response.data);
  };

  return (
    <main className="h-screen flex md:flex-row p-2 gap-5 bg-zinc-950 flex-col">
      {/* Code */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 rounded-2xl bg-gray-900 relative text-xl drop-shadow-amber-50">
        <div className="h-full w-full">
          <Editor
            className="rounded-2xl md:text-xl border-[1px] border-zinc-300  h-full w-full "
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            placeholder="Enter Code Here"
            required
            padding={16}
            style={{
              backgroundColor: "#111827",
              overflow: "auto",
              whiteSpace: "pre",
              fontFamily: "monospace",
              margin: 0,
              color: "#fff",
            }}
          />

          {/* <pre
            className="h-full w-full overflow-auto rounded-xl"
            style={{ backgroundColor: "#111827", margin: 0 }}
          >
            <code className="language-jsx whitespace-pre block">
              {

              }
            </code>
          </pre> */}
        </div>

        <button
          onClick={codeReview}
          className="absolute bottom-1 right-5 px-4 py-2 active:scale-95 bg-sky-400 rounded-2xl font-medium cursor-pointer select-none"
        >
          Send
        </button>
      </div>

      {/* Review */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 bg-gray-800 rounded-2xl   p-4 md:text-xl drop-shadow-amber-50 overflow-auto text-zinc-100">
        <button className="px-4 py-2 bg-sky-400 mb-2 font-medium select-none">
          Review
        </button>
        <Markdown>{review}</Markdown>
      </div>
    </main>
  );
};

export default EditorReviewer;
