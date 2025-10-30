import { useEffect, useState } from "react"

const LearnUseEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    // useEffect(() => {
    //     console.log("component re-rendered");
    // });//it will execute when there is any change in state or prop

    // useEffect(()=>{
    //     console.log("component mounted!");
    // },[]); // will run only once when component will mount

    // useEffect(() => {
    //     console.log("component re-rendered!");
    // }, [count]); // will run where there is change in count

    // useEffect(() => {
    //     console.log("component re-rendered!");
    // }, [count,name]); // will run where there is change in count or name

    useEffect(() => {
        const clockId = setInterval(() => {
            const date = new Date();
            console.log(date.toString());
            setDate(date.toString());
        }, 1000);
        return () => { // cleanup code
            clearInterval(clockId);
        }
    }, []);

    return (
        <div className="p-12 ">
            <h1 className="text-3xl">{date}</h1>
            <h1 className="text-3xl">Count : {count} Name : {name}</h1>
            <button className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >increment</button>

            Enter Name : <input type="text" className="border-2 border-black"
                onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default LearnUseEffect