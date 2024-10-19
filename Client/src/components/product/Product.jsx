import './Product.css';
import { useContext } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
import { useNavigate } from 'react-router-dom';

function Product({ productObj }) {
  const { currentUser } = useContext(userLoginContext);
  const navigate = useNavigate(); 

  async function addProductToCart(productObj) {
    if (!currentUser || !currentUser.username) {
      console.error("User is not logged in");
      return;
    }

    // Add current user data to productObj
    let username = currentUser.username;
    try {
      const res = await fetch(`http://localhost:3000/user-api/add-to-cart/${username}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(productObj),
      });

      let result = await res.json();
      console.log(result);

      if (result.payload && result.payload.modifiedCount === 1) {
        navigate('/user-profile/cart');  
      } else {
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  }

  return (
    <div className=" text-center gg">
      <div className="d-flex flex-column justify-content-between ">
        <img className=" jh" src={productObj.thumbnail} alt="" />
        <p className="fs-4 text-secondary">{productObj.title}</p>
        <p className="fs-6 text-danger">{productObj.brand}</p>
        <p className="lead">{productObj.description}</p>
        <button className=" m-auto gb" onClick={() => addProductToCart(productObj)}>Add to favorite places</button>
      </div>
    </div>
  );
}

export default Product;
