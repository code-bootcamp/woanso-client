import { useRouter } from "next/router";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

// prettier-ignore
const HIDDEN_LAYOUT = [
  "/login/",
  "/join/",
  "/idpwFind/",
  "/adminlogin/",
  "/adminsignup/",
  "/adminpage/",
  "/adminIdpwFind/"
];

export default function LayoutPage(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout && <LayoutHeader />}
      {props.children}
      {!isHiddenLayout && <LayoutFooter />}
    </>
  );
}
