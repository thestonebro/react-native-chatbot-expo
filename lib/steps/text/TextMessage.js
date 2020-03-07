/* eslint-disable react/prop-types */
import React from 'react';
import HTML from 'react-native-render-html';

const TextMessage = (props, children) => (
  <HTML
    baseFontStyle={{ color: props.fontColor,
      fontSize: 16,
      fontFamily: 'Avenir-Book' }}
    html={children}
    tagsStyles={{ strong: { color: props.fontColor,
      fontSize: 16,
      fontFamily: 'Avenir-Black' } }}
  />
);

export default TextMessage;
