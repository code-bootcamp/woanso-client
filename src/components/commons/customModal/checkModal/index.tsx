import { useRouter } from "next/router";
import { Icon, ModalWrap, SubText, Text, TextWrap } from "./style";

interface ModalProps {
  confirm: boolean;
  setConfirm: (confirm: boolean) => void;
}

export default function ConfirmModal({ confirm, setConfirm }: ModalProps) {
  const router = useRouter();

  const handleOk = () => {
    setConfirm(false);
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
        okText="찜 취소"
        width={416}
      >
        <TextWrap>
          <Icon src="/icon/modal_check_icon.png" />
          <Text>찜을 취소할까요?</Text>
          {/* <SubText>취소된 예약은 되돌릴 수 없습니다.</SubText> */}
        </TextWrap>
      </ModalWrap>
    </>
  );
}
