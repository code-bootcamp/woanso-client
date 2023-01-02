import * as S from "./styles"

export default function AdminBoardUI() {

return (
    <S.OutWrapper>
        <S.InnerWrapper>
            <S.LeftWrapper>
            <S.BoxTitle>회원 리스트</S.BoxTitle>
            <S.BoxSearch placeholder="회원 정보를 검색하세요." />  
            <S.UserList>
                <S.User>다나카상1</S.User>
                <S.User>다나카상2</S.User>
                <S.User>다나카상3</S.User>
            </S.UserList> 
            </S.LeftWrapper>
            <S.RightWrapper>

            <table style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>게시글 제목</th>
                  <th>게시글 내용</th>
                  <th>게시글 날짜</th>
                  <th>좋아요</th>
                  <th>싫어요</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>아무게</td>
                  <td>아무게</td>
                  <td>2022.12.30</td>
                  <td>1</td>
                  <td>1</td>
                
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>아무게</td>
                  <td>아무게</td>
                  <td>2022.12.30</td>
                  <td>1</td>
                  <td>1</td>
                  
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>아무게</td>
                  <td>아무게</td>
                  <td>2022.12.30</td>
                  <td>1</td>
                  <td>1</td>
                 
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>아무게</td>
                  <td>아무게</td>
                  <td>2022.12.30</td>
                  <td>1</td>
                  <td>1</td>
                 
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>아무게</td>
                  <td>아무게</td>
                  <td>2022.12.30</td>
                  <td>1</td>
                  <td>1</td>
                
                </tr>
              </tbody>
              </table>
            </S.RightWrapper>

        </S.InnerWrapper>
    </S.OutWrapper>
    
)

}
