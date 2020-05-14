import HTML from 'react-native-render-html';
import styled from 'styled-components/native';

const OptionElement = styled(HTML)`
  color: ${props => props.fontColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}px;
`;

export default OptionElement;
