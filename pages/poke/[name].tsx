import type { NextPage } from "next";
import { useRouter } from "next/router";
import { usePoke } from "../../hooks/usePoke";
import Image from "next/image";

const PokeDetails = ({ name }: { name: string }) => {
  const { error, isLoading, data } = usePoke(name);
  if (isLoading) return <div>loading...</div>;

  if (error) return <div>something went wrong...</div>;

  return (
    <div>
      <p>{name}</p>
      <Image
        height={200}
        width={200}
        alt={name}
        src={data.sprites.front_default}
      />
    </div>
  );
};

const Poke: NextPage = () => {
  const {
    query: { name },
  } = useRouter();

  const pokeName = name && typeof name === "string" ? name : "";

  // todo: ''  で呼ばれたらどうする？
  // next が 404 返す poke/ は poke/indexだから
  // page コンポーネントと中のコンポーネントを分離すれば良くない？
  // 分離して確実に name が渡るようにする
  // page と ui component の責務を分離する

  // これは Next.js 側で poke/index.tsx探しに行くからなければ404になるのでハンドリング不要

  return <PokeDetails name={pokeName} />;
};

export default Poke;
