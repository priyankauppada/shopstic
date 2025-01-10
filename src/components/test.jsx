import React, { useEffect, useState } from "react";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      // Group and count products by category
      const categoryCounts = data.products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      }, {});

      // Convert to array and sort in descending order
      const sortedCategories = Object.entries(categoryCounts).sort(
        (a, b) => b[1] - a[1] // Sort by count in descending order
      );

      setCategories(sortedCategories);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Categories (Descending Order)</h1>
      <ul>
        {categories.map(([category, count]) => (
          <li key={category}>
            {category}: {count} products
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
