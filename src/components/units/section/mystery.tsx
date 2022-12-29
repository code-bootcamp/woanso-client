import { mysteryDatas } from "./detas";
import ListMap from "./map.index";

export default function Mystery() {
  return (
    <>
      {mysteryDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
