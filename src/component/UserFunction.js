import { useEffect, useState } from "react"

export const UserFunction= (props)=>{
    const [count, setCount]= useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>console.log("Use effect called"),1000);

        return ()=>{
            clearInterval(timer);
            console.log("use effect unmounted")
        }
    },[])

    return (
        <div className="user-card">
            <button onClick={()=> {
                setCount(count+1);
            }}> increase</button>
            <h1>count: {count}</h1>
            <h2>Name:  {props.name}</h2>
            <h3>Location: Pune</h3>
        </div>
    )
}