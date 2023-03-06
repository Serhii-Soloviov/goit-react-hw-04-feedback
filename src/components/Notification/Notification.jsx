import PropTypes from 'prop-types';
import { Error } from './Notification.styled';
export function Notification({ message }) {
  return <Error>{message}</Error>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
