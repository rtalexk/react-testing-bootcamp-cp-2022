
export default async function fetchNasaMedia(date) {
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    .then(res => res.json());
}
