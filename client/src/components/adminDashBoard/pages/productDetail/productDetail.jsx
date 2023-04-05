import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductById, fetchUpdateProduct } from '../../../../reduxToolkit/actions/productAction'
import Sidebar from '../sidebar/Sidebar';
import './productDetail.scss';
import { toast } from "react-toastify";
import Loading from '../loading/Loading';

const initialForm = {
}

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState('');
  const [size, setSize] = useState([]);
  const [newZise, setNewSize] = useState('');
  let [changes, setChanges] = useState(initialForm)


  useEffect(() => {
    dispatch(fetchProductById({ productId: id, userId: user._id })).then((res) => setProduct(res.payload));
  }, [])

  const addColor = () => {
    if (newColor.trim()) {
      setColors([...colors, newColor]);
      setNewColor('');
    }
  };
  const addZise = () => {
    if (newColor.trim()) {
      setSize([...size, newZise]);
      setNewSize('');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setChanges({
      ...changes,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    changes.id = product.id

    dispatch(fetchUpdateProduct(changes)).then((res) => toast.success("Product edited successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }))
  }

  console.log({ product })
  if (!product.name) {
    return <div className='productDetail'>
      <Sidebar />
      <div className="singleContainer">
        <Loading/>
      </div>
    </div>
  }
  return (
    <div className='productDetail'>
      <Sidebar />
      <div className="singleContainer">

        <div className='top'>
          <div className='left'>
            <button className='editButton' onClick={handleSubmit} >Edit</button>
            <div className='productInformation'>
              <img src={product.image} alt="product" className='productImage' />

              <div className="information">

                <h1 className="productTitle"> Information of product </h1>
                <form action="">
                  <div className='detailItem'>
                    <span className='itemKey'>id: </span>
                    <span>{product.id}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Name: </span>
                    <input type="text"
                      placeholder={product.name}
                      className='input'
                      name="name"
                      value={changes.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Description: </span>
                    <textarea type="text"
                      placeholder={product.description}
                      className='input'
                      name="description"
                      value={changes.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Active: </span>
                    <input type="text"
                      placeholder={product.active ? "True" : "False"}
                      className='input'
                      name="active"
                      value={changes.active}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Price: </span>
                    <input type="text"
                      placeholder={product.price}
                      className='input'
                      name="price"
                      value={changes.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Sold amount: </span>
                    <span>{product.soldAmount}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Visits: </span>
                    <span>{product.usersVisits}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Discount: </span>
                    <input type="text"
                      placeholder={product.discount}
                      className='input'
                      name="discount"
                      value={changes.discount}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Colors: </span>
                    {product.Colors.length > 0 ? (
                      <ul>
                        {product.Colors.map((color, index) => (
                          <li key={index} style={{ color }}>{color}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay colores disponibles.</p>
                    )}
                    <input
                      type="text"
                      value={newColor}
                      onChange={(e) => setNewColor(e.target.value)}
                      className='input'
                    />
                    <button onClick={addColor} className='buttom'>Add Color</button>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Size: </span>
                    {product.Sizes.length > 0 ? (
                      <ul>
                        {product.Sizes.map((color, index) => (
                          <li key={index} style={{ color }}>{color}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay tallas disponibles.</p>
                    )}
                    <input
                      type="text"
                      value={newZise}
                      onChange={(e) => setNewSize(e.target.value)}
                      className='input'
                    />
                    <button onClick={addZise} className='buttom'>Add Size</button>
                  </div>

                  <div className='detailItem'>
                    <span className='itemKey'>Created at: </span>
                    <span>{product.createdAt}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail