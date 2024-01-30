import React, {useState} from "react";
import { decrementNumber, incrementNumber } from "./Action";
import reducer from "./Reducer";
import {createStore} from "redux";
import "../App.css"

const store=createStore(reducer)


export default function LikeCounter(){

    const [count,setCount]=useState(0);

    const unsubscribe=store.subscribe(()=>{
        setCount(store.getState().count);
    });

    return(
        <div>
            <h2 id="count">{count}</h2>
            <div className="buttons">
                <button id="btn-1" onClick={()=>store.dispatch(incrementNumber())}>Like</button>
                <button id="btn-2" onClick={()=>store.dispatch(decrementNumber())}>Unlike</button>
            </div>
            

        </div>
    )
}