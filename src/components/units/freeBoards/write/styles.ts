import styled from "@emotion/styled";

export const WriteBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 200px;
`;
export const BoardWrite = styled.div`
  width: 750px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const ImgAndWrite = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 50px;
`;
export const ProfileImg = styled.img`
  width: 120px;
  height: 130px;
`;
export const BoardContentWrite = styled.textarea`
  resize: none;
  width: 500px;
  height: 180px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  margin-bottom: 10px;
`;

export const UnderBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 450px;
  gap: 60px;
  margin-bottom: 10px;
`;
export const ImgChoice = styled.img`
  margin: 0px;
  width: 40px;
  height: 40px;
`;
export const WriteSubmit = styled.button`
  all: unset;
  width: 80px;
  height: 30px;
  background-color: #751312;
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;
