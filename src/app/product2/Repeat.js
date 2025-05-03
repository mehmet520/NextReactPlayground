"use client";

function Repeat({ numTimes, children }) {
  const items = [];

  for (let i=0; i<numTimes; i++) {
      items.push(children(i))
    }
    console.log(items)
  return <div>{items} </div>;
}

export default Repeat;
