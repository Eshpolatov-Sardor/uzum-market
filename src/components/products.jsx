import React, { useEffect, useState } from 'react';

const Products = ({addToCart}) => {
  const [data, setData] = useState([]);
  const API = "https://dummyjson.com/products";

  useEffect(() => {
    async function getData() {
        const response = await fetch(API);
        const data = await response.json();
        const products = data.products;
        setData(products);
    }
    getData();
  }, []);
  return (
    <div className="container mx-auto my-[50px] flex flex-wrap justify-between gap-5">
      {data.map((product) => (


        <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.thumbnail} alt={product.title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{product.category}</h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-white">{product.title}</p>
                <button onClick={()=>addToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>

      ))}
    </div>
  );
}

export default Products;
