import LayoutHeader from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

export default function LayoutPage(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      {props.children}
    </>
  );
}
