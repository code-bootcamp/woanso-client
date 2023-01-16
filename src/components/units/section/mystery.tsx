import { dataHorror } from "./datas";
import ListMap from "./map.index";

export default function Mystery() {
  return (
    <>
      {dataHorror?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
