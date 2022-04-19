import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  h2{
    color:${({ theme }) => theme.h2} !important;
  }
  .ui.vertical.divider{
    color:${({ theme }) => theme.h2} !important;
  }
  .circular.icon{
    box-shadow: ${({ theme }) => theme.shadow} !important;
  }
  .ui.block.header {
    background: ${({ theme }) => theme.header} ;
  }
  .ui.placeholder.segment {
    background: ${({ theme }) => theme.header} ;
  }
  `
