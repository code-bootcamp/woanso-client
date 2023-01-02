import { useRouter } from "next/router";
import LayoutHeader from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

// prettier-ignore
const HIDDEN_LAYOUT = [
  "/login",
  "/join",
  
];

export default function LayoutPage(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      {props.children}
    </>
  );
}
