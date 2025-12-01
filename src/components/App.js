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
    setFields(fields.filter((f) => f.id !== id));
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFields(fields.map((f) =>
      f.id === id ? { ...f, [name]: value } : f
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedData = fields.map(({ name, age }) => ({ name, age }));

    console.log(cleanedData);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((item) => (
          <div key={item.id} className="field-row">
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
              onClick={() => removeField(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More..
        </button>

        <button type="submit">
          Submit
        </button>

        <p>After clicking submit check console for data</p>
      </form>
    </div>
  );
};

export default App;
