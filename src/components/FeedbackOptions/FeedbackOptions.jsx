import PropTypes from 'prop-types';
import {
  FeedbackButtons,
  ButtonsWrapper,

} from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(option => (
        <FeedbackButtons
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButtons>
      ))}
    </ButtonsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};
