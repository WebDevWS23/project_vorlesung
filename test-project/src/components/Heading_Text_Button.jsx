import Heading_text from './heading_text';
import PropTypes from 'prop-types';

const Heading_Text_Button = ({ headline, text, buttonClick }) => {
  return (
    <>
      <Heading_text headline={headline} text={text} />
      <button onClick={buttonClick}>Button</button>
    </>
  );
};
Heading_Text_Button.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Heading_Text_Button;
