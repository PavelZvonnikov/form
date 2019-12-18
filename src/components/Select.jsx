import React from "react";

export const Select = ({
  labelText,
  name,
  value,
  onChange,
  id,
  error,
  array
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={error ? "form-control error" : "form-control"}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
        {array.map(elem => (
          <option key={elem.id} value={elem.id}>
            {elem.name}
          </option>
        ))}
      </select>
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};
