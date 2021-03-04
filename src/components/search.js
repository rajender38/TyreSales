import React from 'react';
import TextInput from './common/TextInput';
import CheckBox from './common/CheckBox';
import Select from "./common/Select";
import { Table } from 'react-bootstrap';

export default function Login({ fields, checkboxValue, errors, onValidate, onChange, onClick, result, isStaticWebPages, onClickStatic }) {
  debugger;
  return (
    <form onSubmit={onValidate}>
      <div style={{ opacity: result.isFetching ? 0.5 : 1 }}>
        <Table>
          <tbody>
            <tr>
              <td ></td>
              <td colSpan="2" align="center" >
                <h2>Customer Enquiry</h2>
              </td>
              <td></td>
            </tr>
            <tr>
              <td ></td>
              <td>
                <TextInput
                  name='FirstName'
                  label='FirstName'
                  value={fields.FirstName}
                  onChange={onChange}
                  error={errors.FirstName}
                />
              </td>
              <td >
                <TextInput
                  name='LastName'
                  label='LastName'
                  value={fields.LastName}
                  onChange={onChange}
                  error={errors.LastName}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td ></td>
              <td>
                <Select
                  name='Language'
                  label='Language'
                  value={fields.Language}
                  onChange={onChange}
                  error={errors.Language}
                />
              </td>
              <td >
                <Select
                  name='CarType'
                  label='CarType'
                  value={fields.CarType}
                  onChange={onChange}
                  error={errors.CarType}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2" align="center">
                {result.isFetching ? <h2>Loading...</h2> : <div></div>}
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2" align="right">
                <button type='submit' className='btn btn-primary'>
                  Submit
            </button>
              </td>
              <td></td>
            </tr>
            <tr><td></td><td colSpan="2">
              <label htmlFor="lbloutput">{result.output === [] ? result.output : result.output.output}</label>
            </td><td></td></tr>
          </tbody>
        </Table>

      </div>
    </form>
  );
}
