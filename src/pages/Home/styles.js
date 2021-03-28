import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    >div{
        display:flex;
        flex-direction:row;
        align-items:center;
    }

    button{
        background-color:#16c79e;
        color:#fff;
        width:352px;
        height: 60px;
        border-radius:15px;
        transition: all .3s ease-in-out 0s;
        font-weight:400;
        font-size:19px;

        &:hover{
            background-color:#109173;
        }
    }
`;
