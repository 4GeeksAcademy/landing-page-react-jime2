import React from "react";

const Card = () => {
    return (
        <div className="card d-flex" style={{width:"18rem"}}>
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
                <div className="card-body flex-column">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, sunt!</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
        </div>
    
        );
};

export default Card;