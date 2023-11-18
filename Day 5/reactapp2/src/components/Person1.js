import UpdatedComponent from "./HOC";

function Person1({ money, handleIncrease }) {
  return (
    <div>
      <h2>Jack is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Offering</button>
    </div>
  );
}

export default UpdatedComponent(Person1);