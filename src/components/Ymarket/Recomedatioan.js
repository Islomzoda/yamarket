import React from 'react'

export default function Recomedatioan(props) {
    return (
        <div className="productsBorder">
            <article>
               
            <a href={props.productLink}>
    <div className = "dsicountPng">
            <img src={props.discountImg} alt=""/>
            <span></span>
    </div>
            <img src={props.imgUrl} alt=""/><br/>
               <div className="colorForAmount"> <strong>{props.price}</strong>
                <span>₽</span>
                <span className="discount" >{props.discount}</span>
                <span>{props.money}</span></div>
                 <div>{props.productName}</div>
                 </a>
            </article>
        </div>
    )
}


