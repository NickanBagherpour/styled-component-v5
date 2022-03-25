import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: red;
    font-weight: bold;
    box-shadow: none;
    border-radius: 4px;
    width: 100%;
    display: block;
    white-space: none;
    padding:8px;
    margin: 8px;
    &:disabled{
        background: #eee;
        color: #666;
    }
`;

export {Button};