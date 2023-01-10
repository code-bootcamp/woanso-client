import ListMap from "./map.index";

export default function Action(props: any) {
  return (
    <>
      {props.dataAction?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
