import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Breadcrumb from "./components/atoms/Breadcrumb/Breadcrumb";
import ProductCataloguePage from "./pages/ProductCataloguePage";
import store from "./store/store";

const items = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
];

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <div className="py-4">
          <Breadcrumb items={items} />
        </div>
        <div className="my-2">
          <ProductCataloguePage />
        </div>
      </Layout>
    </Provider>
  );
}

export default App;
