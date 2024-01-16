import './App.css';
import Heading_Text_Button from './components/Heading_Text_Button';
import TwoColumnGrid from './components/Two_Column_Grid';
import Heading_text from './components/heading_text';

function App() {
  return (
    <>
      <TwoColumnGrid>
        <Heading_Text_Button headline={'Headline'} text={'Text'} />
        <Heading_Text_Button headline={'Headline'} text={'Text'} />
        <Heading_Text_Button headline={'Headline'} text={'Text'} />
        <Heading_Text_Button headline={'Headline'} text={'Text'} />
      </TwoColumnGrid>
      <section>
        <Heading_text headline={'Headline'} text={'Text'} />
      </section>
    </>
  );
}

export default App;
