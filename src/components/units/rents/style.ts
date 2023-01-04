import styled from "@emotion/styled";

export const InnerWrap = styled.div``;

export const BooksSection = styled.div``;

export const MenusWrap = styled.ul`
  display: flex;
  padding-left: 50px;
`;

export const MenuList = styled.li`
  font-size: 24px;
  padding: 20px 50px 20px 0;
`;

export const AllListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const ListWrap = styled.div`
  display: inline-block;
  width: calc((100% - 100px) / 6);
  padding-left: 1.2rem;
  margin-bottom: 1.2rem;
`;
export const BookHoverWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const BookGrade = styled.p`
  color: orange;
  font-size: 1.5rem;
  text-align: center;
`;

export const BookStory = styled.p`
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
`;

export const BookImgBox = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${BookHoverWrap} {
    display: flex;
  }
`;

export const BookSection = styled.span`
  padding: 4px 8px;
  font-size: 20px;
  background-color: orange;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BookImg = styled.img`
  width: 100%;
  background-color: #dddddd;
`;

export const BookInfoWrap = styled.div`
  padding: 4px 0;
`;

export const BookTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const BookInfo = styled.p`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

export const BookPrice = styled.span`
  padding: 0 4px;
  font-size: 14px;
  background-color: orange;
  color: #ffffff;
`;

export const MiddleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

export const BookBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const BookIsRent = styled.div`
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const TextCircle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 3px solid #77170d;
  color: #77170d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Open = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  font-family: "roundGothicBold";
`;

export const TextCircle2 = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 3px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: #ddd;
  font-family: "roundGothicBold";
`;
