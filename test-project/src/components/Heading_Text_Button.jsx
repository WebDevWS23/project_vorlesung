import Heading_text from './heading_text';

const Heading_Text_Button = ({ headline, text, buttonClick }) => {
  return (
    <>
      <Heading_text headline={headline} text={text} />
      <button onClick={buttonClick}>Button</button>
    </>
  );
};
export default Heading_Text_Button;
