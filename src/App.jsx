import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }
  return (
  <>
    <div className="welcome">Welcome to your first React Application!</div>
    <button className="btn-primary" onClick={handleButtonClick}>
    Click me!
    </button>
    <div>Count: {count}</div>
  </>
)
}
