import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
export default function RentCheckModal(props: ModalProps) {
  const router = useRouter();

  const handleOk = () => {
    props.setIsModalOpen(false);
  };
  return (
    <>
      <S.ModalWrap
        centered
        // title="책 훼손, 또는 분실시"
        open={props.isModalOpen}
        onOk={handleOk}
        footer={[<Button onClick={handleOk}>확인</Button>]}
      >
        <S.InFoWrap>
          <S.Titles>
            <h1>훼손 및 분실</h1>
          </S.Titles>
          <S.UlList>
            <div>
              <li>대여한 도서의 페이지 훼손이나 분실 발생시에는</li>
              <li>추가비용이 청구될 수 있습니다.</li>
              <li>(단, 택배사가 분실 시 택배사가 배상합니다) </li>
            </div>
            <li>
              지정된 반납일에 반납이 안 될 경우에는 일당 연체료가 청구됩니다
            </li>
          </S.UlList>
          <S.Titles>
            <h1>취소 및 환불 안내</h1>
          </S.Titles>
          <S.UlList>
            <li>- 배송 출고 후에는 취소 및 환불이 불가합니다.</li>
            <div>
              <li>- 사정이 생겨 취소 혹은 날짜 변경을 원하실 경우 </li>
              <li>배송 출고 전 빠른 연락 부탁드립니다.</li>
            </div>
            <li>
              - 출고 작업은 오전 10시에 마감됩니다. 이 점 참고하여 주시기
              바랍니다.
            </li>
          </S.UlList>
          <S.AskTable>
            <h2>자세한 사항은</h2>
            <a href="https://open.kakao.com/o/s8iiqXVe">
              <S.AskKaKao>1:1문의하기</S.AskKaKao>
            </a>
            <h2>를 이용해 주시기 바랍니다</h2>
          </S.AskTable>
        </S.InFoWrap>
      </S.ModalWrap>
    </>
  );
}
