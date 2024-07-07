import React from 'react';
import "../css/Product.css";
import { useNavigate } from 'react-router-dom';


function Product({ product }) {

    const { id, title, price, description, image } = product;
    //console.log(image)

    const navigate = useNavigate();


    return (

        <div className="card">

            <img className="image" src={image} alt="" />

            <div>
                <p style={{ height: "50px", textAlign: "center" }}>{title}</p>
                <h3 style={{ textAlign: "center", paddingTop: "30px" }}>{price} $</h3>
            </div>

            <div className="flex-row">
                <button onClick={() => navigate("/product-details/" + id)} className="detail-button">Ətraflı məlumat</button>
            </div>

        </div>

    );

};

export default Product