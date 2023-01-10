import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { PopupModal } from "../../../commons/libraries/store";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../commons/types/generated/types";
import CommunityModal1 from "../communityModal";
import CommunityTrendUI from "../communityTrend";
import { CREATE_BOARD, UPDATE_BOARD } from "./queries";
import * as S from "./styles"

export default function CommunityWriteUI(props){
    const router = useRouter();
    
    const [isModalOpen, setIsModalOpen] = useRecoilState(PopupModal);
    
    const [content, setContent] = useState("");

    const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
  Pick<IMutation, "updateBoard">,
  IMutationUpdateBoardArgs
>(UPDATE_BOARD);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    console.log(setContent)
  };


  const onClickSubmit = async () => {
    if (content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              content,
              boardImg:["ㅇ,러ㅏㅇ너라"]
            },
          },
        });
        setIsModalOpen(true)
        setTimeout(function(){ setIsModalOpen(false);}, 3000);
        if (typeof result.data?.createBoard.id !== "string") {
          alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
          return;
        }
        void router.push(`/community/${result.data?.createBoard.id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {

    const updateBoardInput: IUpdateBoardInput = {};
    if (content) updateBoardInput.content = content;

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await updateBoard({
        variables: {
          id: router.query.boardId,
          updateBoardInput,
        },
      });

      void router.push(`/community/${result.data?.updateBoard.id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };


    return (
      <>
        <S.Wrap>
            <S.ContentsWrap>
                <S.contents placeholder="무슨 일이 일어나고 있나요?"
                onChange={onChangeContents}
                ></S.contents>
            </S.ContentsWrap>
            <S.BottomWrap>
                <S.ImgWrap>
                    <S.Img src="/img.png"></S.Img>
                </S.ImgWrap>
                <S.ButtonWrap>
                    <S.Button onClick={onClickSubmit}>등록</S.Button>
                </S.ButtonWrap>
            </S.BottomWrap>
        </S.Wrap>
        { isModalOpen && (
          <CommunityModal1/>
        )}
        </>       
    )
}

