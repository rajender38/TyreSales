import * as types from './actionTypes';
import * as salesPersonApi from '../../api/salesPersonApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadsuccess(output, isFetching) {

  return {
    type: types.LOAD_SUCCESS,
    output,
    isFetching
  };
}

export function GetResults(fields, isFetching) {

  return function (dispatch) {

    dispatch(beginApiCall());
    return salesPersonApi
      .assignSalesPerson(fields)
      .then((output) => {

        isFetching = false;
        dispatch(loadsuccess(output, isFetching));
      })
      .catch((error) => {

        dispatch(apiCallError(error));
        throw error;
      });
  };
}
