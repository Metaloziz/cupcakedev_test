const BASE_URL = 'http://localhost:3000/api/v1/'

export const api = {
  getData: async ()=>{
    const res = await fetch(`${BASE_URL}first`)
  }
}
