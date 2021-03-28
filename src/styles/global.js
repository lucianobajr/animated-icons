import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        border:0;
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
    }
  
    *:focus{
        outline:0;    
    }

    html,body,#root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        display:block;
        overflow:visible;
    }
    
    a{
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
        font-size:16px;
    }
    
    ul{
        list-style:none;
    }
`;
