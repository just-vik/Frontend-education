import Product from "./components/Product";
import User from "./components/User";

function App() {
  return (
    <div>
      Hello world!
      <User firstName={"Viktor"} lastName={"Goloviznin"} age={36} showAge={false} />
      <User firstName={"Ivan"} lastName={"Ivanov"} age={32} showAge={true} />


      <Product title={"Bike black"} price={2300} qty={16} />
      <Product title={"Bike white"} price={2200} qty={0} />

    </div>
  );
}

export default App;
