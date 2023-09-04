import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data)

        }).catch((error) => {
            console.log(error)
        })


    } 
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <>
            <h2>Product Lists</h2>

            <div className="cards">

                {
                    products.map((item, index) => (

                        <div className="card">

                            <img src={item.image} alt="" style={{ width: "200px" }} />
                            <h4>{item.title}</h4>
                            <button>Add Cart <hr></hr> ${item.price} </button>

                        </div>


                    ))
                }



            </div>
        </>
    );
}

export default Product;