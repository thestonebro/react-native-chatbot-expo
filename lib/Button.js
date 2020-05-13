import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.invalid ? '#E53935' : props.backgroundColor};
  opacity: ${(props) => {
    if (props.disabled) {
      return 0.5;
    }
    return 1;
  }};
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
