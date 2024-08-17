import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ textWarning }) {
  return (
    <div>
      <p>{textWarning}</p>
    </div>
  );
}

Notification.propTypes = {
  textWarning: PropTypes.string,
};
