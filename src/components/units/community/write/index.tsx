import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { useMutationUploadOneFile } from "../../../../commons/hooks/mutaions/useMutationUploadOneFile";
import {  PopupModal } from "../../../../commons/libraries/store";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { checkValidationImage } from "../../../commons/uploads/image.validation";
import CommunityModal1 from "../modal";
import CommunityTrendUI from "../trend";
import { CREATE_BOARD, UPDATE_BOARD } from "./queries";
import * as S from "./styles"

export default function CommunityWriteUI(props){
  

  const router = useRouter();
    
  const [isModalOpen, setIsModalOpen] = useRecoilState(PopupModal);
  const [content, setContent] = useState("");
  const [uploadOneFile] = useMutationUploadOneFile();

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

  const [imgUrl, setImgUrl] = useState<String>('');
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log("file", file);
    if (!file) return;

    try {
      const result = await uploadOneFile({ variables: { file } });
      console.log("result", result);
      setImgUrl(result.data?.uploadOneFile ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };


  const onClickSubmit = async () => {
    if (content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              content,
              boardImg: [
                String(imgUrl)
            ],
            },
          },
        });
        console.log(result)
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
          id: String(router.query.boardId),
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
                defaultValue={props.data?.fetchBoard.content}
                ></S.contents>
            </S.ContentsWrap>
            <S.BottomWrap>
                <S.ImgWrap>
                    <S.Img src="/icon/img.png"></S.Img>
                    <input type="file" onChange={onChangeFile} multiple />
                </S.ImgWrap>
                <S.ButtonWrap>
                    <S.Button
                    //  onClick={onClickSubmit}
                    onClick={props.isEdit ? onClickUpdate : onClickSubmit}
                    >
                      {props.isEdit ? "수정" : "등록"}
                      </S.Button>
                </S.ButtonWrap>
            </S.BottomWrap>
        </S.Wrap>
        { isModalOpen && (
          <CommunityModal1/>
        )}
        </>       
    )
}

