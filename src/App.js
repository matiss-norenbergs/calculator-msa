import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  const [state, setState] = useState({
    screen: 0
  });

  const screenUpdate = (e) => {
    if(state.screen === 0){
      setState({
        screen: e.target.value
      })
    }else if(e.target.value === '='){
      console.log(state.screen+'='+eval(state.screen))
      setState({
        screen: eval(state.screen)
      })
      /*if(state.screen.slice(-1) === '/' || state.screen.slice(-1) === '*' || state.screen.slice(-1) === '-' || state.screen.slice(-1) === '+' || state.screen.slice(-1) === '.'){
        console.log('nyooo!')
      }else{
        console.log(state.screen+'='+eval(state.screen))
        setState({
          screen: eval(state.screen)
        })
      }*/
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
