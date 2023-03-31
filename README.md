## 화면에서 보기
로컬 서버 & db를 사용중입니다. 

실제 서비스 화면을 보시려면 
npm i 로 설치 후 
npm run start로 실행한 다음

터미널 창을 하나 더 열고
npm install -g json-server 후 
json-server --watch db.json --port 8000 
하여 로컬 디비를 참조해주세요. 

![](https://velog.velcdn.com/images/rudwnok123/post/7f10ea03-d0a4-4771-ae1a-e8f9c6d3b555/image.gif)

## 코드만 보기
todo list를 불러오는 화면 (read)
/src/pages/Todo/components/List.js

todo item의 추가 화면 (create)
/src/pages/Todo/components/Post.js

todo item의 수정, 제거 화면 (update, delete) 
/src/pages/Todo/components/Item.js

### 후기
auto refecting 기능이 상당히 좋다. 
