import { dataSchool } from "./datas";
import ListMap from "./map.index";

export default function School() {
  return (
    <>
      {dataSchool?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
