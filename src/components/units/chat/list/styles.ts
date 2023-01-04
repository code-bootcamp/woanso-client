import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  width: 25%;
  display: flex;
  align-items: flex-end;
  position: sticky;
  top: 15%;
  right: 15%;
  /* transform: translateY(-50%); */
`;

export const InnerWrap = styled.div`
  position: relative;
  width: 600px;
  height: 800px;
  border-radius: 18px;
  /* box-shadow: 0 0 10px #f6bf8d; */
  background-color: rgba(246, 191, 141, 0.3);

  /* box-shadow: 0 0 2px grey; */
  overflow-y: auto;
  /* padding: 30px 0; */
  /* margin: 30px 0; */
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 4px grey;

  p {
    display: flex;
    padding: 5px 20px;
    color: black;
    font-size: 26px;
    font-weight: 500;
  }

  img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }
`;

export const TopLeft = styled.div``;

export const Now = styled.div`
  display: flex;
  margin: 0 30px;
  gap: 10px;
`;

export const CloseBtn = styled.button`
  all: unset;
  img {
    width: 22px;
    height: 22px;
    margin: 0 15px;
    cursor: pointer;
  }
`;

export const ChatBtn = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(880%);
  right: 25px;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`;

export const ChatBox = styled.div`
  max-width: 48%;
  background-color: #e5e5e5;
  border-radius: 20px;
  margin: 20px 0;
  display: flex;
  /* vertical-align: center; */
`;

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: gray;
  margin-top: 15px;
`;

export const ChatContents = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 16px;
`;

export const ChatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  img {
    width: 45px;
    height: 45px;
    background-color: #f6bf8d;
    border-radius: 50%;
  }
`;

export const MyChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 16px;
  align-items: center;
  gap: 10px;
`;

export const MyChat = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #f6bf8d;
  margin: 15px 0;
  padding: 12px;
`;

export const WriteBox = styled.textarea`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  padding: 8px;
  outline: none;
  resize: none;
  font-size: 0.9rem;
  font-weight: 400;
  color: #111;
  line-height: 1.4;
  ::placeholder {
    font-size: 0.9rem;
    font-weight: 400;
    color: #bdbdbd;
    padding: 10px;
  }
  /* position: fixed; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  transform: translateY(440%);
`;

export const TextareaBox = styled.div`
  width: 420px;
  margin: 0 auto;
  position: relative;
`;

export const ChatTime = styled.div`
  font-size: 14px;
  color: gray;
`;
