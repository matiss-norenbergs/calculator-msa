import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { evaluate } from 'mathjs'; //testing mathjs library

function App() {
  const [state, setState] = useState({
    screen: 0,
    comma: false,
    numSet: false
  });

  const screenUpdate = (e) => {
    var func = e.target.getAttribute('btn-name');
    var val = e.target.value;
    if(func === 'number'){
      // console.log('-----number: ' + val);
      if(state.screen === 0){
        if(val === '.'){
          if(state.comma === false){
            setState({
              ...state,
              screen: val,
              comma: true
            })
          }else{
            // console.log('Comma already used!');
          }
        }else{
          setState({
            ...state,
            screen: val
          })
        }
      }else{
        if(val === '.'){
          if(state.comma === false){
            setState({
              ...state,
              screen: state.screen + val,
              comma: true
            })
          }else{
            // console.log('Comma already used!');
          }
        }else{
          setState({
            ...state,
            screen: state.screen + val
          })
        }
      }
    }else if(func === 'sign'){
      // console.log('-----sign: ' + val);
      if(state.numSet === false){
        setState({
          ...state,
          screen: state.screen + val,
          numSet: true,
          comma: false
        })
      }else{
        var lastChar = state.screen.charAt(state.screen.length -1);
        if(lastChar === '/' || lastChar === '*' || lastChar === '-' || lastChar === '+'){
          setState({
            ...state,
            screen: state.screen.slice(0, -1) + val
          })
        }else{
          var x = getResult();
          setState({
            screen: x + val
          })
        }
      }
    }else if(func === 'clear'){
      // console.log('-----clearing screen: ' + val);
      setState({
        screen: 0,
        comma: false,
        numSet: false
      })
    }else if(func === 'result'){
      // console.log('-----getting result: ');
      getResult();
    }else{
      console.log('Something\'s wrong!');
    }
  }

  const getResult = () => {
    var dec = evaluate(state.screen);
    if(dec % 1 !== 0){
      dec = dec.toFixed(5);
      var lastDigit = dec.charAt(dec.length -1);
      if(lastDigit === 0 || lastDigit === '0'){
        do{
          dec = dec.slice(0, -1);
          lastDigit = dec.charAt(dec.length -1);
          // console.log(dec);
          // console.log(lastDigit)
        }while(lastDigit === 0 || lastDigit === '0');
        setState({
          screen: dec,
          comma: false,
          numSet: false
        })
      }else{
        setState({
          screen: dec,
          comma: false,
          numSet: false
        })
      }
    }else{
      setState({
        screen: dec,
        comma: false,
        numSet: false
      })
    }
    console.log(state.screen + '=' + dec)
    return dec
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
