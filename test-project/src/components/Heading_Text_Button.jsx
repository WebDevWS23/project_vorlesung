import Heading_text from './heading_text';

const Heading_Text_Button = ({ headline, text }) => {
  return (
    <>
      <Heading_text headline={headline} text={text} />
      <button>Button</button>
    </>
  );
};

export default Heading_Text_Button;
