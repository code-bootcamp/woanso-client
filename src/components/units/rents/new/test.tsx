import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./rentNew.validation";
import { Router, useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import * as S from "./BoardWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import DaumPostcodeEmbed from "react-daum-postcode";
import KakaoMapPage from "../../../commons/map";
import { getVariableValues } from "graphql";

interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  useditemAddress: {
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
}

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      price
      remarks
      contents
      tags
      images
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function ProductWriteUI(props) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
    //   defaultValues: {
    //     name: props.data?.fetchUseditem.name ?? "",
    //     price: props.data?.fetchUseditem.price ?? "",
    //     remarks: props.data?.fetchUseditem.remarks ?? "",
    //     tags: props.data?.fetchUseditem.tags,
    //     contents: props.data?.fetchUseditem.contents ?? "",
    //     address: props.data?.fetchUseditem.useditemAddress?.address ?? "",
    //     addressDetail:
    //       props.data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
    //   },
    });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);



  const router = useRouter();

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!!
    void trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(newFileUrls);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능


    const fileReader = new FileReader();
    console.log("dfsdf3");
    fileReader.readAsDataURL(file);
    console.log("dfsdf4");
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };


  const onClickSubmit = async (data: IFormData) => {
    console.log(data);
    // const resultFile = await uploadFile({ variables: { file } });
    // const url = resultFile.data?.uploadFile.url;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: [...fileUrls],
          },
        },
      });

      const productId = result.data?.createUseditem._id;
      if (typeof productId === "string")
        void router.push(`/markets/${productId}`);

      console.log(result);
      if (typeof result.data?.createUseditem._id !== "string") {
        alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
        return;
      }
      void router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    if (props.data) {
      setFileUrls(props?.data.fetchUseditem.images);
    }
  }, [props.data]);
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
      <form
        onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
      >
        <S.Label>상품명</S.Label>
        <S.Writer type="text" {...register("name")} />
        <div style={{ color: "red" }}>{formState.errors.name?.message}</div>
        <S.Label>한줄요약</S.Label>
        <S.Writer type="text" {...register("remarks")} />
        <div style={{ color: "red" }}>{formState.errors.remarks?.message}</div>
        <S.Label>상품설명</S.Label>
        <ReactQuill
          style={{ height: "300px" }}
          onChange={onChangeContents}
          defaultValue={getValues("contents")}
        />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        <S.Label>판매가격</S.Label>
        <S.Writer type="text" {...register("price")} />
        <div style={{ color: "red" }}>{formState.errors.price?.message}</div>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          {fileUrls?.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={onChangeFileUrls}
            />
          ))}
        </S.ImageWrapper>
        <S.SubmitButton
          style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </form>
    </S.Wrapper>
  );
}
