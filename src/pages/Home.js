import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductQuery } from "../features/api/apiSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);

  const { data, isLoading, isError, error } = useGetProductQuery();
  // const hui = useGetProductQuery();
  // console.log(hui.data);

  console.log(data);

  useEffect(() => {
    // fetch("products.json")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {data?.data?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
