import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MyLayout.css"; // Import custom CSS for styling

const MyLayout = ({baseUrl}) => {
  const [componentData, setComponentData] = useState([
    { key: "component1", content: "Component 1", apiCalls: { add: 0, update: 0 }, edits: 0 },
    { key: "component2", content: "Component 2", apiCalls: { add: 0, update: 0 }, edits: 0 },
    { key: "component3", content: "Component 3", apiCalls: { add: 0, update: 0 }, edits: 0 },
  ]);

  const handleAdd = async (componentKey) => {
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    if (name && age) {
      console.log("Adding data:", { name: name, age: parseInt(age) });
      const response = await fetch(`http://127.0.0.1:5000/api/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component_key: componentKey,
          data: { name: name, age: parseInt(age) },
        }),
      });
      if (response.ok) {
        const updatedData = await response.json();
        setComponentData((prevData) =>
          prevData.map((component) =>
            component.key === componentKey
              ? {
                ...component,
                data: { ...component.data, ...updatedData }, // Merge updated name and age with existing data
                apiCalls: { ...component.apiCalls, update: component.apiCalls.update + 1 },
                edits: component.edits + 1,
              }
              : component
          )
        );
        console.log("Updated data:", updatedData);
      }
    }
  };

  const handleUpdate = async (componentKey) => {
    const name = prompt("Enter name:", componentData.find((c) => c.key === componentKey)?.content);
    const age = prompt("Enter age:");
    if (name && age) {
      const response = await fetch(`http://127.0.0.1:5000/api/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          component_key: componentKey,
          data: { name: name, age: parseInt(age) },
        }),
      });
      if (response.ok) {
        const updatedData = await response.json();
        setComponentData((prevData) =>
          prevData.map((component) =>
            component.key === componentKey
              ? {
                ...component,
                data: { ...component.data, ...updatedData }, // Merge updated name and age with existing data
                apiCalls: { ...component.apiCalls, update: component.apiCalls.update + 1 },
                edits: component.edits + 1,
              }
              : component
          )
        );
        console.log("Updated data:", updatedData);
      }
    }
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
              <button onClick={() => handleAdd(component.key)}>Add</button>
              <button onClick={() => handleUpdate(component.key)}>Update</button>
              {/* <p>{component.key} Add API calls: {component.apiCalls.add}</p> */}
              {/* <p>{component.key} Update API calls: {component.apiCalls.update}</p> */}
              <p>{component.key} Total API Calls: {component.edits}</p>
            </div>
            <table security="true" className="table" style={{ margin: "auto", borderCollapse: "collapse", border: "1px solid black", padding: "2px" ,width:"80"}}>
  <thead>
    <tr>
      <th style={{ border: "1px solid black" }}>Name</th>
      <th style={{ border: "1px solid black" }}>Age</th>
    </tr>
  </thead>
  <tbody>
    {component.data && (
      <tr>
        <td style={{ border: "1px solid black" }}>{component.data.name}</td>
        <td style={{ border: "1px solid black" }}>{component.data.age}</td>
      </tr>
    )}
  </tbody>
</table>

          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default MyLayout;