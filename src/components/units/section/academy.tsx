import { academyDatas } from "./detas";
import ListMap from "./map.index";

export default function Academy() {
  return (
    <>
      {academyDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
