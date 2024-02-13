import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";
import Clicker from "./components/Clicker";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductsList";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      {/* <Clicker /> */}
      <AddProduct />
      {/* <AddUser /> */}
      {/* <ProductItem title={"bike"} price={2300} count={12} /> */}
      <ProductList />
      <UserList />
    </div>


  );
}
export default App;
