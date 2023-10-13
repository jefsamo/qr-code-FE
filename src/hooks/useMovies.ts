/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { BASE_URL, IMovie } from "../constants";

const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/random`);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading };
};

export default useMovies;
