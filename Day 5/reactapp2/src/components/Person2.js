import UpdatedComponent from "./HOC";

function Person2({ money, handleIncrease }) {
  return (
    <div>
      <h2>Mike is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Offering</button>
    </div>
  );
}

export default UpdatedComponent(Person2);