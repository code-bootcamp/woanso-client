import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutationSendToken } from "../../../commons/hooks/mutaions/useMutationSendToken";
import { useMutationUpdatePassword } from "../../../commons/hooks/mutaions/useMutationUpdatePassword";
import { useQueryEindEmail } from "../../../commons/hooks/queries/useQueryFindEmail";
import { SubmitButton } from "../../../commons/styles/Button";
import ErrMessage from "../../../commons/styles/Error";
import { Input1, Input2, Input3 } from "../../../commons/styles/Input";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";
import { schema_find } from "../validation/schema";
import * as S from "./styles";

export default function IdpwFind() {
  const router = useRouter();
  const [change, setChange] = useState<boolean>(true);
  const [next, setNext] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [token, setToken] = useState<string>();
  const [sendToken] = useMutationSendToken();
  const [updatePassword] = useMutationUpdatePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormType>({
    mode: "onChange",
    resolver: yupResolver(schema_find),
  });

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (value.length > 11) {
      value = value.substr(0, 10);
    }
    setPhone(value);
    setValue(value);
  };
  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  const onClickEmail = () => {
    setChange(false);
    setNext(false);
    setDisable(false);
    setValue("");
  };

  const onClickPassword = () => {
    setChange(true);
    setNext(false);
    setDisable(false);
    setValue("");
  };

  const { data } = useQueryEindEmail(phone);
  const onClickFindEmail = () => {
    data
      ? Modal.success({
          content: (
            <div>
              <p>이메일 찾기</p>
              <br />
              <p style={{ marginLeft: "39px" }}>{data?.findEmail.email}</p>
            </div>
          ),
          afterClose() {
            setValue("");
            setPhone("");
          },
        })
      : Modal.error({
          content: (
            <div>
              <p>이메일 찾기 실패</p>
              <br />
              <p style={{ marginLeft: "39px" }}>이메일을 찾을 수 없습니다.</p>
            </div>
          ),
          afterClose() {
            setValue("");
            setPhone("");
          },
        });
  };

  const onClickCheckUser = async () => {
    try {
      const result = await sendToken({
        variables: {
          phone: String(phone),
        },
      });
      setToken(result.data.sendToken);
      setNext(true);
      setValue("");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickCheckAuth = () => {
    if (token === number) {
      Modal.success({ content: "인증에 성공했습니다." });
      setDisable(true);
    } else {
      Modal.error({ content: "인증에 실패했습니다." });
      setNext(false);
      setDisable(false);
      setValue("");
    }
  };

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
          phone: phone,
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

  console.log("token", token);

  return (
    <S.OutWrapper>
      <LoginHeader />
      <S.InnerWrapper>
        <S.IdpwFindWrapper>
          <S.NavWrapper>
            <S.Nav onClick={onClickEmail} change={change}>
              이메일 찾기
            </S.Nav>
            <S.Nav2 onClick={onClickPassword} change={change}>
              비밀번호 재설정
            </S.Nav2>
          </S.NavWrapper>

          <S.InputWrapper>
            {change ? (
              <>
                <Input3
                  type="text"
                  placeholder="이메일 주소"
                  {...register("email")}
                />
                <ErrMessage text={errors.email?.message} />

                <S.DivInput>
                  <input
                    type="number"
                    maxLength={11}
                    placeholder={next ? "인증번호" : "전화번호 입력('-'제외)"}
                    onChange={next ? onChangeNumber : onChangePhone}
                    value={value}
                  />
                  {disable ? (
                    <S.DisabledBtn disabled>완료</S.DisabledBtn>
                  ) : (
                    <S.FindBtn
                      id="email"
                      onClick={next ? onClickCheckAuth : onClickCheckUser}
                    >
                      {next ? "확인" : "인증"}
                    </S.FindBtn>
                  )}
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
              </>
            ) : (
              <>
                <S.DivInput>
                  <input
                    type="number"
                    maxLength={11}
                    placeholder={"전화번호 입력('-'제외)"}
                    onChange={onChangePhone}
                    value={value}
                  />
                </S.DivInput>
                <S.ButtonWrapper>
                  <SubmitButton onClick={onClickFindEmail}>찾기</SubmitButton>
                </S.ButtonWrapper>
              </>
            )}
          </S.InputWrapper>
        </S.IdpwFindWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
