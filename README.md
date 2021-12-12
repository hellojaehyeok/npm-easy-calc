# Easy Media Calc

반응형 스타일링을 calc를 반복적으로 사용하게 되면 가독성이 떨어집니다.      

이 라이브러리는 코드의 양을 줄이고 가독성을 높이기 위하여 만들었습니다.

저는 주로 React styled-components에서 사용합니다.

## 활용
---
```javascript
// 기존 css
@media (max-width: 1024px) {
    width: calc(100vw * (300/428));
    margin: calc(100vw * (10/428)) calc(100vw * (15/428)) calc(100vw * (20/428)) calc(100vw * (30/428));
    font-size: calc(100vw * (15, 428));
    display:flex;
}

// 변환 css
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
<br />
<br />

## 설명
---
제가 제작한 코드는 배열 안에서 이루어지기 때문에 코드의 끝은 
";"가 아닌 ","로 처리해야 합니다.     
위 코드와 같이 일반 css는 문자열처럼 넣어야 합니다.

최상단에 분기 사이즈를 변수로 지정해놔서 한 번에 바꿀 수 있도록 합니다.


<br />
<br />


## 종류
---
|실제 사용   | 변환 코드 |
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
|Margin(100, 50, 100, 50, 428)|margin:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428)) calc(100vw * (50/428))|
|Margin2(100, 50, 428)|margin:calc(100vw * (100/428)) calc(100vw * (50/428))|
|Padding(100, 50, 100, 50, 428)|padding:calc(100vw * (100/428)) calc(100vw * (50/428)) calc(100vw * (100/428)) calc(100vw * (50/428))|
|Padding2(100, 50, 428)|padding:calc(100vw * (100/428)) calc(100vw * (50/428))|
|MT(100, 428)|margin-top:calc(100vw * (100/428));|
|MB(100, 428)|margin-bottom:calc(100vw * (100/428));|
|ML(100, 428)|margin-left:calc(100vw * (100/428));|
|MR(100, 428)|margin-right:calc(100vw * (100/428));|
|PT(100, 428)|padding-top:calc(100vw * (100/428));|
|PB(100, 428)|padding-bottom:calc(100vw * (100/428));|
|PL(100, 428)|padding-left:calc(100vw * (100/428));|
|PR(100, 428)|padding-right:calc(100vw * (100/428));|
|LineH(100, 428)|line-height:calc(100vw * (100/428));|