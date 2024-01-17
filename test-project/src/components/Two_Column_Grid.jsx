import './Two_Column_Grid.css';
import PropTypes from 'prop-types';

const TwoColumnGrid = ({ children }) => {
  return <section className='two-column-grid'>{children}</section>;
};

export default TwoColumnGrid;

TwoColumnGrid.propTypes = {
  children: PropTypes.object.isRequired,
};
