import { useState } from 'react';
import './App.css';
import Heading_Text_Button from './components/Heading_Text_Button';
import TwoColumnGrid from './components/Two_Column_Grid';
import Heading_text from './components/heading_text';

function App() {
  const [value, setValue] = useState(1);
  const [headline, setHeadline] = useState('');
  const [displayComponent, setDisplayComponent] = useState(true);
  const [loadingState, setLoadingState] = useState(true);
  const [serverObj, setServerObj] = useState([
    { headline: 'Headline1', text: 'Beispieltext1' },
    { headline: 'Headline2', text: 'Beispieltext2' },
    { headline: 'Headline3', text: 'Beispieltext3' },
    { headline: 'Headline4', text: 'Beispieltext4' },
  ]);
  const [serverObj2, setServerObj2] = useState({
    obj1: { headline: 'Headline1', text: 'Beispieltext1' },
    obj2: { headline: 'Headline2', text: 'Beispieltext2' },
    obj3: { headline: 'Headline3', text: 'Beispieltext3' },
    obj4: { headline: 'Headline4', text: 'Beispieltext4' },
  });
  //Funktion zum manipulieren von Daten in der ParentComponent können als props ans Child übermittelt werden
  const increaseClickValue = () => {
    //value ist erst nach dem Rerendering geupdated
    //setValue(value + 1);
    //(prevValue) stellt den aktuellen Wert zur Verfügung
    // setValue((prevValue) => prevValue + 1);
    // setValue((prevValue) => prevValue + 1);
    // setValue((prevValue) => prevValue + 1);
    setServerObj((prevValue) => [
      ...prevValue,
      { headline: headline, text: 'Text added' },
    ]);
    setServerObj2((prevValue) => {
      return {
        ...prevValue,
        obj12: { headline: headline, text: 'Text added 12' },
      };
    });
  };
  const changeVisibility = () => {
    setDisplayComponent(!displayComponent);
  };
  let component = (
    <>
      <div>Loading....</div>
      <button onClick={() => setLoadingState(false)}>Test</button>
    </>
  );
  if (!loadingState) {
    component = (
      <>
        <input
          value={headline}
          onChange={(event) => {
            setHeadline(event.target.value);
          }}></input>
        {value}
        {displayComponent ? (
          <TwoColumnGrid>
            {Object.values(serverObj2).map((obj, index) => {
              return (
                <Heading_Text_Button
                  headline={obj.headline}
                  text={obj.text}
                  key={index + 5}
                  buttonClick={increaseClickValue}
                />
              );
            })}
            {serverObj.map((obj, index) => {
              return (
                <Heading_Text_Button
                  headline={obj.headline}
                  text={obj.text}
                  key={index}
                  buttonClick={increaseClickValue}
                />
              );
            })}
          </TwoColumnGrid>
        ) : null}
        <section>
          <Heading_text headline={'Headline'} text={'Text'} />
        </section>
      </>
    );
  }
  return <>{component}</>;
}

export default App;
