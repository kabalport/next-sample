import {ComponentMeta} from "@storybook/react";
import {StyledButton} from "../components/StyledButton";

// 파일 안의 스토리 설정(메타데이터 객체)
// export default {
//     // 그룹명
//     title: 'StyledButton',
//     // 사용하는 컴포넌트
//     component: StyledButton,
// } as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}

export default {
    title: 'StyledButton',
    component: StyledButton,
    // 다음 행을 추가
    // onClick이 호출됐을 때 clicked라는 액션을 출력한다.
    argTypes: { onClick: {action: 'clicked'}},
} as ComponentMeta<typeof StyledButton>