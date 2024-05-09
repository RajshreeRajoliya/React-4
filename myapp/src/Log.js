import React, { useState, useEffect } from 'react';

function Log() {
  // State variable to hold the data
  const [userData, setUserData] = useState(null);

  // Effect hook to load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      // If data exists in local storage, set it in state
      setUserData(JSON.parse(storedData));
    }
  }, []);

  // Function to update data and save to local storage
  const updateData = () => {
    const newData = { name: 'John', age: 30 };
    setUserData(newData);
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  // Function to clear data from local storage
  const clearData = () => {
    setUserData(null);
    localStorage.removeItem('userData');
  };

  return (
    <div>
      <h1>Local Storage Example</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <button onClick={clearData}>Clear Data</button>
        </div>
      ) : (
        <div>
          <p>No data found</p>
          <button onClick={updateData}>Update Data</button>
        </div>
      )}
    </div>
  );
}

export default Log;
