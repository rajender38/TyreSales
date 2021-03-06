import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomerEnquiryUI from './CustomerEnquiryUI';
import { GetResults } from '../redux/actions/salesPersonActions';

export function CustomerEnquiryLogic({ output, isFetching, GetResults, ...props }) {
  ;
  const [fields, setFields] = useState({ ...props.fields });
  const [errors, setErrors] = useState({});
  const options = useState({

    Language: [
      { id: "", value: "Select Language" },
      { id: "A", value: "Speak Greek" },
      { id: "E", value: "Speak French" },
    ],

    CarType: [
      { id: "", value: "Select Car type" },
      { id: "B", value: "Sports car specialist" },
      { id: "C", value: "Family car specialist" },
      { id: "D", value: "Tradie vehicle specialist" }
    ]

  });

  useEffect(() => {
    setFields({ ...props.fields });

  }, [props.fields]);

  function handleChange(event, fieldName) {
    ;
    if (event !== undefined) {
      let name;
      let value;
      if (event.target === undefined) {
        name = fieldName.name;
        value = event.map(s => s.value);
      }
      else {
        name = event.target.name;
        value = event.target.value;
      }
      setFields((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  }

  function formIsValid() {
    const { FirstName, LastName } = fields;
    const errors = {};
    if (!FirstName) errors.FirstName = 'First Name is required';
    if (!LastName) errors.LastName = 'Last Name is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleValidate(event) {
    ;
    event.preventDefault();
    if (!formIsValid()) return;

    GetResults(fields, true).catch((e) => {
      alert('error' + e);
    });

  }


  return (
    <CustomerEnquiryUI
      fields={fields}
      options={options}
      errors={errors}
      onChange={handleChange}
      onValidate={handleValidate}
      result={output}
      isFetching={isFetching}
    />
  );
}

CustomerEnquiryLogic.propTypes = {
  output: PropTypes.object.isRequired,
  GetResults: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {

  return {
    output: state.output,
    isFetching: state.isFetching
  };
}

const mapDispatchToProps = {
  GetResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEnquiryLogic);
