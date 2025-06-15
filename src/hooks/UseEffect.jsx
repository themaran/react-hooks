import React, { useState, useEffect,  } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) {
      return;
    }
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });
  // dog api
  const [data, setData] = useState(null);
  const fetchDogImage = () =>{
          fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(err=>console.log(err))
  }
  useEffect(
    () =>{
      fetchDogImage();
    },[]
  );
  return (
    <div className="m-5 p-0">
      <h1 className="text-cyan-700 font-bold">React useEffect Hook</h1>
      <div className="mx-2 w-96">
        <fieldset className="border p-1 rounded-md">
          <legend className="text-amber-600 p-2">1min Counter</legend>
          <div>
            <p className="badge badge-accent badge-soft">
              Time Remaining: {count}
            </p>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset className="border p-1 rounded-md">
          <legend className="text-amber-600 p-2">Random Dog by API</legend>
          <button className="cursor-pointer bg-blue-600 px-4 py-2 rounded-xl m-2" onClick={fetchDogImage}>Fetch Dog Image</button>
          <div>
            {data && <img   src={data.message}></img>}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default UseEffect;
