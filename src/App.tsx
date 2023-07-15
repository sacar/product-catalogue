import "./App.css";
import Layout from "./components/Layout/Layout";
import Breadcrumb from "./components/atoms/Breadcrumb/Breadcrumb";
import ProductCataloguePage from "./pages/ProductCataloguePage";

const items = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
];

function App() {
  return (
    <Layout>
      <div className="py-4">
        <Breadcrumb items={items} />
      </div>
      <div className="font-serif my-2">
        <ProductCataloguePage />
      </div>
    </Layout>
  );
}

export default App;
