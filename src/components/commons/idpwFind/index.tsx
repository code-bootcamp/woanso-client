import { useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutationUpdatePassword } from "../../../commons/hooks/mutaions/useMutationUpdatePassword";
import { FIND_EMAIL } from "../../../commons/hooks/queries/useQueryFindEmail";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import * as S from "./styles";

export default function IdpwFind() {
  const router = useRouter();
  const [qqq, setQqq] = useState<boolean>(true);
  const [ccc, setCcc] = useState<boolean>(false);
  const [bbb, setBbb] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [updatePassword] = useMutationUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormType>({
    // resolver: yupResolver(schema_login),
    mode: "onChange",
  });

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(String(e.currentTarget.value));
  };

  const onClickEmail = () => {
    console.log("이메일 찾아줘!!");
    setCcc(false);
    setQqq(true);
    setBbb(true);
  };

  const onClickPassword = () => {
    console.log("비밀번호 찾아줘!!");
    setQqq(false);
    setCcc(true);
    setBbb(false);
  };

  const { data } = useQuery(FIND_EMAIL, {
    variables: {
      phone: String(phone),
    },
  });

  const onClickFindEmail = () => {
    Modal.success({
      content: (
        <div>
          <p>이메일 찾기</p>
          <br />
          <p style={{ marginLeft: "39px" }}>{data.findEmail.email}</p>
        </div>
      ),
    });
  };

  const onClickCheckUser = () => {};
  const onClickFindPassword = async (data: IUserFormType) => {
    console.log(data);
    if (data.password !== data.password2) {
      Modal.error({ content: "비밀번호가 다릅니다." });
      return;
    }
    try {
      const result = await updatePassword({
        variables: {
          email: data.email,
          phone: data.phone,
          newPassword: data.password,
        },
      });
      console.log(result);
      Modal.success({
        content: "비밀번호가 변경되었습니다!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
          afterClose() {
            router.push("/home");
          },
        });
    }
  };

  return (
    <S.OutWrapper>
      <S.InnerWrapper>
        <S.IdpwFindWrapper>
          <S.TitleWrapper>
            <S.Title>이메일 / 비밀번호 찾기</S.Title>
          </S.TitleWrapper>
          <S.NavWrapper>
            <S.Nav onClick={onClickEmail} qqq={qqq}>
              이메일 찾기
            </S.Nav>
            <S.Nav2 onClick={onClickPassword} ccc={ccc}>
              비밀번호 찾기
            </S.Nav2>
          </S.NavWrapper>
          {qqq ? (
            <>
              <S.InputWrapper onClick={onClickEmail} bbb={bbb}>
                <S.Input
                  type="number"
                  placeholder="전화번호 입력('-'제외)"
                  onChange={onChangePhone}
                ></S.Input>
              </S.InputWrapper>
              <S.ButtonWrapper>
                <S.CheckButton onClick={onClickFindEmail}>확인</S.CheckButton>
              </S.ButtonWrapper>
            </>
          ) : (
            <S.InputWrapper>
              <S.Input
                type="text"
                placeholder="이메일 입력"
                {...register("email")}
              />
              <S.CheckWrapper>
                <S.CheckWrapper2>
                  <S.Input2
                    type="number"
                    placeholder="전화번호 입력('-'제외)"
                    {...register("phone")}
                  />
                  <S.Button onClick={onClickCheckUser}>확인</S.Button>
                </S.CheckWrapper2>
                <S.Line />
              </S.CheckWrapper>
              <S.Input
                type="password"
                placeholder="새 비밀번호 입력"
                {...register("password")}
              />
              <S.Input
                type="password"
                placeholder="새 비밀번호 확인"
                {...register("password2")}
              />
              <S.ButtonWrapper>
                <S.CheckButton onClick={handleSubmit(onClickFindPassword)}>
                  확인
                </S.CheckButton>
              </S.ButtonWrapper>
            </S.InputWrapper>
          )}
        </S.IdpwFindWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
