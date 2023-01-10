import { Button, Modal } from "antd";
import { useState } from "react";
import * as S from "./style";



export default function CommunityDeleteModal(){
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    const onClickWriteReview = async (e) => {
        setIsModalOpen(true);
      };


    return (
        <>
        <Button onClick={onClickWriteReview}>모달</Button>

        { isModalOpen && <S.ModalCustom
              width="592px"
              open={true}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <S.Wrap>
                <S.TopWrap>
                  <S.Img>!</S.Img>
                  <S.Title>게시글을 삭제할까요?</S.Title>
                  <S.SubTitle>삭제된 후에는 되돌릴 수 없습니다</S.SubTitle>
                </S.TopWrap>
                <S.BottomWrap>
                  <S.BackButton>취소</S.BackButton>
                  <S.DelButton>삭제</S.DelButton>
                </S.BottomWrap>
              </S.Wrap>
            </S.ModalCustom>}
            </>
    )
}

