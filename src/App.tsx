import './index.css'
import { data } from './data/data'
import { Card } from './card/card'
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">

      <div className='buttons-wrapper'>
         <button onClick={slideLeft}>left</button>
          <button onClick={slideRight}>right</button>
      </div>
      <div className="card-container">

        {data.map((person, n) => {
          let position = n > index ? "nextCard"
            : n === index ? "activeCard" : "prevCard";
          return <Card key={n} {...person} cardStyle={position} />;
        })}

      </div>
    </div>
  )
}

export default App
