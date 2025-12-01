import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([
    { id: Date.now(), name: "", age: "" }
  ]);

  const addField = () => {
    setFields([
      ...fields,
      { id: Date.now(), name: "", age: "" }
    ]);
  };

  const removeField = (id) => {
    setFields(fields.filter((item) => item.id !== id));
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFields(fields.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", fields);
  };

  return (
    <div className="container">
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((item) => (
          <div className="field-row" key={item.id}>
            
            <input
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleChange(item.id, e)}
            />

            <input
              name="age"
              placeholder="Age"
              value={item.age}
              onChange={(e) => handleChange(item.id, e)}
            />

            <button
              type="button"
              className="remove-btn"
              onClick={() => removeField(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" className="add-btn" onClick={addField}>
          Add More..
        </button>

        <button type="submit" className="submit-btn">
          Submit
        </button>

        <p className="info-text">After clicking submit check console for data</p>
      </form>
    </div>
  );
};

export default App;
