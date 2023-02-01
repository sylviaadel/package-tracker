import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        localStorage.setItem("MyPackages", JSON.stringify(response.data));
      } catch (err) {
        var localStorageItems = localStorage.getItem("MyPackages");
        if (localStorageItems != null) {
          setData(JSON.parse(localStorageItems));
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
