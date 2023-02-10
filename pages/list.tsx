import type { NextPage } from "next";
import { usePokeList } from "../hooks/usePokeList";
import Link from "next/link";

const List: NextPage = () => {
  const { isLoading, error, data } = usePokeList();

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>something went wrong...</div>;

  return (
    <>
      {data.results.map((r) => {
        return (
          <Link key={r.name} href={`/poke/${r.name}`}>
            <div>{r.name}</div>
          </Link>
        );
      })}
    </>
  );
};

export default List;
