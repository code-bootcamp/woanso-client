import { actionDatas } from "./detas";
import ListMap from "./map.index";

export default function Action() {
  return (
    <>
      {actionDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
