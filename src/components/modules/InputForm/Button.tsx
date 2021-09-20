import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid gray;
  background-color: #fff;
  color: skyblue;
  cursor: pointer;
  padding: 0 20px;

  :disabled {
    border: 1px solid gray;
    background-color: gray;
    color: black;
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export default Button;
