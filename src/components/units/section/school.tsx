import { ReSchool } from "../../commons/recommand/data";
import ListMap from "./map.index";

export default function School() {
  return (
    <>
      {ReSchool?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
