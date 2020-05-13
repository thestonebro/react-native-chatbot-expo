import styled from 'styled-components/native';

const Button = styled.Text`
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.fontFamily};
  color: ${props => props.fontColor};
`;

export default Button;
