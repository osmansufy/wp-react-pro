// src/pro-plugin.js

import { Fill } from "@wordpress/components";
import { registerPlugin } from "@wordpress/plugins";
import DokanProComponent from "./components/DokanProFields";

// Fill Component for Pro Features
const fillNameFromOption = "wp-react-pro";
const App = () => (
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
    <DokanProComponent />
  </>
);

// Register the plugin
registerPlugin("wp-react-pro", {
  render: App, // render the fill
});
