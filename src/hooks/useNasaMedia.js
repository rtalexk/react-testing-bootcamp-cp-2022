import { useEffect, useState } from "react";
import fetchNasaMedia from "../lib/fetchNasaMedia";

export default function useNasaMedia(date) {
  const [ media, setMedia ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function fetchNasaMediaHandler() {
      setError(null);

      const media = await fetchNasaMedia(date);

      if (media.code) {
        setError(media);
        setMedia(null);
      } else {
        setMedia(media);
      }
    }

    fetchNasaMediaHandler();
  }, [ date ]);

  return { error, media };
}
