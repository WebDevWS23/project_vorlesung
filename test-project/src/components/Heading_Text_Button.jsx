import Heading_text from './heading_text';
import PropTypes from 'prop-types';

const Heading_Text_Button = ({ headline, text }) => {
  return (
    <>
      <Heading_text headline={headline} text={text} />
      <button>Button</button>
    </>
  );
};
Heading_Text_Button.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Heading_Text_Button;
