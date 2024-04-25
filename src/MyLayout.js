import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MyLayout.css"; // Import custom CSS for styling

const MyLayout = () => {
  const [componentData, setComponentData] = useState([
    { key: "component1", content: "Component 1" },
    { key: "component2", content: "Component 2" },
    { key: "component3", content: "Component 3" },
  ]);

  const [apiCalls, setApiCalls] = useState({ add: 0, update: 0 });

  const handleAdd = () => {
    setComponentData([]);
    setApiCalls({ ...apiCalls, add: apiCalls.add + 1 });
  };

  const handleUpdate = () => {
    // Implement your update logic here
    setApiCalls({ ...apiCalls, update: apiCalls.update + 1 });
  };

  const layout = [
    { i: "component1", x: 0, y: 0, w: 3, h: 6 },
    { i: "component2", x: 3, y: 0, w: 9, h: 6 },
    { i: "component3", x: 0, y: 6, w: 12, h: 6 },
  ];

  return (
    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={(window.innerHeight - 20) / 12}
        width={window.innerWidth - 20}
      >
        {componentData.map((component) => (
          <div key={component.key} className="component">
            <div>
              <button onClick={handleAdd}>Add</button>
              <button onClick={handleUpdate}>Update</button>
              {/* <p>Add API calls: {apiCalls.add}</p> */}
              <p>Total API calls: {apiCalls.update}</p>
            </div>
            {component.content}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default MyLayout;
