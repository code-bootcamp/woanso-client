import ListMap from "./map.index";
import { ReRomance } from "../../commons/recommand/data";

export default function Romance() {
  return (
    <>
      {ReRomance.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
