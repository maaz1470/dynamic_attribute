import React, { useState } from 'react';
// import axios from 'axios';

function App() {
  const [attributeName, setAttributeName] = useState('');
  const [attributeValues, setAttributeValues] = useState([]);
  const [newValue, setNewValue] = useState('');

  const addValue = () => {
    setAttributeValues([...attributeValues, newValue]);
    setNewValue('');
  };

  const saveAttribute = () => {
    const attributeData = {
      name: attributeName,
      values: attributeValues,
    };

    // Send a POST request to your Laravel API to save the dynamic attribute and its values.
    // axios.post('/api/create-dynamic-attribute', attributeData)
    //   .then((response) => {
    //     // Handle the successful creation of the attribute
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Attribute Name"
        value={attributeName}
        onChange={(e) => setAttributeName(e.target.value)}
      />

      <div>
        <input
          type="text"
          placeholder="Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={addValue}>Add Value</button>
      </div>

      <div>
        {
          attributeValues.map((value, index) => (
            <div key={index}>{value}</div>
          ))
        }
      </div>

      <button onClick={saveAttribute}>Save Attribute</button>
    </div>
  );
}


export default App;