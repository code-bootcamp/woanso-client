import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutationUpdatePassword } from "../../../commons/hooks/mutaions/useMutationUpdatePassword";
import { FIND_EMAIL } from "../../../commons/hooks/queries/useQueryFindEmail";
import { SubmitButton } from "../../../commons/styles/Button";
import { Input1, Input2, Input3 } from "../../../commons/styles/Input";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";
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
  console.log(phone);

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
  console.log(data);

  const onClickFindEmail = () => {
    {
      data
        ? Modal.success({
            content: (
              <div>
                <p>이메일 찾기</p>
                <br />
                <p style={{ marginLeft: "39px" }}>{data?.findEmail.email}</p>
              </div>
            ),
          })
        : Modal.error({
            content: (
              <div>
                <p>이메일 찾기 실패</p>
                <br />
                <p style={{ marginLeft: "39px" }}>이메일을 찾을 수 없습니다.</p>
              </div>
            ),
          });
    }
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
      <LoginHeader />
      <S.InnerWrapper>
        <S.IdpwFindWrapper>
          <S.NavWrapper>
            <S.Nav onClick={onClickEmail} qqq={qqq}>
              이메일 찾기
            </S.Nav>
            <S.Nav2 onClick={onClickPassword} ccc={ccc}>
              비밀번호 재설정
            </S.Nav2>
          </S.NavWrapper>
          {qqq ? (
            <>
              <S.InputWrapper onClick={onClickEmail}>
                <Input3
                  type="number"
                  placeholder="전화번호 입력('-'제외)"
                  onChange={onChangePhone}
                ></Input3>
                <S.ButtonWrapper>
                  <SubmitButton onClick={onClickFindEmail}>찾기</SubmitButton>
                </S.ButtonWrapper>
              </S.InputWrapper>
            </>
          ) : (
            <S.InputWrapper>
              <Input3
                type="text"
                placeholder="이메일 주소"
                {...register("email")}
              />
              <S.DivInput>
                <input
                  type="text"
                  placeholder="전화번호"
                  {...register("phone")}
                />
                <S.FindBtn onClick={onClickCheckUser}>찾기</S.FindBtn>
              </S.DivInput>
              <Input1
                type="password"
                placeholder="새 비밀번호"
                {...register("password")}
              />
              <Input2
                type="password"
                placeholder="새 비밀번호 확인"
                {...register("password2")}
              />
              <S.ButtonWrapper>
                <SubmitButton onClick={handleSubmit(onClickFindPassword)}>
                  찾기
                </SubmitButton>
              </S.ButtonWrapper>
            </S.InputWrapper>
          )}
        </S.IdpwFindWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
