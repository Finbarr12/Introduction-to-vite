import AllHeros from "../Static/AllHeros";
import pics from "../assets/best.jpg";
import Down from "../Components/Down";

const Products = () => {
  return (
    <div>
      <AllHeros title="View Products" bi={`url(${pics})`} />
      <Down />
    </div>
  );
};

export default Products;
