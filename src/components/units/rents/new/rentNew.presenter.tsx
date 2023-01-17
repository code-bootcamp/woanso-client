import * as S from "./rentNew.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./rentNew.validation";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { IComic_Category_Enum } from "../../../../commons/types/generated/types";
import { CREATE_COMIC } from "./rentNew.queries";
import { ChangeEvent, useState } from "react";
import { checkValidationImage } from "../../../commons/uploads/image.validation";
import { useMutationUploadOneFile } from "../../../../commons/hooks/mutaions/useMutationUploadOneFile";

interface IFormData {
  title: string;
  deliveryFee: number;
  rentalFee: number;
  author: string;
  illustrator: string;
  publisher: string;
  totalBooks: number;
  description: string;
  stock: number;
  category: IComic_Category_Enum;
}

export default function RentNewUI() {
  const [createComic] = useMutation(CREATE_COMIC);
  const [uploadOneFile] = useMutationUploadOneFile();

  const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
  });

  const { register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const [imgUrl, setImgUrl] = useState<String[]>([]);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadOneFile({ variables: { file } });
      setImgUrl(result.data?.uploadOneFile ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSubmit = async (data: IFormData) => {
    try {
      const result = await createComic({
        variables: {
          createComicInput: {
            title: data.title,
            deliveryFee: data.deliveryFee,
            rentalFee: data.rentalFee,
            author: data.author,
            illustrator: data.illustrator,
            publisher: data.publisher,
            totalBooks: Number(data.totalBooks),
            description: data.description,
            ISBN: String(imgUrl),
            url: [String(imgUrl)],
            stock: Number(data.stock),
            category: data.category,
          },
        },
      });

      const productId = result.data?.createComic.comicId;
      if (typeof result.data?.createComic.comicId !== "string") {
        alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
        return;
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <S.TopContainer>
            <S.h2>상품 기본 정보</S.h2>
          </S.TopContainer>
          <S.MainWrapper>
            <S.Category>
              <S.Name>
                <span>카테고리</span>
              </S.Name>
              <S.BtnInputContianer>
                <S.Button>카테고리 선택</S.Button>
                <S.IsbnInputContainer>
                  <S.Input type="text" {...register("category")} />
                </S.IsbnInputContainer>
              </S.BtnInputContianer>
            </S.Category>
            <S.Category>
              <S.Name>
                <span>책이름</span>{" "}
              </S.Name>
              <S.Input type="text" {...register("title")} />
            </S.Category>
            <S.Category2>
              <S.Category3>
                <S.Name>
                  <span>작가</span>{" "}
                </S.Name>
                <S.Input type="text" {...register("author")} />
              </S.Category3>
              <S.Category3>
                <S.Name>
                  <span>그림작가</span>{" "}
                </S.Name>
                <S.Input type="text" {...register("illustrator")} />
              </S.Category3>
            </S.Category2>
            <S.Category3>
              <S.Name>
                <span>출판사</span>{" "}
              </S.Name>
              <S.Input type="text" {...register("publisher")} />
            </S.Category3>

            <S.Category3>
              <S.Name>
                <span>작품설명</span>{" "}
              </S.Name>
              <S.Input type="text" {...register("description")} />
            </S.Category3>

            <S.Category2>
              <S.Category3>
                <S.Name>
                  {" "}
                  <span>대여비</span>{" "}
                </S.Name>
                <S.PriceContainer>
                  <S.PriceInputContainer>
                    <S.Input type="text" {...register("rentalFee")} />
                  </S.PriceInputContainer>
                  <span>원</span>
                </S.PriceContainer>
              </S.Category3>
              <S.Category3>
                <S.Name>
                  {" "}
                  <span>재고</span>{" "}
                </S.Name>
                <S.PriceContainer>
                  <S.PriceInputContainer>
                    <S.Input type="number" {...register("stock")} />
                  </S.PriceInputContainer>
                  <span>원</span>
                </S.PriceContainer>
              </S.Category3>
              <S.Category3>
                <S.Name>
                  {" "}
                  <span>배송비</span>{" "}
                </S.Name>
                <S.PriceInputContainer>
                  <S.Input type="text" {...register("deliveryFee")} />
                </S.PriceInputContainer>
              </S.Category3>
            </S.Category2>
            <S.Category>
              <S.Name>
                <span>총권수</span>
              </S.Name>
              <S.Input type="number" {...register("totalBooks")} />
            </S.Category>

            <S.Category>
              <S.Name>
                {" "}
                <span>상품 이미지</span>{" "}
              </S.Name>
              <S.ImageContainer>
                <input type="file" onChange={onChangeFile} multiple />
              </S.ImageContainer>
            </S.Category>
          </S.MainWrapper>
          <S.BottomContainer>
            <S.ButtonWrapper>
              <S.Button2>등록</S.Button2>
              <S.Button2 style={{ backgroundColor: "#bdbdbd" }}>취소</S.Button2>
            </S.ButtonWrapper>
          </S.BottomContainer>
        </form>
      </S.Container>
    </S.Wrapper>
  );
}
