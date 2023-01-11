import ListMap from "./map.index";

export default function School(props: any) {
  return (
    <>
      {props.dataSchool?.map((el: any, index: number) => (
        <ListMap el={el} key={index} />
      ))}
    </>
  );
}
