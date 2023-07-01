/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    // compiler: {
    //   styledComponents: true,
    // },
    compiler: (() => {
        let compilerConfig = {
            // styledComponents 활성화
            styledComponents: true,
        }

        if (process.env.NODE_ENV === 'production') {
            compilerConfig = {
                ...compilerConfig,
                // 프러덕션 환경에서는 React Testing Library에서 사용하는 data-testid 속성을 삭제
                reactRemoveProperties: { properties: ['^data-testid$'] },
            }
        }

        return compilerConfig
    })(),
    async rewrite(){
        return [
            {
                // ex. /api/proxy
                source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
                // ex. http://localhost:8000
                destination: `${process.env.API_BASE_URL}/:match*`,
            }
        ]
    },

    images: {
        // example.com 아래의 이미지를 Image 컴포넌트에 표시하기 위해 추가한다.
        domains: [`example.com`],
        // domains: [`https://namu.wiki`],
    }
}

module.exports = nextConfig
