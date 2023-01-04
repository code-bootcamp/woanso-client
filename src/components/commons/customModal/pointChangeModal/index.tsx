import { ChangeEvent } from "react";
import * as S from "./style";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function PointChangeModal({ open, setOpen }: ModalProps) {
  const onChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <S.ModalWrap
      title="포인트 지불 금액 변경"
      centered
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      width={416}
    >
      <S.ModalInnerWrap>
        <S.TextWrap>
          <S.Text>포인트 변경 전</S.Text>
          <S.Text>3000</S.Text>
        </S.TextWrap>

        <S.Input placeholder="포인트를 입력하세요" onChange={onChangePoint} />
      </S.ModalInnerWrap>
    </S.ModalWrap>
  );
}
