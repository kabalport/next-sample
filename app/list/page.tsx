'use client';
import {useState} from "react";

export default function List(){

    let 상품 = ['tomato','paster','coconut']
    let [수량, 수량변경] = useState([0,0,0]);
    return(

        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((item,index)=>{
                    return (
                        <div className="food" key={index}>
                            <img className="food-img" src={`/food${index}.png`} alt="설명"/>
                            <h4>{item} $40</h4>
                            <span>{수량[index]}</span>
                            <button onClick={()=>{
                                let copy = [...수량]
                                copy[index]++
                                수량변경(copy)
                                }}>+</button>
                            <button onClick={()=>{
                                let copy = [...수량]
                                copy[index]--
                                수량변경(copy)
                            }}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}