import Styles from './Display.module.css'
const Display=({displayValue})=>{
    return <input type="text" className={Styles.display} placeholder='0' value={displayValue} readOnly />
}
export default Display;