import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ComponentPreview = ({ component, isForm = false }) => {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  const [activeTab, setActiveTab] = useState("preview"); // Add tab state for forms

  const toggleCodeVisibility = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopyClick = async () => {
    try {
      const textToCopy = isForm ? component.code : component.preview;
      await navigator.clipboard.writeText(textToCopy);
      setCopyText("Copied!");

      setTimeout(() => {
        setCopyText("Copy");
      }, 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopyText("Failed to copy");
    }
  };

  useEffect(() => {
    if (!showCode) {
      setCopyText("Copy");
    }
  }, [showCode]);

  const renderFormPreview = () => (
    <div className="mb-6 p-6 bg-gray-100 rounded-xl border border-gray-200">
      <div dangerouslySetInnerHTML={{ __html: component.preview }} />
    </div>
  );

  const renderFormCode = () => (
    <div className="mt-4 space-y-4">
      <div className="flex justify-end">
        <button
          onClick={handleCopyClick}
          className={`px-5 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
            copyText === "Copied!"
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {copyText}
        </button>
      </div>
      <div className="max-h-[300px] overflow-y-auto rounded-xl border border-gray-200">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            padding: "1rem",
            borderRadius: "0.75rem",
            backgroundColor: "#1E1E1E",
          }}
          wrapLongLines={true}
        >
          {component.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );

  return (
    <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold mb-2 text-gray-800">
        {component.title}
      </h3>
      <p className="text-gray-500 mb-6">{component.description}</p>

      {isForm ? (
        // Form Component Layout
        <div>
          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "preview"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "code"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("code")}
            >
              Code
            </button>
          </div>

          {/* Content */}
          {activeTab === "preview" ? renderFormPreview() : renderFormCode()}
        </div>
      ) : (
        // Regular Component Layout
        <>
          {/* Preview Section */}
          <div className="mb-6 p-6 bg-gray-100 rounded-xl border border-gray-200">
            <div dangerouslySetInnerHTML={{ __html: component.preview }} />
          </div>

          {/* Toggle Code Button */}
          <button
            onClick={toggleCodeVisibility}
            className="text-blue-600 font-medium hover:text-blue-700 transition duration-200"
          >
            {showCode ? "Hide Code" : "View Code"}
          </button>

          {showCode && (
            <div className="mt-4 space-y-4">
              {/* Copy Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleCopyClick}
                  className={`px-5 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                    copyText === "Copied!"
                      ? "bg-green-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {copyText}
                </button>
              </div>

              {/* Code Block */}
              <div className="max-h-[300px] overflow-y-auto rounded-xl border border-gray-200">
                <SyntaxHighlighter
                  language="html"
                  style={vscDarkPlus}
                  customStyle={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#1E1E1E",
                  }}
                  wrapLongLines={true}
                >
                  {component.preview}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ComponentPreview;
