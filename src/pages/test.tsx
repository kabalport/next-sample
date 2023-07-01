import type {NextPage} from "next";
import styled from "styled-components";

const H1 = styled.h1`
    color: red;
    `;

const Badge = styled.span`
    padding: 8px 16px;
    font-weight: bold;
    text-align: center;
    color: white;
    background: red;
    border-radius: 16px;
`
type ButtonProps = {
    color: string
    backgroundColor: string
}

// 문자 색상과 배경 색상을 props를 통해 변경할 수 있는 버튼 컴포넌트
// 타입 인수에 props 타입을 전달한다.
const Button = styled.button<ButtonProps>`
    color: ${(props) => props};
    background: ${(props) => props.backgroundColor};
    border: 2px solid ${(props) => props.color};
    font-size: 2em;
    margin: 1en;
    padding: 0.25em 1em;
    border-radius: 8px;
    cursor: pointer;
`

const Page: NextPage = () =>{
    return (
        <div>
            <H1>a</H1>
            <Badge>hello</Badge>
            <Button backgroundColor="transparent" color="#1E90FF">
                Hello
            </Button>
            <Button backgroundColor="#1E90FF" color="white">
                World
            </Button>
        </div>
    )
}

export default Page
