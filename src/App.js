import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { evaluate } from 'mathjs'; //testing mathjs library

function App() {
  const [state, setState] = useState({
    screen: 0,
    num: '',
    sign: '',
    comma: false,
    numSet: false
  });

  const btns = ['clear', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  
  var key = 0;

  const screenUpdate = (e) => {
    var func = e.target.getAttribute('btn-name');
    var val = e.target.value;
    switch(func){
      case 'number':
        if(state.screen === 0 || state.screen === '0'){
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
        break;
      case 'sign':
        var lastChar = state.screen.charAt(state.screen.length -1);
        if(lastChar !== '.'){
          if(state.numSet === false){
            setState({
              ...state,
              num: state.screen,
              sign: val,
              screen: '0',
              numSet: true,
              comma: false
            })
          }else{
            if(state.screen === '0' && state.numSet === true){
              setState({
                ...state,
                sign: val
              })
            }else{
              var x = getResult();
              setState({
                screen: '0',
                num: x,
                sign: val,
                numSet: true,
                comma: false
              })
            }
          }
        }else{
          return
        }
        break;
      case 'result':
          if(state.num !== '' && state.sign !== '' && state.screen !== '0'){
            getResult();
          }
        break;
      case 'clear':
        setState({
          screen: 0,
          num: '',
          sign: '',
          comma: false,
          numSet: false
        })
        console.clear();
        break;
      default:
        console.log('Unknown functions!')
    }
  }

  const getResult = () => {
    var dec = evaluate(state.num + (state.sign === '÷' ? '/' : (state.sign === '×' ? '*' : (state.sign === '+' ? '+' : '-'))) + state.screen);
    var realValue = evaluate(state.num + (state.sign === '÷' ? '/' : (state.sign === '×' ? '*' : (state.sign === '+' ? '+' : '-'))) + state.screen);
    var aV = [state.num, state.sign, state.screen];
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
          screen: dec.toString(), 
          num: '',
          sign: '',
          comma: false, 
          numSet: false })
      }else{
        setState({ 
          screen: dec.toString(), 
          num: '',
          sign: '',
          comma: false, 
          numSet: false })
      }
    }else{
      setState({ 
        screen: dec.toString(), 
        num: '',
        sign: '',
        comma: false, 
        numSet: false })
    }
    console.log('Calculated value: ' + realValue);
    console.log('Actual value: ' + aV[0] + aV[1] + aV[2] + '=' + dec);
    return dec
  }

  return (
    <div className="content">
      <div className="calc">
        <div className="screen">
          <Screen {...state} />
        </div>

        <div className="buttons">
          {btns.map((btn) => (
              <Button 
                className={btn === 'clear' ? 'btn long' : (btn === 0 ? 'btn mid' : 'btn')} 
                onClick={() => screenUpdate} 
                btnName={!isNaN(btn) || btn==='.' ? 'number' : (btn === 'clear' ? 'clear' : (btn === '=' ? 'result' : 'sign'))}
                key={key++} 
                value={btn} 
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;