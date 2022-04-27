import { useEffect, useState } from "react";
import fetchNasaMedia from "../lib/fetchNasaMedia";

export default function useNasaMedia(date) {
  const [media, setMedia] = useState(null);

  const fetchNasaMediaHandler = async () => {
    const media = await fetchNasaMedia(date);
    setMedia(media);
  }

  useEffect(() => {
    fetchNasaMediaHandler();
  });

  return media;
}
