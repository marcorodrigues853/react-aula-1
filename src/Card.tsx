import { useState } from 'react'

function Card() {
  const [count, setCount] = useState(100_000_000)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>

      <h1>OLA CARD</h1>
    </div>
  )
}

export default Card
