import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IPropsType {
  id: string;
  text?: string;
}

export default function PageMoveBtn({ id, text }: IPropsType) {
  const router = useRouter();

  return (
    <Button id={id} onClick={() => router.push(`/${id}`)}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 340px;
  height: 50px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  background: ${(props: IPropsType) =>
    props.id === "join" || props.id === "adminsignup" ? "#77170d" : "#ffffff"};
  border: ${(props: IPropsType) =>
    props.id === "join" || props.id === "adminsignup"
      ? "none"
      : "1px solid #d1d5d9"};
  color: ${(props: IPropsType) =>
    props.id === "join" || props.id === "adminsignup" ? "#ffffff" : " #738096"};
`;
