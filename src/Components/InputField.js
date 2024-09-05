import React from 'react';

const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input type={type} placeholder={placeholder} className="input-field" />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
    </div>
  );
};

export default InputField;
