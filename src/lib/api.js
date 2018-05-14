/*
* @FileName       : api.js
* @Version        : 1.0
* @DateOfCreation : 05/11/2018
* @Author         : $uˆˆ!t
* @Dependencies   : N/A
* @Description    : 
*
* Copyright (c) 2018
*/
class Api {
    static host = 'https://opentdb.com/api.php?amount=10';
    static headers() {
      return {
        'credentials': 'include',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json',
      };
    }
  
    static get(route) {
      return this.xhr(route, null, 'GET');
    }
  
    static put(route, params) {
      return this.xhr(route, params, 'PUT');
    }
  
    static post(route, params) {
      return this.xhr(route, params, 'POST');
    }
  
    static delete(route, params) {
      return this.xhr(route, params, 'DELETE');
    }
  
  
    static xhr(route, params, verb) {
      const url = `${Api.host}${route}`
      let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      options.headers = Api.headers()
      return fetch(url, options).then( resp => {
          if (resp.ok) {
              return JSON.parse(resp._bodyInit);
          }
          return json.then(err => {throw err});
      }).then( json => json );
    }
  }
  export default Api;