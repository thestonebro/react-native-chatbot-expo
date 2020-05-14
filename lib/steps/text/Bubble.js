import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const maxWidth = width * 0.62;

const Bubble = styled.View`
  background-color: ${props => props.bubbleColor};
  border-top-left-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 18 : 0;
    } if (!isFirst && isLast) {
      return user ? 18 : 0;
    }
    return 18;
  }}px;
  border-top-right-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 0 : 18;
    } if (!isFirst && isLast) {
      return user ? 0 : 18;
    }
    return 18;
  }}px;
  border-bottom-right-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 0 : 18;
    } if (!isFirst && isLast) {
      return 18;
    }
    return props.user ? 0 : 18;
  }}px;
  border-bottom-left-radius: ${(props) => {
    const { isFirst, isLast, user } = props;
    if (!isFirst && !isLast) {
      return user ? 18 : 0;
    } if (!isFirst && isLast) {
      return 18;
    }
    return props.user ? 18 : 0;
  }}px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: ${(props) => {
    const { isFirst, showAvatar } = props;
    if (!isFirst && showAvatar) {
      return -8;
    } if (!isFirst && !showAvatar) {
      return -8;
    }

    return 0;
  }}px;
  margin-right: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? 58 : 6;
    } if (showAvatar) {
      return 0;
    }
    return 6;
  }}px;
  margin-bottom: 10;
  margin-left: ${(props) => {
    const { isFirst, showAvatar, user } = props;
    if (!isFirst && showAvatar) {
      return user ? 6 : 58;
    } if (showAvatar) {
      return 0;
    }
    return 6;
  }}px;
  max-width: ${(props) => {
    const { isFirst, showAvatar } = props;
    if (!isFirst && showAvatar) {
      return maxWidth + 58;
    }

    return maxWidth + 50;
  }}px;
  min-height: 42px;
`;

export default Bubble;
