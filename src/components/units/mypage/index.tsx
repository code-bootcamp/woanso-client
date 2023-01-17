import * as S from "./style";
import MyIngo from "./myinfo";
import MyRentList from "./myrentList";
import UserEdit from "../userEdit";
import FaqMini from "../../commons/faqmini";
import MyWishList from "./mywishList";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { useQueryFetchUserLoggendIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useMutationUploadOneFile } from "../../../commons/hooks/mutaions/useMutationUploadOneFile";
import { Modal } from "antd";
import { checkValidationImage } from "../../commons/uploads/image.validation";
import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";

const MenuLists = [
  { id: "myInfo", name: "내정보" },
  { id: "myrentList", name: "대여내역" },
  { id: "mywishList", name: "찜 목록" },
  { id: "userEdit", name: "개인정보 수정" },
  { id: "faq", name: "FAQ" },
];

export default function MyPageUI() {
  const [isActive, setIsActive] = useState<String>("myInfo");

  const { data: User } = useQueryFetchUserLoggendIn();
  const [updateUser] = useMutationUpdateUser();
  const [uploadOneFile] = useMutationUploadOneFile();

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    const result = await uploadOneFile({ variables: { file } });
    const imgUrl = result.data?.uploadOneFile;
    AutoChangeEmage(imgUrl);
  };

  const AutoChangeEmage = async (imgUrl: string) => {
    try {
      await updateUser({
        variables: {
          email: User.fetchUserLoggedIn.email,
          updateUserInput: {
            email: User.fetchUserLoggedIn.email,
            nickname: User.fetchUserLoggedIn.nickname,
            phone: User.fetchUserLoggedIn.phone,
            interest: User.fetchUserLoggedIn.interest,
            thumbnail: imgUrl,
          },
        },
      });
      Modal.success({ content: "이미지가 변경되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickList = (e: MouseEvent<HTMLLIElement>) => {
    setIsActive(e.currentTarget.id);
  };

  return (
    <S.MypageWrap>
      <S.SideWrap>
        <S.SideWrapTop>
          <S.AvatarWrap onClick={onClickUpload}>
            {User?.fetchUserLoggedIn.thumbnail.length > 0 ? (
              <S.AvatarImg
                src={`https://storage.googleapis.com/${User?.fetchUserLoggedIn.thumbnail}`}
              />
            ) : (
              <S.AvatarImg2 src="/icon/avatar.png" />
            )}

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
          </S.MenuLists>
        </S.SideWrapBottom>
      </S.SideWrap>

      <S.ContentsWrap>
        {isActive === "myInfo" && <MyIngo User={User} />}
        {isActive === "myrentList" && <MyRentList />}
        {isActive === "mywishList" && <MyWishList User={User} />}
        {isActive === "userEdit" && <UserEdit User={User} />}
        {isActive === "faq" && <FaqMini />}
      </S.ContentsWrap>
    </S.MypageWrap>
  );
}
