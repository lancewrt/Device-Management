import React, { useState } from 'react';
import axios from 'axios';

const AutoSuggestInput = ({ label, name, value, setFormData, error, endpoint }) => {
  const [query, setQuery] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const val = e.target.value.toUpperCase();
    setQuery(val);
    setFormData(prev => ({ ...prev, [name + '_name']: val }));

    if (val.length >= 1) {
      try {
        const res = await axios.get(`http://localhost:5000/api/${endpoint}/search?q=${val}`);
        setSuggestions(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    setQuery(item[`${name}_name`] || item[`${name}_title`]);
    setFormData(prev => ({
      ...prev,
      [name]: item[`${name}_id`],
      [name + '_name']: item[`${name}_name`] || item[`${name}_title`]
    }));
    console.log("id", item[`${name}_id`]);
    console.log("name", item[`${name}_name`]);
   
    setSuggestions([]);
  };

  const handleBlur = async () => {
    const matched = suggestions.find(item =>
      (item[`${name}_name`] || item[`${name}_title`]) === query
    );

    if (!matched && query.trim() !== '') {
      try {
        const res = await axios.post(`http://localhost:5000/api/${endpoint}`, { name: query });
        setFormData(prev => ({
          ...prev,
          [name]: res.data[`${name}_id`],
          [name + '_name']: query
        }));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className=" position-relative">
      <label htmlFor={name} className="form-label" style={{ zIndex: 1, position: 'relative' }}>{label}</label>
      <input
        type="text"
        className="form-control text-uppercase"
        placeholder={`Enter ${label}`}
        name={name}
        id={name}
        value={query}
        onChange={handleInputChange}
        onBlur={() => {setTimeout(() => setSuggestions([]), 150); setTimeout(() => handleBlur(), 7000)}}
        autoComplete="off"
        style={{ zIndex: 2, position: 'relative' }}
      />
      {suggestions.length > 0 && (
        <ul className="list-group w-100" style={{ maxHeight: '150px', overflowY: 'auto', position: 'absolute', zIndex: 3 }}>
          {suggestions.map((item, idx) => (
            <li
              key={idx}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
              style={{ cursor: 'pointer' }}
            >
              {item[`${name}_name`] || item[`${name}_title`]}
            </li>
          ))}
        </ul>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AutoSuggestInput;
