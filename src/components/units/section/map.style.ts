import styled from "@emotion/styled";

export const BookList = styled.div`
  width: 100%;
  position: relative;
`;

export const BookImgBox = styled.div``;

export const BookImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 600px;
`;
export const BookInfoWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(119, 23, 13, 0.8);
  /* background-color: rgba(255, 255, 255, 0.6); */
`;

export const BookName = styled.h3`
  padding: 15px 30px;
  color: white;
  text-align: center;
  /* color: #000000; */
`;
