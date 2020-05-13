import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HTML from 'react-native-render-html';
import Loading from '../common/Loading';
import Bubble from './Bubble';
import Img from './Image';
import ImageContainer from './ImageContainer';
import TextStepContainer from './TextStepContainer';

class TextStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    const { step } = this.props;
    const { component, delay, waitAction } = step;
    const isComponentWatingUser = component && waitAction;
    setTimeout(() => {
      // this.props.triggerNextStep();
      this.setState({ loading: false });
      if (!isComponentWatingUser) {
        this.props.triggerNextStep();
      }
    }, delay);
  }

  renderMessage() {
    const { previousValue, step } = this.props;
    const { component } = step;
    let { message } = step;

    if (component) {
      const { steps, previousStep, triggerNextStep } = this.props;
      return React.cloneElement(component, {
        step,
        steps,
        previousStep,
        triggerNextStep,
      });
    }

    message = message.replace(/{previousValue}/g, previousValue);

    return message;
  }

  render() {
    const {
      step,
      isFirst,
      isLast,
      avatarStyle,
      avatarWrapperStyle,
      bubbleStyle,
      userBubbleStyle,
      hideBotAvatar,
      hideUserAvatar,
      fontFamily,
      fontSize,
      boldFontFamily,
    } = this.props;
    const {
      avatar,
      bubbleColor,
      fontColor,
      user,
    } = step;

    const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

    return (
      <TextStepContainer
        className="rsc-ts"
        user={user}
      >
        {
          isFirst && showAvatar && (
          <ImageContainer
            className="rsc-ts-image-container"
            borderColor={bubbleColor}
            style={avatarWrapperStyle}
            user={user}
          >
            <Img
              className="rsc-ts-image"
              style={avatarStyle}
              showAvatar={showAvatar}
              user={user}
              source={{ uri: avatar }}
              alt="avatar"
            />
          </ImageContainer>
          )}
        <Bubble
          className="rsc-ts-bubble"
          style={user ? userBubbleStyle || bubbleStyle : bubbleStyle}
          user={user}
          bubbleColor={bubbleColor}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
        >
          { this.state.loading && <Loading color={fontColor} /> }
          {
            !this.state.loading && (
              <HTML baseFontStyle={{ color: fontColor, fontFamily, fontSize }} html={this.renderMessage()} tagsStyles={{ bold: { color: fontColor, fontFamily: boldFontFamily, fontSize } }} />
            )}
        </Bubble>
      </TextStepContainer>
    );
  }
}

TextStep.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  avatarStyle: PropTypes.object.isRequired,
  avatarWrapperStyle: PropTypes.object,
  bubbleStyle: PropTypes.object.isRequired,
  userBubbleStyle: PropTypes.object.isRequired,
  hideBotAvatar: PropTypes.bool.isRequired,
  hideUserAvatar: PropTypes.bool.isRequired,
  previousStep: PropTypes.object,
  previousValue: PropTypes.any,
  steps: PropTypes.object,
  fontFamily: PropTypes.string.isRequired,
  boldFontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

TextStep.defaultProps = {
  previousStep: {},
  steps: {},
  previousValue: '',
  avatarWrapperStyle: {},
};

export default TextStep;
