import { dataHorror } from "./datas";
import ListMap from "./map.index";

export default function Horror() {
  return (
    <>
      {dataHorror?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
