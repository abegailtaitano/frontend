import axios from 'axios'
import React from 'react'

function ProductItem(props) {
    const deleteProductHandler = (name) => {
    axios.delete(`http://localhost:8000/api/product/${name}`)
        .then(res => console.log(res.data)) }

        return (
            <div>
                <p>
                    <span style={{ fontWeight: 'bold, underline' }}>{props.product.name} : </span> {props.product.description} 
                    <button onClick={() => deleteProductHandler(props.product.name)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                    <hr></hr>
                </p>
            </div>
        )
    }
    
    export default ProductItem;