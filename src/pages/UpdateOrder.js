
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateOrder = () => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);

  const [updatedOrderDetails, setUpdatedOrderDetails] = useState({
    orderId: "",
    orderStatus: "",
  });

  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateOrder.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderId: updatedOrderDetails.orderId,
            cartData,
            updatedOrderDetails,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        toast.success("Status changed successfully!");
        console.log("Order updated successfully:", responseData);
      } else {
        toast.error("Error updating order. Please try again.");
        console.error("Error updating order. API response:", responseData);
      }
    } catch (error) {
      toast.error("Error updating order. Please try again.");
      console.error("Error updating order:", error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedOrderDetails({
      ...updatedOrderDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="edit">
      <h1 className="editp">Edit Order</h1>
      <form onSubmit={handleUpdateOrder}>
        <label>
          Order Status:
          <select
            name="orderStatus"
            value={updatedOrderDetails.orderStatus}
            onChange={handleInputChange}
          >
            <option value="0">prepare</option>
            <option value="1">Ready</option>
            <option value="2">Delivered</option>
          </select>
        </label>

        <button type="submit">Update Order</button>
      </form>
      <ToastContainer />
      <div className="ss"></div>
    </div>
  );
};

export default UpdateOrder;

{/*}
import React, { useState } from "react";

const UpdateOrder = () => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);

  const [orderIds, setOrderIds] = useState(["1", "2", "3"]); // Add your order IDs here

  const [updatedOrderDetails, setUpdatedOrderDetails] = useState({
    orderId: "",
    orderStatus: "",
  });

  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateOrder.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderId: updatedOrderDetails.orderId,
            cartData,
            updatedOrderDetails,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        window.alert("Status changed successfully!");
        console.log("Order updated successfully:", responseData);

      } else {
        console.error("Error updating order. API response:", responseData);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedOrderDetails({
      ...updatedOrderDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Edit Order</h1>
      <form onSubmit={handleUpdateOrder}>
        {/*}
        <label>
          Order ID:
          <select
            name="orderId"
            value={updatedOrderDetails.orderId}
            onChange={handleInputChange}
          >
            {orderIds.map((orderId) => (
              <option key={orderId} value={orderId}>
                {orderId}
              </option>
            ))}
          </select>
        </label>

        <label>
          Order Status:
          <select
            name="orderStatus"
            value={updatedOrderDetails.orderStatus}
            onChange={handleInputChange}
          >
            <option value="0"> 0</option>
            <option value="1"> 1</option>
          </select>
        </label>

        <button type="submit">Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
*/}
{/*}
import React, { useState } from "react";

const UpdateOrder = ({ orderId }) => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);

  const [updatedOrderDetails, setUpdatedOrderDetails] = useState({
    orderStatus: "",
  });

  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateOrder.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderId: "3",
            cartData,
            updatedOrderDetails,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        console.log("Order updated successfully:", responseData);
      } else {
        console.error("Error updating order. API response:", responseData);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedOrderDetails({
      ...updatedOrderDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Edit Order</h1>
      <form onSubmit={handleUpdateOrder}>
        <label>
          Order Status:
          <select
            name="orderStatus"
            value={updatedOrderDetails.orderStatus}
            onChange={handleInputChange}
          >
            <option value="0">Status 0</option>
            <option value="1">Status 1</option>
          </select>
        </label>

        <button type="submit">Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
*/}


{/*}
import React, { useState } from "react";

const UpdateOrder = ({ orderId }) => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(null);

  const [updatedOrderDetails, setUpdatedOrderDetails] = useState({
    orderStatus: "",
   
  });

  const handleUpdateOrder = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateOrder.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            restaurantId: "1",
            orderId:"3",
            cartData,
            updatedOrderDetails,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        console.log("Order updated successfully:", responseData);
        
      } else {
        console.error("Error updating order. API response:", responseData);
   
      }
    } catch (error) {
      console.error("Error updating order:", error);

    }
  };

  const handleInputChange = (e) => {
    setUpdatedOrderDetails({
      ...updatedOrderDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Edit Order</h1>
      <form onSubmit={handleUpdateOrder}>
        <label>
          Order Status:
          <input
            type="text"
            name="orderStatus"
            value={updatedOrderDetails.orderStatus}
            onChange={handleInputChange}
          />
        </label>
       
        <button type="submit">Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrder;
*/}
