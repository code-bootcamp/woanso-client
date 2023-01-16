import { dataAction } from "./datas";
import ListMap from "./map.index";

export default function Action() {
  return (
    <>
      {dataAction?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
