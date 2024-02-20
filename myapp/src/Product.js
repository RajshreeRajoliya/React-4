import React, { useState, useEffect } from 'react';

const Product = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once after mounting

  return (
    <div>
      {data && (
        <div>
          <h2>Data fetched:</h2>
          <ul>
            {data.map(todo => (
              <li>{todo.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Product;
