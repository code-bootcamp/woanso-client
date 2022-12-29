import { allDatas } from "./detas";
import ListMap from "./map.index";

export default function All() {
  return (
    <>
      {allDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
