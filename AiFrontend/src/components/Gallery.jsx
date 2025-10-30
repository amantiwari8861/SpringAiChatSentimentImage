import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
const Gallery = () => {

  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_PRODUCT_API_URL);
      const products = await res.data;
      setProducts(products);
      console.log(products);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);// this will automatically execute when component loads

  return (
    <>
      {
        products.length == 0 ? <h1 className="text-3xl">No products to Display!</h1> :

          <div className="py-12 px-12 grid grid-cols-4 gap-2">
            {/* <Card product={products[0]} discount={15} />
        <Card product={products[1]} discount={15} />
        <Card product={products[2]} discount={15} /> */}

            {
              products.map((product, idx) => 
              <Card product={product} key={idx} />)
            }
          </div>
      }
    </>
  );
};

export default Gallery;
