// 타입을 위해 도입
import { GetStaticProps, NextPage, NextPageContext } from "next";
// Next.js의 내장 컴포넌트
import Head from "next/head"

// 페이지 컴포넌트의 props 타입 정의
type SSGProps = {
    message: string;
}

// SSG는 getStaticProps가 반환한 props를 받을 수 있다
// NextPage<SSGProps>는 Message: string만을 받아 생성된 페이지 타입
// Next.js의 페이지 컴포넌트나 함수 타입은 https://next.js.org/learn/excel/typescript/nextjs-types도 참고한다.
const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props;

    return (
        <div>
        {/*  Head 컴포넌트로 감싸면, 그 요소는 <head> 태그에 배치된다.  */}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                    <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다</p>
                    <p>{message}</p>
            </main>
        </div>
    )
}

// getStaticProps는 빌드 시 실행된다.
// GetStaticProps<SSGProps>는 SSGProps 인수로 받는 getStaticProps 타입
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 getStaticProps가 실행되었습니다.`;
    console.log(message);
    return {
        // 여기에서 반환한 props를 기반으로 페이지 컴포넌트를 그린다.
        props: {
            message,
        },
    };
};

// export async function getStaticProps(context){
//     return {
//         props: {}
//     }
// }

export default SSG;