import React from "react";
import ComponentPreview from "./ComponentPreview";

const ComponentCard = ({
  title,
  description,
  preview,
  code,
  category,
  layout = "grid",
}) => {
  const component = {
    title,
    description,
    preview,
    code,
    category,
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${
        layout === "list" ? "flex gap-6" : ""
      }`}
    >
      <div className={layout === "list" ? "flex-1" : ""}>
        <ComponentPreview component={component} />
      </div>
    </div>
  );
};

export default ComponentCard;
