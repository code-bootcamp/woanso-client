import * as S from "./style";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function FaqModal({ open, setOpen }: ModalProps) {
  const handleOk = () => {
    setOpen(false);
  };

  return (
    <S.ModalWrap centered open={open} onOk={handleOk} width={1000}>
      <S.ModalInnerWrap>
        <S.ListWrap>
          <S.Title>자주 묻는 질문</S.Title>

          <S.List>
            <S.Qustion>
              <S.Text>
                <S.Qmark>Q</S.Qmark> 대여 기간을 연장할 수 있나요?
              </S.Text>
            </S.Qustion>

            <S.Answer>
              <p>
                네 가능합니다.
                <br />
                대여 기간을 연장할 경우, 해당 기간에 대한 추가 요금이
                발생합니다.
              </p>
            </S.Answer>
          </S.List>
          <S.List>
            <S.Qustion>
              <S.Text>
                <S.Qmark>Q</S.Qmark>보증금은 어떻게 돌려받을 수 있나요?
              </S.Text>
            </S.Qustion>

            <S.Answer>
              <p>
                보증금은 책 상태 확인 후, 이상이 없으면 구매하신 결제 수단으로
                전액 환불됩니다.
                <br />
                ⛔️ 금액 차감 후 지급되는 경우
                <br />
                - 책에 오물 및 훼손이 발견되면 일정 금액 차감 후 환불
                진행됩니다.
                <br />- 대여 기간을 초과하면 기간에 대한 금액 차감 후 한불
                진행됩니다.
              </p>
            </S.Answer>
          </S.List>
          <S.List>
            <S.Qustion>
              <S.Text>
                <S.Qmark>Q</S.Qmark>대여 반납은 어떻게 하나요?
              </S.Text>
            </S.Qustion>

            <S.Answer>
              <p>
                대여 마지막 날 수령 장소(ex, 경비실, 문 앞)에 놔두시면 택배
                기사님께서 수거해가십니다.
                <br />
                주소에 따라 기사님의 수령 시간이 다를 수 있으니 가급적 오전 중에
                두시는 걸 권합니다.
              </p>
            </S.Answer>
          </S.List>
          <S.List>
            <S.Qustion>
              <S.Text>
                <S.Qmark>Q</S.Qmark>포인트 결제는 뭔가요?
              </S.Text>
            </S.Qustion>

            <S.Answer>
              <p>
                일정 금액을 선불로 지불하고 이용하는 시스템입니다.
                <br />
                포인트로 결제 시 더 많은 할인 혜택을 받을 수 있습니다.
              </p>
            </S.Answer>
          </S.List>
        </S.ListWrap>
      </S.ModalInnerWrap>
    </S.ModalWrap>
  );
}
