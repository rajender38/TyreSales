import React from "react";
import PropTypes from "prop-types";
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const SelectInput = ({ name, label, onChange, placeholder, value, error }) => {
    let wrapperClass = "form-group";


    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <Select options={options} 
                isMulti="true" 
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default SelectInput;
