import * as S from "./style";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import MyIngo from "./myinfo";
import MyReservationList from "./myreservationList";
import MyRentList from "./myrentList";
import UserEdit from "../userEdit";
import FaqMini from "../../commons/faqmini";
import { useQueryFetchUserLoggendIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useMutationUploadOneFile } from "../../../commons/hooks/mutaions/useMutationUploadOneFile";
import { Modal } from "antd";
import { checkValidationImage } from "../../commons/uploads/image.validation";

const MenuLists = [
  { id: "myInfo", name: "내정보" },
  { id: "myrentList", name: "대여내역" },
  { id: "myreservationList", name: "찜 목록" },
  { id: "userEdit", name: "개인정보 수정" },
  { id: "faq", name: "FAQ" },
];

export default function MyPageUI() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<String>("myInfo");

  const { data: User } = useQueryFetchUserLoggendIn();
  console.log(User?.fetchUserLoggedIn.id);
  const [uploadOneFile] = useMutationUploadOneFile();
  // const onClickMoveToPage = (e: MouseEvent<HTMLLIElement>) => {
  //   if (e.currentTarget.id === "askkakao") {
  //     const kakaoUrl = `https://open.kakao.com/o/s8iiqXVe`;
  //     window.open(kakaoUrl, "_blank");
  //   } else {
  //     router.push(e.currentTarget.id);
  //   }
  // };
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<String>("");
  const onClickUpload = () => {
    fileRef.current?.click();
  };

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

  const onClickList = (e: MouseEvent<HTMLLIElement>) => {
    setIsActive(e.currentTarget.id);
  };

  const onClickOpenModal = () => {
    setOpen(true);
  };

  return (
    <S.MypageWrap>
      <S.SideWrap>
        <S.SideWrapTop>
          <S.AvatarWrap onClick={onClickUpload}>
            <S.AvatarImg src="/userAvatar.jpeg" />
            <S.EditIcon>
              <S.EditIconImg src="/icon/edit_icon.png" />
            </S.EditIcon>
            <input
              type="file"
              ref={fileRef}
              hidden={true}
              onChange={onChangeFile}
            />
          </S.AvatarWrap>
          <S.UserName>{User?.fetchUserLoggedIn.nickname}</S.UserName>
          <S.PointCharge>포인트 충전</S.PointCharge>
        </S.SideWrapTop>

        <S.SideWrapBottom>
          <S.MenuLists>
            {MenuLists.map((el) => (
              <S.MenuList
                key={el.id}
                id={el.id}
                onClick={onClickList}
                isActive={isActive === el.id ? "active" : ""}
              >
                <S.MenuName>{el.name}</S.MenuName>
              </S.MenuList>
            ))}
            {/* <S.MenuList id="askkakao" onClick={onClickMoveToPage}>
              <S.MenuName>1:1 문의</S.MenuName>
            </S.MenuList> */}
          </S.MenuLists>
        </S.SideWrapBottom>
      </S.SideWrap>

      <S.ContentsWrap>
        {isActive === "myInfo" && <MyIngo />}
        {isActive === "myrentList" && <MyRentList />}
        {isActive === "myreservationList" && <MyReservationList />}
        {isActive === "userEdit" && <UserEdit User={User} />}
        {isActive === "faq" && <FaqMini />}
      </S.ContentsWrap>
    </S.MypageWrap>
  );
}
