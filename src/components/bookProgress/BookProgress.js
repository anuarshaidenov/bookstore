import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import './book-progress.scss';
import executeAfterTime from '../../utils/utils';

const BookProgress = ({ progress }) => {
  const [percentageValue, setPercentageValue] = useState(0);

  useEffect(() => {
    executeAfterTime(setPercentageValue, progress, 500);
  }, []);

  return (
    <div className="book-progress">
      <div className="book-progress__progress-bar">
        <CircularProgressbar
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: '#0290ff',
            trailColor: '#e8e8e8',
          })}
          value={percentageValue}
        />
      </div>
      <div className="book-progress__progress-info">
        <span className="book-progress__percent">{`${percentageValue}%`}</span>
        <span className="book-progress__completed">Completed</span>
      </div>
    </div>
  );
};

BookProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default BookProgress;
