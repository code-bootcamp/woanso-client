import { dataRomance } from "./datas";
import ListMap from "./map.index";

export default function Romance() {
  return (
    <>
      {dataRomance?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
