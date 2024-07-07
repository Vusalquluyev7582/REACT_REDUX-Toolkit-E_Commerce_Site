import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slice/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slice/basketSlice";


function ProductDetails() {

    const { id } = useParams();

    const { products, selectedProduct } = useSelector((store) => store.product);

    const { title, price, description, image } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const addBasket = () => {

        const payload = {
            id,
            title,
            price,
            description,
            image,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());

    };

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {

        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })

    };


    return (

        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>

            <div style={{ marginRight: "40px" }}>
                <img src={image} width={300} height={500} alt="" />
            </div>

            <div>

                <h2 style={{ fontFamily: "arial" }}>{title}</h2>
                <p style={{ fontSize: "20px", fontFamily: "arial" }}>{description}</p>
                <h1 style={{ color: "rgb(185, 76, 76)", fontSize: "50px", fontFamily: "arial", fontWeight: "bold" }}>{price} $</h1>


                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: "40px", marginRight: "25px" }} />
                    <span style={{ fontSize: "35px" }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: "40px", marginLeft: "25px" }} />
                </div>

                <div>
                    <button onClick={addBasket}
                        style={{ marginTop: "25px", border: "none", padding: "10px", color: "#fff", backgroundColor: "rgb(185, 76, 76)", borderRadius: "5px" }}>Səbətə əlavə et</button>
                </div>

            </div>

        </div>

    );

};

export default ProductDetails