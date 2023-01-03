import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  display: flex;
  align-items: flex-end;
  position: sticky;
  top: 10%;
  /* right: 15%; */
  /* transform: translateY(-50%); */
`;

export const InnerWrap = styled.div`
  position: relative;
  width: 600px;
  height: 800px;
  border-radius: 18px;
  /* box-shadow: 0 0 10px #f6bf8d; */
  background-color: rgba(246, 191, 141, 0.3);
  overflow-y: auto;
  padding: 30px 0;
`;

export const ChatBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(1070%);
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
  font-size: 13px;
  color: gray;
`;

export const ChatContents = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 12px;
`;

export const ChatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  img {
    width: 45px;
    height: 45px;
  }
`;

export const MyChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 13px;
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
  transform: translateY(570%);
`;

export const TextareaBox = styled.div`
  width: 560px;
  margin: 0 auto;
  position: relative;
`;

export const ChatTime = styled.div`
  font-size: 12px;
  color: gray;
`;
