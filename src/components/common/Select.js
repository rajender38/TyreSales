import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, onChange, placeholder, value, error, options }) => {
    let wrapperClass = "form-group";
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                >
                    {options.map(team => (
                        <option value={team.id}>
                            {team.value}
                        </option>
                    ))}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default Select;
