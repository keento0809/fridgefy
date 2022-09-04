import styled from 'styled-components';

export const NavBarStyle = styled.nav`
  display: flex;
  li {
    list-style-type: none;
    display: inline-block;
    margin: 1rem;
  }
`
export const PageContainer = styled.section`
  display: flex;
  li {
    list-style-type: none;
  }
  main {
    margin: 0 2rem;
  }
`

export const FridgeStyle = styled.div`
  
  .input__style{
    position: relative;
  }
  
  .input__style::before {
    content: "Invalid Search";
    color: red;
    position: absolute;
    font-size:12px;
    top: 2rem;
  }

`