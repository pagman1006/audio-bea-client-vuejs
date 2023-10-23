import axios from 'axios'

const audiobeaApi = axios.create({
  baseURL: 'http://192.168.1.177:8081/audio-bea/v1/api',
})

export default audiobeaApi