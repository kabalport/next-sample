import Document, {DocumentContext, DocumentInitialProps} from "next/document";
import { ServerStyleSheet } from 'styled-components'

// 기본 Document를 MyDocument로 덮어 쓴다.
export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ) : Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try{
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            // 기본 Document의 초기값을 유용한다.
            const initialProps = await Document.getInitialProps(ctx)

            // initialProps에 더해, style을 추가해서 반환한다.
            return{
                ...initialProps,
                styles: [
                    <>
                    {/*// 원래 스타일*/}
                        {initialProps.styles}
                    {/*// 스타일드 컴포넌트의 style*/}
                        {sheet.getStyleElement()}
                    </>,
                ],
            }
        } finally {
            sheet.seal()
        }
    }
}