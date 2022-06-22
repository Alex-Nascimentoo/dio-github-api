import styled from "styled-components";

export const Wrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    
    width: 100%;
    height: 44px;

    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #ccc;
    
    color: black;
    font-weight: bold;
    font-size: 16px;

    border-radius: 8px;

    padding: 8px 16px;
    margin: 0 16px;

    transition: .2s;

    &:hover {
      background-color: #aaa;
    }
  }
`