import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL;
export function assignSalesPerson(fields) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ FristName: fields.FirstName, LastName: fields.LastName, Language: fields.Language, CarType: fields.CarType })
  };
  const url = baseUrl + 'api/assignSalesperson'
  return fetch(url, requestOptions)
    .then(handleResponse)
    .catch(handleError)

}
