import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { getJwtToken } from '../../service/jwtService'

const METHOD_GET = 'get'
const METHOD_POST = 'post'
const METHOD_PUT = 'put'
const METHOD_DELETE = 'delete'

const REQUEST_TIMEOUT = 60000

export class FetchData {
  getBlob (url, requestParams) {
    return this.makeRequest(url, METHOD_GET, null, requestParams, 'blob')
  }

  get (url, requestParams) {
    return this.makeRequest(url, METHOD_GET, null, requestParams)
  }

  post (url, body, requestParams) {
    return this.makeRequest(url, METHOD_POST, body, requestParams)
  }

  postFile (url, body, requestParams, uploadProgressHandler) {
    return this.makeRequest(url, METHOD_POST, body, requestParams, null, uploadProgressHandler)
  }

  put (url, body, requestParams) {
    return this.makeRequest(url, METHOD_PUT, body, requestParams)
  }

  delete (url, requestParams) {
    return this.makeRequest(url, METHOD_DELETE, null, requestParams)
  }

  async makeRequest (url, method, body, reqParams, responseType, uploadProgressHandler) {
    const requestParams = {
      method: method || METHOD_GET,
      data: body,
      params: {
        ...(reqParams || {})
      },
      responseType: responseType,
      onUploadProgress: progressEvent => {
        if (uploadProgressHandler) {
          uploadProgressHandler(Math.round((progressEvent.loaded * 100) / progressEvent.total))
        }
      }
    }

    requestParams.timeout = REQUEST_TIMEOUT

    if (method === METHOD_POST || method === METHOD_PUT) {
      requestParams.headers = {
        'Content-Type': 'application/json'
      }
    }

    const jwtAccessToken = await getJwtToken(REQUEST_TIMEOUT)
    if (jwtAccessToken) {
      requestParams.headers = {
        'Authorization': `Bearer ${jwtAccessToken}`
      }
    }
    return this.sendRequest(url, requestParams)
  }

  sendRequest (url, requestParams) {
    return new Promise((resolve, reject) => {
      axios(url, requestParams)
        .then(result => resolve(result.data))
        .catch(reason => {
          if (reason.response.status === 401) {
            window.localStorage.clear()
          }
          this.requestFailed(reason)
          reject(reason)
        })
    })
  }

  requestFailed (reason) {
    if (reason.message) {
      toastr.error(reason.message, reason.response && reason.response.data && reason.response.data.message)
    } else {
      toastr.error('Error', 'An error has occurred')
    }
  }
}

const api = new FetchData()

export default api