import { useMutation } from "@apollo/client";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { deleteModal } from "../../../../commons/libraries/store";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD } from "../detail/queries";
import * as S from "./style";

export default function CommunityDeleteModal() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useRecoilState(deleteModal);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        id: String(router.query.boardId),
      },
    });
    setIsModalOpen(false);
    router.push(`/community/`);
  };

  const onClickeBack = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <S.ModalCustom
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
              <S.BackButton onClick={onClickeBack}>취소</S.BackButton>
              <S.DelButton onClick={onClickDelete}>삭제</S.DelButton>
            </S.BottomWrap>
          </S.Wrap>
        </S.ModalCustom>
      )}
    </>
  );
}
