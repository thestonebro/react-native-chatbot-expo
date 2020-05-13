import styled from 'styled-components/native';

const OptionElement = styled.Text`
  color: ${props => props.fontColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}px;
`;

export default OptionElement;
