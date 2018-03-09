import axios from './index'

export default ({method = 'GET', url, ...restData}) => {
  if (method === 'GET') return axios.get(url, restData.params ? restData : { params: restData })
  console.log('....params...', restData)
  return axios.post(url, restData)
}
