# Easy Media Calc

반응형 스타일링에서 calc를 반복적으로 사용하게 되면 가독성이 떨어집니다.      
이 라이브러리는 코드의 양을 줄이고 가독성을 높이기 위하여 만들었습니다.       
저는 주로 React styled-components에서 사용합니다.       
          
사용하시면 깃허브에 ⭐ 한 번만 눌러주시면 감사하겠습니다!!      
오류가 있거나 문의할게 있으면 Issues 혹은 이메일로 연락 부탁드립니다.     
          
<br /><br />

## 사용 예시
---
```javascript
// 라이브러리 사용 전
@media (max-width: 1024px) {
    width: calc(100vw * (300/428));
    margin: calc(100vw * (10/428)) calc(100vw * (15/428)) calc(100vw * (20/428)) calc(100vw * (30/428));
    font-size: calc(100vw * (15, 428));
    display:flex;
}

// 라이브러리 사용 후
import { FontSize, Margin, Media, Px, Width } from '@hellojh/easy-media-calc';
const mediaPxMb = 1024;
const mbSize = 428;
.
.
.
${Media(mediaPxMb,[
    Width(400, mbSize),
    Margin(10, 15, 20, 30, mbSize),
    FontSize(15, mbSize),
    "display:flex",
])}
```

단어는 ";"가 아닌 ","로 처리해야 합니다.     
위 코드와 같이 일반 css는 문자열처럼 넣어야 합니다.     

최상단에 분기 사이즈를 변수로 지정해두면 나중에 수정을 할 때 용이합니다.      


<br /><br />


## 종류
---
|라이브러리 사용| 출력 코드 |
|------|-----|
|Media(1024,[]) |@media(max-width: 1024px){} |
|Px(100, 428) |calc(100vw * (100/428))|
|Width(100, 428)| width:calc(100vw * (100/428));|
|Height(100, 428)|height:calc(100vw * (100/428));|
|Top(100, 428)|top:calc(100vw * (100/428));|
|Bottom(100, 428)|bottom:calc(100vw * (100/428));|
|Left(100, 428)|left:calc(100vw * (100/428));|
|Right(100, 428)|right:calc(100vw * (100/428));|
|FontSize(100, 428)|font-size:calc(100vw * (100/428));|
|MT(100, 428)|margin-top:calc(100vw * (100/428));|
|MB(100, 428)|margin-bottom:calc(100vw * (100/428));|
|ML(100, 428)|margin-left:calc(100vw * (100/428));|
|MR(100, 428)|margin-right:calc(100vw * (100/428));|
|PT(100, 428)|padding-top:calc(100vw * (100/428));|
|PB(100, 428)|padding-bottom:calc(100vw * (100/428));|
|PL(100, 428)|padding-left:calc(100vw * (100/428));|
|PR(100, 428)|padding-right:calc(100vw * (100/428));|
|LineH(100, 428)|line-height:calc(100vw * (100/428));|
|BgColor(100, 428)|background-size:calc(100vw*(100/428));|
|BgColor(100, 50, 428)|background-size:calc(100vw*(100/428)) calc(100vw*(50/428));|


<br />

#### Margin, Padding
마진과 패딩 같은 경우 축약형을 많이 사용합니다.       
확장성을 좋게 하기 위하여 하나의 함수안에서 분기 처리를 하였습니다.

코드는 아래를 참고하시면 됩니다.         
<ins>margin에서 auto를 사용할 경우 문자열로 auto를 넣으시면 됩니다.</ins>

|라이브러리 사용| 출력 코드 |
|------|-----|
|Margin(100, 50, 100, 50, 428)|margin:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428)) calc(100vw * (50/428))|
|Margin(100, 50, 100, 428)|margin:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428))|
|Margin(100, "auto", 100, 428)|margin:calc(100vw * (100/428)) "auto" calc(100vw * (100/428))|
|Margin(100, 50, 428)|margin:calc(100vw * (100/428)) calc(100vw * (50/428))|
|Margin(100, "auto", 428)|margin:calc(100vw * (100/428)) "auto"|
|Padding(100, 50, 100, 50, 428)|padding:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428)) calc(100vw * (50/428))|
|Padding(100, 50, 100, 428)|padding:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428))|
|Padding(100, 50, 428)|padding:calc(100vw * (100/428)) calc(100vw * (50/428))|


<br /><br />


## styled-components 조건문 처리
만약 반응형 분기가 2번있고 조건에 따라 스타일링이 달라진다면 아래 코드와 같이 하시면 됩니다.

```javascript
import { Media, Width } from '@hellojh/easy-media-calc';
const mediaPxTb = 1000;
const tbSize = 1000;

const mediaPxMb = 500;
const mbSize = 500;
function App() {
  return (
      <Test bool={true}>
        qwe
      </Test>
  );
}

export default App;

const Test = styled.div`
  width: 100vw;
  background-color:slategray;

  ${({bool}) =>
    Media(mediaPxTb,[
      "background-color:slateblue",
      Width(bool?1000:500, tbSize),
    ])
    + 
    Media(mediaPxMb,[
      "background-color:salmon",
      Width(bool?500:250, mbSize),
    ])
  }
`
```