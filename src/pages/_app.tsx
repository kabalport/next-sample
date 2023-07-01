import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {Container } from "@mui/material"; // 수정된 코드
import AppBar from "@/components/AppBar";
import { createTheme } from "@mui/material/styles";
import myAxios from "../../utils/myaxios"; // 추가된 코드
import Router from "next/router";
import theme from '../styles/theme';
import {createGlobalStyle} from "styled-components";
import {AppProps} from "next/app";
import Head from "next/head";

// 글로벌 스타일
const GlobalStyle2 = createGlobalStyle`
html,
body,
textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSysttemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
`



function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const refreshTokenInterval = setInterval(async () => {
            const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

            console.log(loginInfo);
            if (loginInfo) {
                const { accessToken, refreshToken } = loginInfo; // 수정된 코드

                try {
                    const response = await myAxios.post(
                        "/members/refreshToken",
                        { refreshToken }, // refreshToken을 별도의 객체로 보냅니다.
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );

                    const loginInfo = response.data;
                    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
                } catch (error) {
                    console.error(error);

                    // 오류가 발생하면 local storage를 삭제하고 홈 페이지로 이동
                    // 수정된 코드
                    localStorage.removeItem("loginInfo");
                    window.dispatchEvent(new CustomEvent("loginStatusChanged"));
                    Router.push("/");
                }
            }
        }, 10 * 1000); // 10분마다 실행

        // 컴포넌트가 언마운트 될 때 인터벌을 정리
        return () => {
            clearInterval(refreshTokenInterval);
        };
    }, []);

    return (
        <>
        <Head>
            <meta key="charset" name="charset" content="utf-8" />
            <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5" />
            <meta property="og:locale" content="ko_KR" />
            <meta property="og:type" content="website" />
        </Head>
            <GlobalStyle2 />
        <ThemeProvider theme={theme}>
            <AppBar />
            <Container
                sx={{
                    minHeight: "calc(100% - 64px)", // 수정된 코드
                    minWidth: "767px", // 추가된 코드
                    paddingTop: "64px", // 수정된 코드
                    display: "flex", // 추가된 코드
                    justifyContent: "center", // 추가된 코드
                    alignItems: "center", // 추가된 코드
                }}
            >
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
        </>
    );
}

export default MyApp;
