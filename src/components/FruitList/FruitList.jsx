import React from 'react';
import './FruitList.css';

function FruitItem({ name, emoji, count, setCount }) {
  return (
    <div className="fruit__item">
      <h2>{emoji} {name}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
    </div>
  );
}

function FruitList({ bananas, setBananas, strawberries, setStrawberries, apple, setApple, kiwi, setKiwi, resetAll }) {
  return (
    <div className="fruit">
      <FruitItem name="Bananen" emoji="🍌" count={bananas} setCount={setBananas} />
      <FruitItem name="Aardbeien" emoji="🍓" count={strawberries} setCount={setStrawberries} />
      <FruitItem name="Appels" emoji="🍏" count={apple} setCount={setApple} />
      <FruitItem name="Kiwi's" emoji="🥝" count={kiwi} setCount={setKiwi} />
      <button className="reset-button" onClick={resetAll}>Reset</button>
    </div>
  );
}

export default FruitList;
