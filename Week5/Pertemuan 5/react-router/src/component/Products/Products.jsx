import React from "react";

const Product = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src={props.img} alt="Gambar Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                 <div className="judul-artikel">{props.name}</div>
                 <p className="isi-artikel">{props.deskripsi}</p>
                 <p className="isi-artikel">{props.harga}</p>
                 <p className="isi-artikel">{props.stock}</p>
                 <button className="btn btn-sm btn-warning" onClick={() => props.hapusProduct(props.idproduct)}>Hapus</button>
            </div>
        </div>
     )
}
export default Product;