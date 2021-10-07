import axios from 'axios'
export const baseUrl = "https://immense-lake-45903.herokuapp.com/api/v1"

export const authHeader = () => {
  const token = JSON.parse(localStorage.getItem('authToken'));
  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    const tokenHeader = { Authorization: `Token ${token}` }
    headers = {
      ...headers,
      ...tokenHeader
    }
  }
  return headers
}

export const GET = async (url) => {
    const headers = authHeader()
    const response = await axios.get(url, { headers })
    return response
  }

export const POST = async (apiUrl, body) => {
  const headers = authHeader()
  const response = await axios({
    method: 'POST',
    url: apiUrl,
    headers: headers,
    data: body
  })
  return response
}

export const PUT = async (apiUrl, body) => {
  const headers = authHeader()
  const response = await axios({
    method: 'PUT',
    url: apiUrl,
    headers: headers,
    data: body
  })
  return response
}

export const DELETE = async (apiUrl) => {
  const headers = authHeader()
  const response = await axios({
    method: 'DELETE',
    url: apiUrl,
    headers: headers
  })
  return response
}
