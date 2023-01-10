import ListMap from "./map.index";

export default function Romance(props: any) {
  return (
    <>
      {props.dataRomance?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
