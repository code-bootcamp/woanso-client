import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  display: flex;
  align-items: flex-end;
  position: sticky;
  top: 45%;
  right: 15%;
  transform: translateY(-50%);
`;

export const InnerWrap = styled.div`
  position: relative;
  width: 600px;
  height: 900px;
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(119, 23, 13, 0.3);
  overflow-y: auto;
  padding: 30px 0;
`;

export const ChatBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 25px;
  cursor: pointer;
`;

export const ChatBox = styled.div`
  max-width: 48%;
  background-color: #e5e5e5;
  border-radius: 20px;
  margin: 35px 0;
  display: flex;
  /* vertical-align: center; */
`;

export const ChatContents = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const ChatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
`;

export const MyChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const MyChat = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(119, 23, 13, 0.3);
  margin: 35px 0;
  padding: 15px;
`;

export const WriteBox = styled.textarea`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  padding: 15px;
  outline: none;
  resize: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: #111;
  line-height: 1.4;
  ::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    color: #bdbdbd;
  }
  /* position: fixed; */
  /* left: 50%;
  transform: translateX(-50%); */
`;

export const TextareaBox = styled.div`
  width: 560px;
  margin: 0 auto;
  position: relative;
`;
