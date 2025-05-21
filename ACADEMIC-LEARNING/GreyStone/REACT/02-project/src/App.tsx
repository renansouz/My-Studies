import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="h-dvh bg-stone-900 text-white">
        <h1 className="flex h-20 w-100 bg-red-700 text-center text-2xl underline">
          Hey user
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
