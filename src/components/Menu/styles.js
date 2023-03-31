import styled from "styled-components";

export const MenuItem = styled.li`
    position: relative;
    padding: 12px 10px;
    list-style: none;
    font-weight: ${({isActive}) => isActive ? '800' : '400'};
    
    a {
        color: #000000;
        text-decoration: none;
    }
    
    :hover {
        opacity: 0.5;
    }
    
    ::after {
        content: '>';
        position: absolute;
        top: 9px;
        right: 20px;
        color: lightgray;
    }
    `
;

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 300px;
    border-right: 1px solid lightgray;
    
    ul {
        padding-left: 20px;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f5f5;
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0px;
    color: gray;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid gray;
    background-color: #FFFFFF;
    margin-right: 20px;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
`;
