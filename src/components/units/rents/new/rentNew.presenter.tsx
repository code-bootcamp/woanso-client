import * as S from "./rentNew.styles";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./rentNew.validation";
import { Modal } from "antd";
import { useMutationCreateComic } from "../../../../commons/hooks/mutaions/useMutationCreateComic"


interface IFormData {
  title: string;
  deliveryFee: number;
  rentalFee: number;
  author: string;
  illustrator: string;
  publisher: string;
  totalBooks: number;
  description: string;
  ISBN: string;
  isAvailable: boolean;
  stock: number;
  url: [string];
}


export default function RentNewUI() {
  const [createComic] = useMutationCreateComic();

  // const [createComic] = useMutation<
  //   Pick<IMutation, "createComic">,
  //   IMutationCreateComicArgs
  // >(CREATE_COMIC);

  const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
  });

  const { register, handleSubmit } =
    useForm({
      resolver: yupResolver(schema),
    });

    const onClickSubmit = async (data: IFormData) => {
      console.log(data);
  
    const vailable = data.isAvailable === "ok" ? true : false;

      try {
        const result = await createComic({


          variables: {
            createComicInput: {
              title: data.title,
              deliveryFee: data.deliveryFee,
              rentalFee: data.rentalFee,
              author: data.author,
              illustrator:data.illustrator,
              publisher:data.publisher,
              totalBooks: Number(data.totalBooks),
              description: data.description,
              ISBN: data.ISBN,
              isAvailable:vailable,
              stock:Number(data.stock),
              url: data.url,
            },
          },
        });
  
        const productId = result.data?.createComic.comicId;
        // if (typeof productId === "string")
        //   void router.push(`/markets/${productId}`);
  
        console.log(result);
        console.log("상품등록")
        if (typeof result.data?.createComic.comicId !== "string") {
          alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
          return;
        }
        // void router.push(`/markets/${result.data?.createUseditem._id}`);
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
              <span>ISBN</span>
            </S.Name>
            <S.BtnInputContianer>
              <S.Button>검색</S.Button>
              <S.IsbnInputContainer>
                <S.Input type="text" {...register("ISBN")}/>
              </S.IsbnInputContainer>
            </S.BtnInputContianer>
          </S.Category>
          <S.Category>
            <S.Name>
              <span>카테고리</span>
            </S.Name>
            <S.BtnInputContianer>
              <S.Button>카테고리 선택</S.Button>
              <S.IsbnInputContainer>
                <S.Input />
              </S.IsbnInputContainer>
            </S.BtnInputContianer>
          </S.Category>
          <S.Category>
            <S.Name>
              <span>책이름</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("title")}/>
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
              <S.Input type="text" {...register("illustrator")}/>
            </S.Category3>
          </S.Category2>
          <S.Category3>
            <S.Name>
              <span>출판사</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("publisher")}/>
          </S.Category3>
          <S.Category3>
            <S.Name>
              <span>링크</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("url")}/>
          </S.Category3>
          {/* <S.Category3>
            <S.Name>
              <span>재고</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("stock")}/>
          </S.Category3> */}
          <S.Category3>
            <S.Name>
              <span>작품설명</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("description")}/>
          </S.Category3>
          <S.Category3>
            <S.Name>
              <span>대여가능여부</span>{" "}
            </S.Name>
            <S.Input type="text" {...register("isAvailable")}/>
          </S.Category3>
          <S.Category2>
            <S.Category3>
              <S.Name>
                {" "}
                <span>대여비</span>{" "}
              </S.Name>
              <S.PriceContainer>
                <S.PriceInputContainer>
                  <S.Input type="text" {...register("rentalFee")}/>
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
                  <S.Input type="number" {...register("stock")}/>
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
                <S.Input type="text" {...register("deliveryFee")}/>
              </S.PriceInputContainer>
            </S.Category3>
          </S.Category2>
          <S.Category>
            <S.Name>
              <span>총권수</span>
            </S.Name>
            <S.Input type="number" {...register("totalBooks")}/>
          </S.Category>
          <S.Category>
            <S.Name>
              {" "}
              <span>상품 설명</span>{" "}
            </S.Name>
            <ReactQuill
              style={{
                width: "600px",
                height: "200px",
                marginBottom: "100px",
              }}
            />
          </S.Category>
          <S.Category>
            <S.Name>
              {" "}
              <span>상품 이미지</span>{" "}
            </S.Name>
            <S.ImageContainer>
              <S.ImageButton>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  +
                </div>
              </S.ImageButton>
              <S.ImageButton>
                <div>+</div>
              </S.ImageButton>
              <S.ImageButton>
                <div>+</div>
              </S.ImageButton>
            </S.ImageContainer>
          </S.Category>
        </S.MainWrapper>
        <S.BottomContainer>
          <S.ButtonWrapper>
            <S.SubmitButton>등록</S.SubmitButton>
            <S.Button2 style={{ backgroundColor: "#bdbdbd" }}>취소</S.Button2>
          </S.ButtonWrapper>
          
        </S.BottomContainer>
        
        </form>
      </S.Container>
   
    </S.Wrapper>
    
    
  );
}
