/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
        // example.com 아래의 이미지를 Image 컴포넌트에 표시하기 위해 추가한다.
        domains: [`example.com`],
        // domains: [`https://namu.wiki`],
    }
}

module.exports = nextConfig
