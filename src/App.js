import logo from "./logo.svg";
import "./App.css";
import Search from "./search";
import Portfolio from "./portfolio";

function App() {
  return (
    <>
      <div className={"w-full p-5 bg-blue-200 border-b-2 border-blue-400"}>
        <h1
          className={
            "text-xl font-bold text-center text-blue-600 tracking-wider uppercase"
          }
        >
          StockTr8
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <Search />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
