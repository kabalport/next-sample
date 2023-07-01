# nextjs 사용하기

## nextjs 설치
```
npx create-next-app@latest --ts next-sample
```

# 프로젝트 파일들 설명
app 폴더 : 코드짤 폴더
page2.tsx : 메인페이지
layout3.tsx : 메인페이지 감싸는 용도의 페이지
public 폴더 : 이미지나 static 파일 보관용
api 폴더 : 서버기능 만드는 곳

next.config.js : nextjs 설정 파일
node_modules 폴더 : 설치한 라이브러리 보관용 폴더
package.json : 설치한 라이브러리 버전 기록용 파일


```bash
npm run dev
# or
yarn dev
# or
pnpm dev

# eslint 설정
yarn add --dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
# storybook 설정
yarn add --dev @storybook/addon-postcss tsconfig-paths-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react
 
```
