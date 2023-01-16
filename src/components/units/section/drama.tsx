import { dataDrama } from "./datas";
import ListMap from "./map.index";

export default function Darama() {
  return (
    <>
      {dataDrama?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
