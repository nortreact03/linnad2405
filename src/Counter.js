import { useState } from "react"

function Counter() {
    let [amount, setAmount] = useState(0)
    const clickResponse = () => {
        setAmount(amount + 1) 
    }
    const clickResponseDecrease = () => {
        setAmount(amount - 1) 
    }
return (
    <>
        <button onClick={clickResponseDecrease} >Decrease</button>
        {amount}
        <button onClick={clickResponse} >Increase</button>
    </>
)
}

export default Counter