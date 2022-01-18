import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  const [state, setState] = useState({
    screen: 0
  });

  const screenUpdate = (e) => {
    console.log(e.target.getAttribute('btn-name'))
    if(state.screen === 0 && !Number.isNaN(e.target.value * 1)){ //converting string to a number by multiplying it, then checking for a number value
      setState({
        screen: e.target.value
      })
      // console.log('Is a number: ' + !Number.isNaN(e.target.value * 1))
    }else if(e.target.value === '='){
      console.log(state.screen+'='+eval(state.screen))
      setState({
        screen: eval(state.screen)
      })
    }else if(e.target.value === 'clear'){
      setState({
        screen: 0
      })
    }else{
      setState({
        screen: state.screen + e.target.value
      })
    }
  }

  return (
    <div className="content">
      <div className="calc">
        <div className="screen">
          <Screen {...state} />
        </div>

        <div className="buttons">
          <Button func={() => screenUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;
