import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`;

export const ChartWrapper = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: 1px solid lightgrey;
`;

export const Title = styled.h2`
  margin: 40px 0;
  padding: 0px;
`

export const Content = styled.div`
    margin-left: 300px;
    padding: 0 40px;
    box-sizing: border-box;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    
    p:first-child {
        color: gray;
    }
    
    p:last-child {
        font-size: 20px;
    }
`;
