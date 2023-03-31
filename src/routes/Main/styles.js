import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: calc(100% - 150px);
`;

export const Input = styled.input`
width: 300px;
height: 30px;
padding: 0 10px;
`;
export const InputWrapper = styled.div`
margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
button {
    width: 100px;
    height: 30px;
    background: #007d8c;
    color: #fff;
    border: #007d8c;
    border-radius: 3px;
    cursor: pointer;
};
`;

export const Error = styled.p`
color: red;
`