import PropTypes from 'prop-types';
import style from './Options.module.css';

export default function Options({ refreshFeedback, type, name }) {
  return (
    <button
      className={style.refreshButton}
      onClick={() => refreshFeedback(type)}
    >
      {name}
    </button>
  );
}

Options.propTypes = {
  type: PropTypes.string.isRequired,
  refreshFeedback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
