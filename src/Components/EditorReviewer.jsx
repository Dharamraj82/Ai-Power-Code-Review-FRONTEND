import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import Loader from "./Loader";

const EditorReviewer = () => {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeReview = async () => {
    if (!code.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://ai-power-code-review-backend.onrender.com/ai/get-response/",
        { prompt: code }
      );
      setReview(response.data);
    } catch (error) {
      console.error("Review fetch error:", error);
      setReview("❌ Failed to get review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-[93vh] w-full overflow-hidden">
      {loading && (
        <div className="absolute inset-0 bg-black/10 bg-opacity-10 z-50 flex items-center justify-center">
          <Loader />
        </div>
      )}

      <main className="h-full overflow-x-hidden flex md:flex-row p-2 gap-5 bg-zinc-950 flex-col overflow-hidden">
        {/* Code Editor */}
        <div className="h-1/2 md:h-full w-full md:w-1/2 rounded-2xl bg-gray-900 relative text-xl drop-shadow-amber-50">
          <div className="h-full w-full">
            <Editor
              className="rounded-2xl md:text-xl border-[1px] border-zinc-300 h-full w-full"
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
          </div>

          <button
            onClick={codeReview}
            className="absolute bottom-1 right-5 px-4 py-2 active:scale-95 bg-sky-400 rounded-2xl font-medium cursor-pointer select-none"
          >
            Send
          </button>
        </div>

        {/* Review Panel */}
        <div className="h-1/2 md:h-full w-full md:w-1/2 bg-gray-800 rounded-2xl p-4 md:text-xl drop-shadow-amber-50 overflow-auto text-zinc-100">
          <button className="px-4 py-2 bg-sky-400 mb-2 font-medium select-none">
            Review
          </button>
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </div>
  );
};

export default EditorReviewer;
