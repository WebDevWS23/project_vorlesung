import './Heading_text.css';
const Heading_text = ({ headline, text }) => {
  const style = {
    fontSize: '1em',
    color: '#333',
  };
  return (
    <div className='container'>
      <h3 className='heading'>{headline}</h3>
      <p style={style}>{text}</p>
    </div>
  );
};

export default Heading_text;
