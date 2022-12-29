import { horrorDatas } from "./detas";
import ListMap from "./map.index";

export default function Horror() {
  return (
    <>
      {horrorDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
