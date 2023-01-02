import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

// prettier-ignore
const HIDDEN_LAYOUT = [
  "/login",
  "/join",
  "/publicuser"
];

export default function LayoutPage(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      <LayoutNavigation />
      {props.children}
      <LayoutFooter />
    </>
  );
}
