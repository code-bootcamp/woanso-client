import { ReSchool } from "../../commons/recommand/data";
import ListMap from "./map.index";

export default function Darama(props: any) {
  return (
    <>
      {ReSchool.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
