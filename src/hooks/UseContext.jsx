import React from "react";
import { useState, createContext, useContext } from "react";

const NameContext =  createContext()
const UseContext = () => {
  const [name, setName] = useState("Im the component can move without prodrilling.")
  return (
    <NameContext.Provider value={name}>
    <div className="w-full h-screen bg-amber-100">
      <div className="flex items-center justify-center ">
        {" "}
        <Comp1 />
  
      </div>
    </div>
    </NameContext.Provider>
  );
};

const Comp1 = () => {
  const name = useContext(NameContext);
  return (
    <div className="m-10 w-auto h-auto bg-white">
                  <h1 className="text-amber-800">{name}</h1>
      {" "}
      <h1>Component 1</h1>
      <Comp2 />
    </div>
  );
};

const Comp2 = () => {
  return (
    <div className="m-10 w-auto h-auto bg-red-500">
      {" "}
      <h1>Component 2</h1>
      <Comp3/>
    </div>
  );
};

const Comp3 = () => {
  return (
    <div className="m-10 w-auto h-auto bg-cyan-500">
      {" "}
      <h1>Component 3</h1>
      <Comp4/>
    </div>
  );
};

const Comp4 = () => {
  const name = useContext(NameContext)
  return (
    <div className="m-10 w-auto h-auto bg-green-500">
      <h1 className="text-white">{name}</h1>
      {" "}
      <h1>Component 4</h1>
    </div>
  );
};
export default UseContext;
