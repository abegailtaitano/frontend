import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductItem from './components/ProductListView';


function App() {

  const [productList, setProductList] = useState([{}])
  const [name, setName] = useState('') 
  const [desc, setDesc] = useState('')

  // Read all products
  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then(res => {
        setProductList(res.data)
      })
  },[]);

    // Post a todo
    const addProductHandler = () => {
      axios.post('http://localhost:8000/api/product/', { 'name': name, 'description': desc })
        .then(res => console.log(res))
  };


  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
    <h1 className="card text-black bg-white mb-1" styleName="max-width: 20rem;">INVENTORY MANAGER</h1>
    <h6 className="card text-white bg-black mb-3">FASTAPI - REACT - MONGODB</h6>
   <div className="card-body">
    <h5 className="card text-black bg-primary mb-3">Create Your Product:</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setName(event.target.value)} placeholder='Name'/> 
      <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)} placeholder='Description'/>
    <button className="btn btn-outline-success mx-2 mb-3" style={{'borderRadius':'10px',"font-weight":"bold"}} onClick={addProductHandler}>Submit Product</button>
    </span>
    <h5 className="card text-black bg-primary mb-3">Your Products:</h5>
    <div >
    <ProductItem productList={productList} />
    </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2022, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
