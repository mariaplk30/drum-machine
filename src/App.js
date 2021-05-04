import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import DrumPad from './components/DrumPad';
import PadBank from './components/PadBank';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <PadBank/>
        <DrumPad letter="Q"/>
        <DrumPad letter="W"/>
        <DrumPad letter="E"/>
        <DrumPad letter="A"/>
        <DrumPad letter="S"/>
        <DrumPad letter="Z"/>
        <DrumPad letter="X"/>
        <DrumPad letter="C"/>
      </div>
    </Provider>
  );
}

export default App;
