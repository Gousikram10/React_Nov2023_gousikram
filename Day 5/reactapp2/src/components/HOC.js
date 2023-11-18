import React, { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);
    const handleIncrease = () => {
      setMoney(money * 2);
    };
    return <OriginalComponent money={money} handleIncrease={handleIncrease} />;
  }
  return NewComponent;
}

export default UpdatedComponent;