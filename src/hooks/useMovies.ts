/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/random`);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        setMovies(data);
        console.log(isLoading);
        console.log(error);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [movies, error, isLoading]);

  return { movies };
};

export default useMovies;
