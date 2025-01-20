import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

const ProductListPage = () => {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  return (
    <section className="py-12 bg-white sm:py-16 lg:px-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="p-4 bg-gray-200 rounded-lg animate-pulse"
              >
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 mt-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 mt-2 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))
          ) : listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTile) => (
              <ProductTile singleProductTile={singleProductTile} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;
