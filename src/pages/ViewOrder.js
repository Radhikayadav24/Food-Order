import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import './modal.css'; 
import Loader from "react-js-loader";
const ViewOrder = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  const [errorOrders, setErrorOrders] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  async function fetchOrders() {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/getAllOrder.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ restaurantId: 1 }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails(responseData.data);
        setErrorOrders(false);
      } else {
        setErrorOrders(true);
      }
    } catch (error) {
      console.error("Error fetching Orders", error);
      setErrorOrders(true);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChangeOrderStatus = async (orderId, newOrderStatus) => {
    try {
   
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/changeOrderStatus.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderStatus: newOrderStatus,
            orderId: orderId,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails((prevOrderDetails) => {
          const updatedOrders = prevOrderDetails.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  orderStatus: responseData.data[0].orderStatus,
                  items: responseData.data[0].items,
                }
              : order
          );
          return updatedOrders;
        });
        window.alert("Status changed successfully!");
      } else {
        console.error("Error changing order status. API response:", responseData);
      }
    } catch (error) {
      console.error("Error changing order status:", error);
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOrder(null);
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
  const color =  "#fc8019";
  return (
    <div>
       {loading ? (
        <div className={"item"}>
          <Loader type="spinner-circle" bgColor={color} color={color}  size={100} />
        </div>
      ): orderDetails && orderDetails.length > 0 ? (
        orderDetails.map((order, orderIndex) => (
          <div key={orderIndex}>
            <div className="od">
              <h1>Order Details</h1>
              <p className="orid"><b>Order ID:</b> {order.id}</p>
             {/* } <p className="orid2">Order Date: {order.createDate}</p>*/}
              <p className="orid2">Order Date:  {formatDate(order.createDate)}</p>
              <p className="tot"><b>Total Item: </b>{order.totalItem}</p>
              <p className="tott"><b>Status:</b> {order.status}</p>
              <p className="tott"><b>Total Amount:</b> {order.totalAmmount}</p>
          
              <div className="drop">
                <label htmlFor={`statusDropdown_${order.id}`}>Change Status:</label>
                <select
                  id={`statusDropdown_${order.id}`}
                  value={order.orderStatus}
                  onChange={(e) => handleChangeOrderStatus(order.id, e.target.value)}
                >
                  <option value="1"> Not prepare</option>
                  <option value="2">prepare</option>
                </select>
              </div>
      
              <div>
              <button onClick={() => openModal(order)}>View Order Details</button>
          
            </div>
            </div>

          </div>
        ))
      ) : (
        <p>{errorOrders ? "Error fetching order details" : "Loading..."}</p>
      )}

      {selectedOrder && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Order Details Modal"
        >
          <h2>Items in the Order</h2>
          <ul>
            {selectedOrder.items && selectedOrder.items.length > 0 ? (
              selectedOrder.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <div className="items">
                    <p>Menu Name: {item.menuName}</p>
                    <p>Category: {item.categoryName}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>No items in the order</p>
            )}
          </ul>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default ViewOrder;


{/*}
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';

const ViewOrder = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorOrders, setErrorOrders] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function fetchOrders() {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/getAllOrder.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ restaurantId: 1 }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails(responseData.data);
        setErrorOrders(false);
      } else {
        setErrorOrders(true);
      }
    } catch (error) {
      console.error("Error fetching Orders", error);
      setErrorOrders(true);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChangeOrderStatus = async (orderId, newOrderStatus) => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/changeOrderStatus.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderStatus: newOrderStatus,
            orderId: orderId,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails((prevOrderDetails) => {
          const updatedOrders = prevOrderDetails.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  orderStatus: responseData.data[0].orderStatus,
                  items: responseData.data[0].items,
                }
              : order
          );
          return updatedOrders;
        });
        window.alert("Status changed successfully!");
      } else {
        console.error("Error changing order status. API response:", responseData);
      }
    } catch (error) {
      console.error("Error changing order status:", error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {orderDetails && orderDetails.length > 0 ? (
        orderDetails.map((order, orderIndex) => (
          <div key={orderIndex}>
            <div className="od">
              <h1>Order Details</h1>
              <p className="orid"><b>Order ID:</b> {order.id}</p>
              <p className="orid2">Order Date: {order.createDate}</p>
              <p className="tot"><b>Total Item: </b>{order.totalItem}</p>
              <p className="tott"><b>Total Ammount:</b> {order.totalAmmount}</p>
              <div className="drop">
                <label htmlFor={`statusDropdown_${order.id}`}>Change Status:</label>
                <select
                  id={`statusDropdown_${order.id}`}
                  value={order.orderStatus}
                  onChange={(e) => handleChangeOrderStatus(order.id, e.target.value)}
                >
                  <option value="1">0</option>
                  <option value="2">1</option>
                </select>
              </div>
            </div>
            <div>
              <button onClick={openModal}>View Order Details</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Order Details Modal"
              >
                <h2>Items in the Order</h2>
                <ul>
                  {order.items && order.items.length > 0 ? (
                    order.items.slice(0, 9).map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div className="items">
                          <p>Menu Name: {item.menuName}</p>
                          <p>Category: {item.categoryName}</p>
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p>No items in the order</p>
                  )}
                </ul>
                <button onClick={closeModal}>Close</button>
              </Modal>
            </div>
          </div>
        ))
      ) : (
        <p>{errorOrders ? "Error fetching order details" : "Loading..."}</p>
      )}
    </div>
  );
};

export default ViewOrder;

{/*}
import Reae } from "react";
import Modct, { useEffect, useStatal from 'react-modal';

const ViewOrder = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorOrders, setErrorOrders] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function fetchOrders() {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/getAllOrder.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ restaurantId: 1 }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails(responseData.data);
        setErrorOrders(false);
      } else {
        setErrorOrders(true);
      }
    } catch (error) {
      console.error("Error fetching Orders", error);
      setErrorOrders(true);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChangeOrderStatus = async (orderId, newOrderStatus) => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/changeOrderStatus.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderStatus: newOrderStatus,
            orderId: orderId,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setOrderDetails((prevOrderDetails) => {
          const updatedOrders = prevOrderDetails.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  orderStatus: responseData.data[0].orderStatus,
                  items: responseData.data[0].items,
                }
              : order
          );
          return updatedOrders;
        });
        window.alert("Status changed successfully!");
      } else {
        console.error("Error changing order status. API response:", responseData);
      }
    } catch (error) {
      console.error("Error changing order status:", error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {orderDetails && orderDetails.length > 0 ? (
        orderDetails.map((order, orderIndex) => (
          <div key={orderIndex}>
            <div className="od">
              <h1>Order Details</h1>
              <p className="orid"><b>Order ID:</b> {order.id}</p>
              <p className="orid2">Order Date: {order.createDate}</p>
              <p className="tot"><b>Total Item: </b>{order.totalItem}</p>
              <p className="tott"><b>Total Ammount:</b> {order.totalAmmount}</p>
              <div className="drop">
                <label htmlFor={`statusDropdown_${order.id}`}>Change Status:</label>
                <select
                  id={`statusDropdown_${order.id}`}
                  value={order.orderStatus}
                  onChange={(e) => handleChangeOrderStatus(order.id, e.target.value)}
                >
                  <option value="1">0</option>
                  <option value="2">1</option>
                </select>
              </div>
            </div>
            <div>
              <button onClick={openModal}>View Order Details</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Order Details Modal"
              >
                <h2>Items in the Order</h2>
                <ul>
                  {order.items && order.items.length > 0 ? (
                    order.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div className="items">
                          <p>Menu Name: {item.menuName}</p>
                          <p>Category: {item.categoryName}</p>
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p>No items in the order</p>
                  )}
                </ul>
                <button onClick={closeModal}>Close</button>
              </Modal>
            </div>
          </div>
        ))
      ) : null /* No loading message when data is being fetched 
    </div>
  );
};

export default ViewOrder;

*/}


{/*}
import React, { useEffect, useState } from "react";

const ViewOrder = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorOrders, setErrorOrders] = useState(false);

  async function fetchOrders() {
    try {
      // const storedCart = JSON.parse(localStorage.getItem("Cart"));
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/getAllOrder.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ restaurantId: 1 }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        console.log('aaaaaaa',responseData.data)
        // Set the fetched order details to state
        setOrderDetails(responseData.data);
        setErrorOrders(false);
      } else {
        setErrorOrders(true);
      }
    } catch (error) {
      console.error("Error fetching Orders", error);
      setErrorOrders(true);
    }
  }


  useEffect(() => {
    

    fetchOrders();
  }, []);


  return (
    <div
>
      {orderDetails && orderDetails.length > 0 ? (
        orderDetails.map((order, orderIndex) => (
          <div key={orderIndex}>
            <div className="od">
            <h1>Order Details</h1>
            <p>Order ID: {order.id}</p>
            <p>Order Date: {order.createDate}</p>
            <p>Order Status: {order.orderStatus}</p>
          
            </div>
            <div>
              <h2>Items in the Order</h2>
              
              <ul>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <div className="items">
                      <h3>Item {itemIndex + 1}</h3>
                      <p>Menu Name: {item.menuName}</p>
                      <p>Category: {item.categoryName}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No items in the order</p>
                )}
              </ul>
            </div>
          </div>
        ))
      ) : (
        // Display an error message if fetching fails
        <p>{errorOrders ? "Error fetching order details" : "Loading..."}</p>
      )}
    </div>
  );
};

export default ViewOrder;
*/}
  {/*}
  const handleChangeOrderStatus = async (orderId, newOrderStatus) => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/changeOrderStatus.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderStatus: newOrderStatus, // Use the new order status
            orderId: orderId,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        console.log("Order status changed successfully:", responseData);
        
        setOrderDetails((prevOrderDetails) => {
          const updatedOrders = prevOrderDetails.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  orderStatus: responseData.data[0].orderStatus,
                  items: responseData.data[0].items,
                }
              : order
          );
          return updatedOrders;
        });
        window.alert("Status changed successfully!");
      } else {
        console.error("Error changing order status. API response:", responseData);
        // Handle error 
      }
    } catch (error) {
      console.error("Error changing order status:", error);
      // Handle error
    }
  };
*/}
{/*}
  const handleChangeOrderStatus = async (orderId) => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/changeOrderStatus.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderStatus: "1",
            orderId: orderId,
          }),
        }
      );
  
      const responseData = await response.json();
      if (response.ok) {
        console.log("Order status changed successfully:", responseData);
        
        // Update the order details in the local state
        setOrderDetails((prevOrderDetails) => {
          const updatedOrders = prevOrderDetails.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  orderStatus: responseData.data[0].orderStatus,
                  items: responseData.data[0].items, // Update the items array
                }
              : order
          );
          return updatedOrders;
        });
        window.alert("Status changed successfully!");
      } else {
        console.error("Error changing order status. API response:", responseData);
        // Handle error 
      }
    } catch (error) {
      console.error("Error changing order status:", error);
      // Handle error
    }
  };
*/}