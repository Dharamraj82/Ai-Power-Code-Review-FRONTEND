import React from "react";
import EditorReviewer from "./Components/EditorReviewer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <EditorReviewer />
        </div>
      </div>
    </>
  );
};

export default App;
