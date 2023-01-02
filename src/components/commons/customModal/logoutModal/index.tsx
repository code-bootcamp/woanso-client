import { useRouter } from "next/router";
import { Icon, ModalWrap, Text, TextWrap } from "./style";

interface ModalProps {
  confirm: boolean;
  setConfirm: () => boolean;
}

export default function LogoutConfirmModal(props: ModalProps) {
  const router = useRouter();
  return (
    <>
      <ModalWrap
        centered
        visible={props.confirm}
        onOk={() => {
          props.setConfirm(false);
          router.push("/");
        }}
        onCancel={() => props.setConfirm(false)}
        width={416}
      >
        <TextWrap>
          <Icon />
          <Text>로그아웃 하시겠습니까?</Text>
        </TextWrap>
      </ModalWrap>
    </>
  );
}
