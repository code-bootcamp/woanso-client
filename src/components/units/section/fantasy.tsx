import { dataFantasy } from "./datas";
import ListMap from "./map.index";

export default function Fantasy() {
  return (
    <>
      {dataFantasy?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
