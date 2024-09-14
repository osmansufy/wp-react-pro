import React from "react";
const fillNameFromOption = "wp-react-pro";

const ExampleComponent = () => {
  return (
    <>
      <Fill name={fillNameFromOption}>
        <div
          style={{
            padding: "10px",
            background: "#f0f8ff",
            border: "1px solid #ccc",
          }}
        >
          <h2>Pro Feature Enabled</h2>
          <p>This feature is only available in the Pro version.</p>
        </div>
      </Fill>
      <Fill name={fillNameFromOption}>
        <div>
          <h2>Pro Feature Enabled</h2>
          <p>This feature is only available filed two </p>
        </div>
      </Fill>
    </>
  );
};

export default ExampleComponent;
