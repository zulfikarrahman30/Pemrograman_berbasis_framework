import React, {Component} from "react";
import './Products.css';
import Product from "../../component/Products/Products";

class Products extends Component{
    state = {
        listProduct:[]
    }

    ambilDataDariServerAPI = () => {
        fetch(`http://localhost:3001/products`)
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listProduct: jsonHasilAmbilDariAPI
            })
        })
        
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusProducts = (data) => {
        fetch(`http://localhost:3001/products/${data}`, {method: 'DELETE'})
            .then(res => { 
                this.ambilDataDariServerAPI()
            })
    }


    render() {
       return(
           <div className="post-artikel">
                <h2>Daftar Produk Laptop</h2>
                {
                    this.state.listProduct.map(product =>{
                        return <Product key={product.id} name={product.name} img={product.img} deskripsi={product.deskripsi} harga={product.harga} stock={product.stock} idproduct={product.id} hapusproduct={this.handleHapusproduct}/>
                    })
                }
           </div>
       )
    }
}

export default Products;