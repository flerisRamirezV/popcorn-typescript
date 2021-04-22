export const sendHttpRequest = (url:string) => {
  return fetch(url)
    .then(response => {
      return response.json()
    })
}

export const fixedEncodeURIComponent= (str:string)=> {
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}