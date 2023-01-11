import ListMap from "./map.index";

export default function Darama(props: any) {
  return (
    <>
      {props.dataDrama?.map(
        (el: any, index: number) => index < 5 && <ListMap el={el} key={index} />
      )}
    </>
  );
}
