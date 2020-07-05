import React from 'react'

function App() {
  return (
    <>
      <h1 onMouseOver={() => console.log("Mouse hovered")}>Hello World</h1>
      <button onClick={() => console.log("I was clicked")}>Click me</button>
    </>
  );
}

export default App
