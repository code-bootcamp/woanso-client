import { horrorDatas } from "../mypage/myrentList/detas";
import ListMap from "./map.index";

export default function Horror(props: any) {
  return (
    <>
      {props.dataHorror?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
