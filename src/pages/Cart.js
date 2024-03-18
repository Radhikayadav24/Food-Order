import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Cart.css";
import MinusIcon from "../assets/minus.png";
import AddIcon from "../assets/add.png";
import { Button, Modal } from "react-bootstrap";
import { ClickAwayListener } from "@mui/base";

function Cart() {
  //const [orders, setOrders] = useState([]);
  // const [selectedMenu, setSelectedMenu] = useState(null);

  const [CartData, setCartData] = useState(null);
  const [total, setTotal] = useState(0);
  const [Error, setError] = useState([]);
  const [RefreshCartButton, setRefreshCartButton] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [itemToRemoveIndex, setItemToRemoveIndex] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("Cart"));

    if (storedCart && storedCart.length > 0) {
      setCartData(storedCart);
      intializeTotal(storedCart);
    } else {
      setError("Cartdata is not available");
    }
    console.log("stored data", storedCart);
    //const selectedMenuFromLocation = location.state?.selectedMenu;

    //if (selectedMenuFromLocation) {
    //  setSelectedMenu(selectedMenuFromLocation);
    // console.log("Selected Menu:", selectedMenuFromLocation);
    // }

    //  Remove the CartData condition here since it's already set above
    // if (CartData) {
    //   setCartData(CartData);
    //   console.log("Cart Data:", CartData);
    // }
  }, [location]);

  {
    /*}
  const handleAddToCart = () => {
    let newOrder;
    if (selectedMenu) {
      const existingOrderIndex = orders.findIndex(order => order.name === selectedMenu.name);
  
      if (existingOrderIndex !== -1) {
        const updatedOrders = [...orders];
        updatedOrders[existingOrderIndex].quantity += 1;
        setOrders(updatedOrders);
      } else {
        const newOrder = {
          orderId: orders.length + 1,
          name: selectedMenu.name,
          subtitle: selectedMenu.subtitle,
          price: selectedMenu.price,
          quantity: 1,
        };
  
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      
    }
      setSelectedMenu(null);

      console.log("Added item to cart:", newOrder);
    } else {
      console.log("No selected menu item to add to the cart.");
    }
  };

*/
  }
  {
    /*
const handleAddOrder = () => {
  /
  const addOrderApiUrl = "http://polexsoft.com/restaurant/api/addOrder.php";
  const addOrderData = {
    restaurantId: "1",
    tableId: "1",
    userId: "1",
    cartData: CartData.map((item) => ({
      menuId: item.menuId,
      menuName: item.menuName,
      categoryId: item.categoryId,
      categoryName: item.categoryName,
      price: item.price,
      userComment: item.userComment,
      quantity: item.count || 1,
    })),
  };

  fetch(addOrderApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addOrderData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Show success message or handle the response as needed
      console.log("Add Order API Response:", data);
      alert("Order added successfully!");
    })
    .catch((error) => {
      console.error("Error adding order:", error);
      alert("Error adding order. Please try again.");
    });
};
*/
  }

  const handleAddOrder = () => {
    if (!CartData || CartData.length === 0) {
      // Display a message when the cart is empty
      alert(
        "Please choose your meal first. Your cart is empty. Nothing item too be add"
      );
      return;
    }

    const addOrderApiUrl = "http://polexsoft.com/restaurant/api/addOrder.php";
    const addOrderData = {
      restaurantId: "1",
      tableId: "1",
      userId: "1",
      cartData: CartData.map((item) => ({
        menuId: item.menuId,
        menuName: item.menuName,
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        price: item.price,
        userComment: item.userComment,
        quantity: item.count || 1,
      })),
    };

    fetch(addOrderApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addOrderData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the response indicates success
        if (data.status === "success") {
          console.log("Add Order API Response:", data);
          // Remove items from the cart after a successful order
          setCartData([]);

          // Update local storage with the current CartData
          const updatedCartData = [...CartData];
          localStorage.setItem("Cart", JSON.stringify(updatedCartData));

          // Access and use the storeCart data in the response
          const storedCart = data.data;
          console.log("storedCart Data:", storedCart);

          alert("Order added successfully!");
        } else {
          console.error("Error adding order. Response:", data);
          alert("Error adding order. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error adding order:", error);
        alert("Error adding order. Please try again.");
      });
    <button onClick={handleAddOrder}>Add Order</button>;
  };
  const incrementcount = (index) => {
    const updatedCart = [...CartData];
    updatedCart[index].count = (updatedCart[index].count || 1) + 1;
    setCartData(updatedCart);

    updatetotal(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...CartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);

    setRefreshCartButton(false);
    setTimeout(() => {
      setRefreshCartButton(true);
    }, 1);

    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  {
    /*}
  const decrementcount = (index)=>{
    const updatedCart=[...CartData];
    if (updatedCart[index].count && updatedCart[index].count>1){
      updatedCart[index].count -= 1;
      setCartData(updatedCart);
   

      updatetotal(updatedCart);
    }
  };
*/
  }

  const decrementcount = (index) => {
    const updatedCart = [...CartData];
    if (updatedCart[index].count && updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCartData(updatedCart);
      updatetotal(updatedCart);
    } else {
      setItemToRemoveIndex(index); // Set the index of the item to be removed
      setShowModal(true);
      // // If count is less than or equal to one, show a confirmation popup
      //  const confirmDelete = window.confirm("Are you sure you want to Remove this item?");

      // if (confirmDelete) {
      //   // Remove the item if the user confirms
      //   handleRemoveItem(index);
      // }
      // // If the user cancels, do nothing
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmRemove = () => {
    if (itemToRemoveIndex !== null) {
      handleRemoveItem(itemToRemoveIndex);
      handleCloseModal();
    }
  };

  const updatetotal = (Cartitems) => {
    const updatedtotal = Cartitems.map(
      (item) => item.price * (item.count || 1)
    );
    setTotal(updatedtotal);
  };

  const intializeTotal = (Cartitems) => {
    const intializeTotal = Cartitems.map(
      (item) => item.price * (item.count || 1)
    );
    setTotal(intializeTotal);
  };

  //const calculatetotalprice =()=>{
  //return total.reduce((acc,curr)=> acc+curr,0);
  //};

  const calculatetotalprice = () => {
    const totalArray = Array.isArray(total) ? total : [];
    return totalArray.reduce((acc, curr) => acc + curr, 0);
  };

  const DeleteCartItem = (id, name) => {
    const confirmDelete = window.confirm("Are you sure for Delete the Item");
    if (confirmDelete) {
      const updatedCart = CartData.filter((item) => item.id !== id);
      setCartData(updatedCart);

      setRefreshCartButton(false);
      setTimeout(() => {
        setRefreshCartButton(true);
      }, 1);

      localStorage.setItem("Cart", JSON.stringify(updatedCart));
    }
  };

  const imagess = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHx1Njc5xMA3PSfyORji_HLYn3M3mMcCaYw&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYmbq5bLQTrQkSHQVorNmFdJVHncZwni6ng&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9xkU5XGYQnrnAYH75NbPAo9GfKesqcxVaA&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zY2GfKqh7P_Lfz-AIeQrvRrodM3IXkOpBQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROsR7YTv67gUzkQ3W1S6Y6N0REbyC7I8rIQ&usqp=CAU",
    },
    {
      src: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Pa3Hk_7TPeLxN1YSmqtX5xyQ7pFVFuuuQQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZeV2r7n1YGuJP0I-VkZziEjjQX95coX4Hg&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxyF36jm_PK_M7MoWnu1kiKbbmRbnKMKrOg&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRnVPLMOLHGq-GSERt0rQOwAY_7GIcgdRLA&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtHLWpnLls65RnsyDwHLNin9Cffyo6rNPlw&usqp=CAU",
    },
  ];

  return (
    <div style={{ paddingTop: 40 }}>
      <div className="CartContainer">
        <div className="res">
          <h1 className="hhh">Your Cart</h1>
        </div>

        <div className="btppp" style={{ marginBottom: 30 }}>
          <button onClick={handleAddOrder}>Add Order</button>
          <button onClick={() => navigate("/ViewOrder")}>View Order</button>
          <button onClick={() => navigate("/UpdateOrder")}>Update Order</button>
        </div>

        <div>
          {CartData && CartData.length > 0 ? (
            <div className="cartTable">
              {/*}
     <div className="hed">
          <h3><b>Items</b> </h3>
          <h3 className="nm"> <b>Name</b></h3>
          <h3> <b>Price</b></h3>
          <h3><b>Quantity</b></h3>
       
          <h3> <b>Total</b></h3>
        </div>
      */}
              {CartData.map((item, index) => (
                <div key={item.id} className="mainsss">
                  <div className="pppp">
                    <div className="ns">
                      <span style={{ fontSize: 23, fontWeight: "bold" }}>
                        {item.name}
                      </span>
                      {item && item.subtitle && (
                        <>
                          &nbsp;&nbsp;
                          <span style={{ fontSize: 20 }}>
                            ({item.subtitle})
                          </span>
                        </>
                      )}
                    </div>
                    <p className="price" style={{ fontWeight: "600" }}>
                      Price : {item.price}
                      {/* <b> {item.price}</b> */}
                    </p>

                    <div
                      className="jjjj"
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p className="price" style={{ fontWeight: "400" }}>
                        Total Price : {total[index]}
                      </p>
                    </div>
                    {RefreshCartButton && (
                      <button
                        className="removebtn"
                        onClick={() => {setShowModal(true)/* DeleteCartItem(item.id) */}}
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="imggg">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="cpctt" />
                    ) : (
                      <img
                        className="cpctt"
                        src={imagess[index % imagess.length].src}
                        alt="Default"
                      />
                    )}
                    <div className="incdecbtn">
                      <button
                        className="increment"
                        onClick={() => decrementcount(index)}
                      >
                        <img
                          src={MinusIcon}
                          style={{ width: 20, height: 20 }}
                        ></img>
                      </button>
                      <span className="quantity">{item.count || 1}</span>
                      <button
                        className="increment"
                        onClick={() => incrementcount(index)}
                      >
                        <img
                          src={AddIcon}
                          style={{ width: 20, height: 20 }}
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cartts">
              <div className="qqqq">
                <div className="mno" />
                <div className="pq">Your cart is empty</div>
                <div className="hop">
                  You can go to home page to view more restaurants
                </div>
                <div>
                  <button
                    className="catebtn"
                    onClick={() => navigate("/Categories")}
                  >
                    See restaurants near you
                  </button>
                </div>
              </div>
            </div>
          )}

          {CartData && CartData.length > 0 && (
            <div className="gtd">
              <h3 className="gtp" style={{ marginBottom: 20 }}>
                Total Amount :{calculatetotalprice()}
              </h3>
            </div>
          )}

          {/* <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Removal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to remove this item?</Modal.Body>
            <Modal.Footer>
              <Button className="btnforconre" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button className="btnforconre" onClick={handleConfirmRemove}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal> */}
{showModal &&
  
  <div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex:9
  }}
>
  <ClickAwayListener onClickAway={() => setShowModal(false)}>
<div>
<button type="button" className="close" onClick={handleCloseModal}>
                  &times;
                </button>
    <div className="modal">
 
      <div>
  Are you sur you want to remove this item.
  </div>
 <div className="ConfirmCancelbtn">  
  <Button className="removebtnn" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button className="removebtnn" onClick={handleConfirmRemove}>
                Confirm
              </Button>
              </div>
    </div>
    </div>
    </ClickAwayListener>
    </div>
}

        </div>
      </div>
    </div>
  );
}

export default Cart;

{
  /*
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Cart(){
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [CartData, setCartData] = useState(null);
 
  
    const location = useLocation();
    useEffect(() => {
      // Access the selectedMenu data from the location state
     // const selectedMenuFromLocation = location.state?.selectedMenu;
      const CartData = location.state?.CartData;
   
  //    if (selectedMenuFromLocation) {
      //  setSelectedMenu(selectedMenuFromLocation);
    //    console.log("Selected Menu:", selectedMenuFromLocation);
      // Access the selectedMenu data from the location state
    const selectedMenuFromLocation = location.state?.selectedMenu;


    if (selectedMenuFromLocation) {
      setSelectedMenu(selectedMenuFromLocation);
      console.log("Selected Menu:", selectedMenuFromLocation);
    }

    if (CartData) {
      setCartData(CartData);
      console.log("Cart Data:", CartData );
    }

      
    
    
    
    
      const apiUrl = "http://polexsoft.com/restaurant/api/getAllOrder.php";
      const requestData = {
        restaurantId: "1",
        userId: "1",
      };
    
      // Fetch data from the API
      const fetchOrders = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(requestData),
          });
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const data = await response.json();
          if (data.status === "success") {
            setOrders(data.data);
          } else {
            setError("Error fetching orders");
          }
        } catch (error) {
          console.error("Error fetching orders:", error);
          setError("Error fetching orders");
        }
      };
    
      // Call the fetchOrders function
      fetchOrders();
    }, [location]);
    
      const handleAddToCart = () => {
    // Check if there is a selected menu item
  if (selectedMenu) {
    // Create a new order object based on the selected menu item
    const newOrder = {
      orderId: orders.length + 1, // You might want to use a more robust ID generation logic
      // Copy other relevant details from the selected menu
      name: selectedMenu.name,
      subtitle: selectedMenu.subtitle,
      price: selectedMenu.price,
      quantity: 1, // Assuming initially the quantity is 1
    };

    // Update the orders state by adding the new order
    setOrders(prevOrders => [...prevOrders, newOrder]);

    // Optionally, you can reset the selectedMenu state to null after adding it to the cart
    setSelectedMenu(null);

    console.log("Added item to cart:", newOrder);
  } else {
    console.warn("No selected menu item to add to the cart.");
  }

    console.log("Adding item to cart:", selectedMenu);
  };
  {/*}

  const handleIncrement = (index) => {
    if (index >= 0 && index < orders.length) {
      const updatedOrders = [...orders];
      updatedOrders[index].quantity = (updatedOrders[index].quantity || 0) + 1;
      setOrders(updatedOrders);
    }
  };
  
  const handleDecrement = (index) => {
    if (index >= 0 && index < orders.length && orders[index].quantity > 0) {
      const updatedOrders = [...orders];
      updatedOrders[index].quantity -= 1;
      setOrders(updatedOrders);
    }
  };


  
    return(
        <>
        <div>
          <h1 className="hhh">Your Cart</h1>
        </div>
        <div>
          <button onClick={handleAddToCart}>Add Order</button>
        </div>
    {/*
        {selectedMenu && (
        <div className="imgd">
          <div className="klmmmm">
                <div>
        
                  {selectedMenu.image ? (
                    <img src={selectedMenu.image} alt={selectedMenu.name} className="cpct" />
                  ) : (
                    <img
                      className="cpct"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
                      alt="Default"
                    />
                  )}
                </div>
                <div className="pc">
          <p>Name: {selectedMenu.name}</p>
          <p>Subtitle: {selectedMenu.subtitle}</p>
          <p>Price: {selectedMenu.price}</p>
       
          </div>
       </div>
        </div>
      )}
       
        <div>
        {CartData && (
          <div className="tbl">
    
            {CartData.map((item, index) => (
            
              <div key={item.id} className="mainsss">
                       <div className="imggg">
        
        {CartData.image ? (
          <img src={item.image} alt={item.name} className="cpctt" />
        ) : (
          <img
            className="cpctt"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
            alt="Default"
          />
        )}
      </div>
      
      <div className="pppp">
                <p><b> {item.name}</b></p>
                <p><b> {item.subtitle}</b></p>
                <p><b> Price: {item.price}</b></p>
                
              </div>
              </div>
            ))}
          </div>
        )}
      </div>

        {/*
          <div>
      {error && <div>Error fetching orders</div>}
      {orders.map((order) => (
        <div key={order.orderId}>
        <div className="ord">
          <p>Order ID: {order.orderId}</p>
          <p>Total Item: {order.totalItem}</p>
          <p>totalAmmount: {order.totalAmmount}</p>
         
          </div>
        </div>
      ))}
    </div>

        
        
        </>
    );
};
export default Cart;
      */
}
