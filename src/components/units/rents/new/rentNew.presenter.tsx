import * as S from "./rentNew.styles";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

export default function RentNewUI() {
  const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
  });

  return (
    <S.Wrapper>
      <S.Container>
        {/* <S.Form> */}
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
                <S.Input />
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
              <span>상품명</span>{" "}
            </S.Name>
            <S.Input />
          </S.Category>
          <S.Category2>
            <S.Category3>
              <S.Name>
                <span>저자</span>{" "}
              </S.Name>
              <S.Input />
            </S.Category3>
            <S.Category3>
              <S.Name>
                <span>작화가</span>{" "}
              </S.Name>
              <S.Input />
            </S.Category3>
          </S.Category2>
          <S.Category3>
            <S.Name>
              <span>출판사</span>{" "}
            </S.Name>
            <S.Input />
          </S.Category3>
          <S.Category2>
            <S.Category3>
              <S.Name>
                {" "}
                <span>대여가</span>{" "}
              </S.Name>
              <S.PriceContainer>
                <S.PriceInputContainer>
                  <S.Input />
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
                <S.Input />
              </S.PriceInputContainer>
            </S.Category3>
          </S.Category2>
          <S.Category>
            <S.Name>
              <span>한줄 요약</span>
            </S.Name>
            <S.Input />
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
            <S.Button2>등록</S.Button2>
            <S.Button2 style={{ backgroundColor: "#bdbdbd" }}>취소</S.Button2>
          </S.ButtonWrapper>
        </S.BottomContainer>
        {/* </S.Form> */}
      </S.Container>
    </S.Wrapper>
  );
}
