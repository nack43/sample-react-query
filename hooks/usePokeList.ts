import { useQuery } from "react-query";

export const usePokeList = () =>
  useQuery("pokelist", async () => {
    return fetch("https://pokeapi.co/api/v2/pokemon-species").then((res) =>
      res.json()
    );
  });
