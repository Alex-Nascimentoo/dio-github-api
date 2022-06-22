import styled from 'styled-components'

export const Wrapper = styled.div `
  border: 1px solid #ccc;
  border-radius: 16px;

  width: 200px;
  min-height: 100px;

  margin: 16px;
  padding: 8px;

  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    font-size: 18px;
    font-weight: bold;

    margin: 0 0 8px;
  }

  h4 {
    font-size: 14px;
    font-bold: bold;
    color: #A8E3F4;

    margin: 8px 0;
  }

  a {
    color: #96b0b7;
    text-decoration: underline;
  }
`