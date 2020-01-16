import axios from "axios";

async function requestPut(url, data = {}) {
  const response = await axios.put(`http://localhost:8080${url}`,
    data,
    {
      headers: {somekey: localStorage.getItem('authToken')}
    });

  return response;
}

export default requestPut;