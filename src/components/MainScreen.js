import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const MainScreen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen" max={10}  mode="single">{calc.num ? calc.num : calc.res}</div>
  )
 }

 export default MainScreen