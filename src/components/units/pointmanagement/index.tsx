import * as S from "./style";
import { Modal } from "antd";

interface ModalProps {
  open: boolean;
  setOpen: () => boolean;
}

export default function PointChangeModal(props: ModalProps) {
  const onChangePoint = (e) => {
    console.log(e.target.value);
  };

  return (
    <S.ModalWrap
      title="포인트 지불 금액 변경"
      centered
      open={props.open}
      onOk={() => props.setOpen(false)}
      onCancel={() => props.setOpen(false)}
      width={1000}
    >
      <S.ModalInnerWrap>
        <S.TextBox>
          <S.Text>포인트 변경 전</S.Text>
          <S.Text>3000</S.Text>
        </S.TextBox>

        <S.Input placeholder="포인트를 입력하세요" onChange={onChangePoint} />
      </S.ModalInnerWrap>
    </S.ModalWrap>
  );
}
