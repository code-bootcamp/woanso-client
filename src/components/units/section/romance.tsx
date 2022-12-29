import { romanceDatas } from "./detas";
import ListMap from "./map.index";

export default function Romance() {
  return (
    <>
      {romanceDatas.map((el, index) => (
        <ListMap el={el} index={index} />
      ))}
    </>
  );
}
