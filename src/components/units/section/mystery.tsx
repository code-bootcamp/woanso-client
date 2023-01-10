import ListMap from "./map.index";

export default function Mystery(props: any) {
  return (
    <>
      {props.dataHorror?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
