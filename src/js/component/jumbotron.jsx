import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3" >
            <div className="container-fluid py-5" >
                <h1 className="display-5 fw-bold" > A Warm Welcome! </h1>
                < p className="col-md-8 fs-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit libero vitae magni sequi nemo mollitia laboriosam corporis saepe natus, repellat ipsam. Placeat, iusto quas delectus consequatur reiciendis modi illo?
                </p>
                < button className="btn btn-primary btn-lg" type="button" > Call to action! </button>
            </div>
        </div>
    );
};

export default Jumbotron;