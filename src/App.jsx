import Display from './componants/Display'
import styles from './App.module.css'
import ButtonContainer from './componants/ButtonContainer'
import { useState } from 'react'

function App() {
  const [calVal,setcalVal]=useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText==='c'){
      setcalVal("")
    }
    else if(buttonText==='='){
      const result=eval(calVal)
      setcalVal(result)
    }
    else{
      const newDisplayValue=calVal + buttonText
      setcalVal(newDisplayValue)
    }
  }

  return <div className={styles.calcultor}>
    <Display displayValue={calVal} />
    <ButtonContainer onButtonClick={onButtonClick} />
  </div>
}

export default App
