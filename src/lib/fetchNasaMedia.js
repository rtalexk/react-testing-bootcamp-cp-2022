
export default async function fetchNasaMedia(date) {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);
  const data = await res.json();
  return data;
}
