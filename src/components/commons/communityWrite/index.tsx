import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../../commons/types/generated/types";
import { CREATE_BOARD } from "./queries";
import * as S from "./styles"

export default function CommunityWriteUI(){
    const router = useRouter();
    
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    console.log(setContent)
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };


  const onClickSubmit = async () => {
    if (content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
            title,
              content,
              boardImg:["ㅇ,러ㅏㅇ너라"]
            },
          },
        });
        if (typeof result.data?.createBoard.id !== "string") {
          alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
          return;
        }
        // console.log(result.data.createBoard.content);
        console.log(result)
        void router.push(`/community/${result.data?.createBoard.id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

    return (
        <S.Wrap>
            <S.ContentsWrap>
                <S.contents placeholder="무슨 일이 일어나고 있나요?"
                onChange={onChangeContents}
                ></S.contents>
                <S.contents placeholder="제목?"
                onChange={onChangeTitle}
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
    )
}

