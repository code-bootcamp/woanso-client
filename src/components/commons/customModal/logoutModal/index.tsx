import { useRouter } from "next/router";
import { Icon, ModalWrap, Text, TextWrap } from "./style";

interface ModalProps {
  confirm: boolean;
  setConfirm: (confirm: boolean) => void;
}

export default function LogoutConfirmModal({
  confirm,
  setConfirm,
}: ModalProps) {
  const router = useRouter();

  const handleOk = () => {
    setConfirm(false);
    router.push("/");
  };

  const handleCancel = () => {
    setConfirm(false);
  };
  return (
    <>
      <ModalWrap
        centered
        visible={confirm}
        onOk={handleOk}
        onCancel={handleCancel}
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
