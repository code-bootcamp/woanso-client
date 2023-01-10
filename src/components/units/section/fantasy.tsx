import { horrorDatas } from "./detas";
import ListMap from "./map.index";

export default function Fantasy(props: any) {
  return (
    <>
      {props.dataFantasy?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
