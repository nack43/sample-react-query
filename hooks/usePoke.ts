import { useQuery } from "react-query";

export const usePoke = (id: string) =>
  useQuery(`poke-${id}`, async () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    );
  });
