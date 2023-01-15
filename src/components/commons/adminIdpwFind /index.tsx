import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryEindEmailForAdmin } from "../../../commons/hooks/queries/useQueryFindEmailForAdmin";
import { SubmitButton } from "../../../commons/styles/Button";
import ErrMessage from "../../../commons/styles/Error";
import { IAdminFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";
import { schema_find } from "../validation/schema";
import * as S from "./styles";

export default function AdminIdpwFind() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const {
    register,
    formState: { errors },
  } = useForm<IAdminFormType>({
    mode: "onChange",
    resolver: yupResolver(schema_find),
  });

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setValue(value);
  };

  const { data } = useQueryEindEmailForAdmin(value);
  const onClickFindEmail = () => {
    data
      ? Modal.success({
          content: (
            <div>
              <p>아이디 찾기</p>
              <br />
              <p style={{ marginLeft: "39px" }}>{data?.findEmailForAdmin.id}</p>
            </div>
          ),
          afterClose() {
            setValue("");
            router.push("/adminlogin/");
          },
        })
      : Modal.error({
          content: (
            <div>
              <p>아이디 찾기 실패</p>
              <br />
              <p style={{ marginLeft: "39px" }}>이메일을 찾을 수 없습니다.</p>
            </div>
          ),
          afterClose() {
            setValue("");
          },
        });
  };

  return (
    <S.OutWrapper>
      <LoginHeader />
      <S.InnerWrapper>
        <S.IdpwFindWrapper>
          <S.NavWrapper>
            <S.Nav>아이디 찾기</S.Nav>
          </S.NavWrapper>

          <S.InputWrapper>
            <>
              <S.DivInput>
                <input
                  type="text"
                  placeholder="이메일 주소"
                  {...register("email")}
                  onChange={onChangeEmail}
                  value={value}
                />
              </S.DivInput>
              <ErrMessage text={errors.email?.message} />
              <S.ButtonWrapper>
                <SubmitButton onClick={onClickFindEmail}>찾기</SubmitButton>
              </S.ButtonWrapper>
            </>
          </S.InputWrapper>
        </S.IdpwFindWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
