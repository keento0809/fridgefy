import styled from 'styled-components';

export const NavBarStyle = styled.nav`


@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&display=swap');
button{
  font-family: 'Inconsolata', monospace;
  margin-top: 13px;
  width: 90px;
  height: 30px;
  position: relative;
  border-radius: 10px;

  background-color: #E6E095;
}



a {
  text-decoration: none;
  color: #2E5866;
}
div {
  color: #2E5866;
  font-family: 'Inconsolata', monospace;
  background-color: lightblue;
  text-align: left;
  height: 65px;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
ul{
  overflow: hidden;
  list-style-type: none;
}

li {
  float: left;
  padding: 16px;
  text-decoration: none;
}

.font {
  font-family: 'Inconsolata', monospace;
  
  font-size: 30px;
  text-decoration: none;
}`;

export const PageContainer = styled.section`
  
  div{
    color: #2E5866;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
    font-family: 'Inconsolata', monospace;
    background-color: #EDDAD1;
    text-align: center;
    width: 100%;
    border-radius: 5px;
  }

  input{
    color: #2E5866;
    border-radius: 5px;
    height: 30px;
    text-align: center;
    margin: auto;
    font-family: 'Inconsolata', monospace;
    background-color: #EFF0A1;
  }

  display: flex;
  li {
    list-style-type: none;
  }
  main {
    
    margin: 0 2rem;
  }
`

export const FridgeStyle = styled.div`
  div{
    width: 80%;
    border-radius: 5px;
    text-align: center;
    font-family: 'Inconsolata', monospace;
    height: 500px;
    background-color: #EDDAD1;
    

  }
  input{
    border-radius: 5px;
    height: 30px;
    text-align: center;
    margin: auto;
    font-family: 'Inconsolata', monospace;
    background-color: #EFF0A1;
  }
  .input__style{
    position: relative;
    background-color: #E6E095;
  }

  
  .input__style::before {
    content: "Invalid Search";
    color: red;
    position: absolute;
    font-size:12px;
    top: 2rem;
    background-color: #E6E095;
  }

`

