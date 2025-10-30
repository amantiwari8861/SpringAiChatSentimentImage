import { useEffect, useState } from "react";


const LernUseEffect = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect(() => {
  //   console.log("component re-rendered!");
  // }); // will run on every change in any state or prop

  // useEffect(() => {
  //   console.log("component mounted!");
  // }, []); // when component loads first time

  // useEffect(()=>{
  //   console.log("count :",count);
  // },[count]);// runs when there is any change in count

  // useEffect(()=>{
  //   console.log("count :",count," Name :",name);
  // },[count,name]);// runs when there is any change in count,name

  // const [clock, setClock] = useState(null);
  // useEffect(() => {
  //   const clockId = setInterval(() => {
  //     const now = new Date();
  //     console.log(now);
  //     setClock(now);
  //   }, 1000);

  //   return () => { // cleanup function
  //     clearInterval(clockId);
  //   }
  // }, []);

  function t(e) {
    console.dir(e.target);
  }

  return (
    <div className=" text-center my-12">
      {/* <h1 className="text-3xl">{clock?.toString()}</h1> */}
      <h1 className="text-3xl">Count :{count} Name : {name}</h1>
      Enter ur Name : <input type="text" className="border-2 p-2 border-black rounded my-4"
        // onChange={(e) => setName(e.target.value)}
        onChange={t}
         />
      <br />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>increment</button>


    </div>
  )
}

export default LernUseEffect