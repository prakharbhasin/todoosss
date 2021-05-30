
import React from 'react';
import './Card.css';

const Card = ({title, category, completeTodo, id, color}) => {
    const handleComplete = () =>{
        completeTodo(id)
    }
    return(
        <div className="card-cont">
            <div className="color-div" style={{background:color}}></div>
            <div className="card-deets">
            <h2 className="card-heading">{title}</h2>
            <p className="card-category">
                {category}
            </p>
            </div>
            <input type="checkbox" className="done-check" color={color} onChange={handleComplete} style={{boxShadow:`0px 0px 5px ${color}`}}/>
        </div>
    );
}

export default Card;

