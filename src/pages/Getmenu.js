import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import "./Getmenu.css";
import Loader from "react-js-loader";



function Getmenu() {
  const navigate = useNavigate();
 
  const [MenuData, setMenuData] = useState([]);
  const [error, seterror] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateMenuName, setUpdateMenuName] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [refreshCartButton, setrefreshCartButton] = useState(true);
  
  
  const [formData, setFormData] = useState({
    restaurantId: 1,
    categoryId: 2,
    name: "",
    subtitle: "",
    image: "",
    description: "",
    price: "",
    type: 0,
    isBestseller: 1,
    spicy: 1,
  });
  const 
  [validationErrors, setValidationErrors] = useState({
    name: "",
    subtitle: "",
    price: "",
  });

  useEffect(() => {
    fetchinfo();
  }, []);

  async function fetchinfo() {
    try {
      setLoading(true);
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/restaurantMenu.php",
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
      if (response.ok && responseData.status === "success") {
        setMenuData(responseData.data);
        seterror(false);
      } else {
        seterror(true);
      }
    } catch (error) {
      console.error("Error fetching Categories", error);
      seterror(true);
    } finally {
      setLoading(false); // Set loading to false when the API call is completed
    }
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      subtitle: "",
      price: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.subtitle.trim()) {
      errors.subtitle = "Subtitle is required";
      isValid = false;
    }

    if (!formData.price.trim()) {
      errors.price = "Price is required";
      isValid = false;
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      errors.price = "Price must be a valid positive number";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleMenuSelection = (menuId) => {
    const selectedMenu = MenuData.find(
      (menu) => menu.id === parseInt(menuId, 10)
    );
    setFormData({
      menuId: menuId,
      name: selectedMenu.name,
      subtitle: selectedMenu.subtitle,
      price: selectedMenu.price,
    });
  };




const addMenu = async () => {
  if (validateForm()) {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/addMenu.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
      
        fetchinfo();
        setIsModalOpen(false); 
      } else {
       
        console.error("Error adding menu", responseData.message);
      }
    } catch (error) {
      console.error("Error adding menu", error);
    }
  }
};


  const handleUpdateMenu = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(
          "http://polexsoft.com/restaurant/api/updateMenu.php",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              menuId: selectedMenu, 
              restaurantId: 1,
              categoryId: 2,
              name: formData.name,
              subtitle: formData.subtitle,
              image: formData.image,
              description: formData.description,
              price: formData.price,
              type: formData.type,
              isBestseller: formData.isBestseller,
              spicy: formData.spicy,
            }),
          }
        );
        const responseData = await response.json();
        if (response.ok && responseData.status === "success") {
          fetchinfo();
          setShowUpdateModal(false);
        } else {
          console.error("Error updating menu:", responseData.message);
        }
      } catch (error) {
        console.error("Error updating menu", error);
      }
    }
  };

  const openupdate = () => {
    setShowUpdateModal(true);
  };

  const closeupdate = () => {
    setShowUpdateModal(false);
  };



  // Function to handle category deletion
  const handleDeleteMenu= async () => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/deleteMenu.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify( {"restaurantId":"1", "menuId": selectedMenu}),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        // Refresh the menu after deletion
        fetchinfo();
        setShowDeleteModal(false);
      } else {
        console.error('Error deleting category:', responseData.message);
      }
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };


  const handleMenudata = (selectedMenu) => {
    navigate(`/Cart`, {
      state: { selectedMenu },
    });
  };



  //add to cart function
  const handleCartclick = (menu) => {
    let Carttemp = Cart;
    Carttemp.push(menu);
    setCart(Carttemp);
    setrefreshCartButton(false);
    setTimeout(() => {
      setrefreshCartButton(true);
    }, 1);
    //data store in string
    localStorage.setItem("Cart", JSON.stringify(Carttemp));
  };
  const checkIsInCart = (menu) => {
    for (let i = 0; i < Cart.length; i++) {
      if (Cart[i].id == menu.id) return true;
    }
    return false;
  };


  const handleCrtpg = (Cart) => {
    navigate(`/Cart`, {
      state: { CartData: Cart },
    });
  };


  const imagess = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHx1Njc5xMA3PSfyORji_HLYn3M3mMcCaYw&usqp=CAU",
    
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Bpb3jPKy8OhYxz8OnHVgVEu2vPeWNXjokg&usqp=CAU",

      
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxn4cLVDrmOtaprF1XeJqJOc1g8L2Lm3rYVQ&usqp=CAU",

    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zY2GfKqh7P_Lfz-AIeQrvRrodM3IXkOpBQ&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-XgZZZP7pMraDNbiOz_c3SOKvwIb7IKtCw&usqp=CAU",

    },
    {
      src: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_F33poSuf294CEVP7Q4jGJvB5q0zBXu1Xg&usqp=CAU ",

    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09uYXRbommpnEI_ADsj0w-XIyiKWDIfBXJla-XYYWtReetcgT76bCdqr4MK2gBIV8V4Y&usqp=CAU",

      
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjMIalMhlJbhR4mm6S_G_F4NVDl3M9eJBiQ&usqp=CAU",

 
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSYapPkzTOQ4v8z8Hn7bYsVxVH3L2FHozKakmjtVKmJM0TYEJLmexvDnmC0AOw1wZgBk&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNKofLhaOPYDXil9VkNdOh7_IjQl1Auk2RjODIbwIwcbZVkjkkIeqOBeQFNRal1hjp7k&usqp=CAU",

 
    },
  ];
  return (
    <>
     {loading ? (
      <div className="loader-container">
        <Loader type="spinner-circle" bgColor="#fc8019" color="#fc8019"  size={100} />
      </div>
    ) : (
      <div className="addd1">
        {/*}
        <div className="addd">
          <button onClick={() => setIsModalOpen(true)}>Add Menu</button>
          <button onClick={openupdate}> Update Menu</button>
          <button onClick={openDeleteModal}> Delete Menu</button>
        </div>

        {/*modal for add menu */}
       
        {isModalOpen && (
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
          <div className="modal">
            <form>
             
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="error">{validationErrors.name}</span>
              <label>Subtitle:</label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
              <span className="error">{validationErrors.subtitle}</span>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
              <span className="error">{validationErrors.price}</span>
            
              <button type="button" onClick={addMenu}>
                Add Menu
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
          </div>
        )}

        {/* modal for update menu */}
        <div>
          <div
            className={`modal ${showUpdateModal ? "showww" : ""}`}
            style={{ display: showUpdateModal ? "block" : "none" }}
          >
            <div className="modal-header">
              <h4 className="tt">Update Menu</h4>
              <button
                type="button"
                className="close"
                onClick={closeupdate}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateMenu} className="frm">
                <div className="form-group">
                  <label htmlFor="updateCategorySelect">Select Menu:</label>
                  <select
                    id="updateCategorySelect"
                    className="form-control"
                    onChange={(e) => setSelectedMenu(e.target.value)}
                    value={selectedMenu || ""}
                    required
                  >
                    <option value="" disabled>
                      Select a Menu item
                    </option>
                    {MenuData.map((menu) => (
                      <option key={menu.id} value={menu.id}>
                        {menu.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="updateMenuName">New Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updateMenuName"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="updateMenuSubtitle">New Subtitle:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updateMenuSubtitle"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="updateMenuPrice">New Price:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="updateMenuPrice"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="Add">
                  Update Menu
                </button>
              </form>
            </div>
          </div>
        </div>




{/* Delete Category Modal */}
<div>
<div className={`modal ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div className="modal-header">
          <h4 className="tt">Delete Menu</h4>
          <button type="button" className="close" onClick={ closeDeleteModal}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="par">Are you sure you want to delete this category?</p><br></br>
          <div className="form-group">
      <label htmlFor="updateCategorySelect" className="cent">Select Menu:</label>
      <div className="sele">
      <select
        id="updateCategorySelect"
        className="form-control"
        onChange={(e) => setSelectedMenu(e.target.value)}
        value={selectedMenu || ''}
        required
      >
        <option value="" disabled>Select a menu</option>
        {MenuData.map((menu) => (
          <option key={menu.id} value={menu.id}>
            {menu.name}
          </option>
        ))}
      </select>
      </div>
    </div>
    <div className="btn2">
          <button onClick={handleDeleteMenu}>Delete</button>
          <button onClick={closeDeleteModal}>Cancel</button>
          </div>
        </div>
      </div>

</div>

{error && <div>Error fetching Menu</div>}
<div className="card-container">
        {MenuData.map((menu ,index) => (
          <div key={menu.id} className="card">

            
                {menu.image ? (
                  <img src={menu.image} alt={menu.name} className="card-image"  />
                ) : (
                  <img
                  className="card-image" 
                  src={imagess[index % imagess.length].src}
                
                    alt="Default"
                  />
                )}
              
              <div className="card-details">
                <h3 className="menu-name">{menu.name}</h3>
                <h3 className="menu-subtitle">{menu.subtitle}</h3>
                <h3 className="menu-price">Price: {menu.price}</h3>
                <div className="menu-actions">
            {checkIsInCart(menu) ? (
              <button
                className="rtyyy1"
                onClick={() => handleCrtpg(Cart)}
              >
                {" "}
                Go to cart
              </button>
            ) : (
              <button
                className="rtyyy1"
                onClick={() => handleCartclick(menu)}
              >
                {" "}
                Add to cart
              </button>
            )}
            </div>
              </div>
          
           
          </div>
        ))}
         </div> 
   </div>
    )}
   </>
  );
  
}
export default Getmenu;

{/*
import React, { useState, useEffect } from "react";

function Getmenu(){
    const [MenuData, setMenuData] = useState([]);
  const [error, seterror] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateMenuName, setUpdateMenuName] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [formData, setFormData] = useState({
    restaurantId: 1,
    categoryId: 2,
    name: "",
    subtitle: "",
    image: "",
    description: "",
    price: "",
    type: 0,
    isBestseller: 1,
    spicy: 1,
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    subtitle: "",
    price: "",
  });

 
  useEffect(() => {
    fetchinfo();
  }, []);

  async function fetchinfo() {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/restaurantMenu.php",
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
      if (response.ok && responseData.status === "success") {
        setMenuData(responseData.data);
        seterror(false);
      } else {
        seterror(true);
      }
    } catch (error) {
      console.error("Error fetching Categories", error);
      seterror(true);
    }
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      subtitle: "",
      price: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.subtitle.trim()) {
      errors.subtitle = "Subtitle is required";
      isValid = false;
    }

    if (!formData.price.trim()) {
      errors.price = "Price is required";
      isValid = false;
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      errors.price = "Price must be a valid positive number";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  async function addMenu() {
    if (validateForm()) {
      try {
        const response = await fetch(
          "http://polexsoft.com/restaurant/api/addMenu.php",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const responseData = await response.json();
        if (response.ok && responseData.status === "success") {
          // Menu added successfully, fetch updated menu
          fetchinfo();
          setIsModalOpen(false); // Close the modal
        } else {
          // Handle error
          console.error("Error adding menu", responseData.message);
        }
      } catch (error) {
        console.error("Error adding menu", error);
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleMenuSelection = (menuId) => {
    const selectedMenu = MenuData.find((menu) => menu.id === parseInt(menuId, 10));
    setFormData({
      Id: menuId,
      name: selectedMenu.name,
      subtitle: selectedMenu.subtitle,
      price: selectedMenu.price,
    });
  };

  



  const handleUpdateMenu = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateMenu.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            restaurantId: 1,
            menuId: selectedMenu, 
            name: updateMenuName, 
            subtitle: formData.subtitle, 
            price: formData.price,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
    
        fetchinfo();
  
      } else {
        console.error('Error updating category:', responseData.message);
      }
    } catch (error) {
      console.error("Error updating category", error);
    }
  };
  
  
  const openupdate = () => {
    setShowUpdateModal(true);
  };

 
  const closeupdate = () => {
    setShowUpdateModal(false);
  };



  

    return(
<>
<div>
  <div>
    <button  onClick={() => setIsModalOpen(true)}>Add Menu</button>
    <button onClick={()=> setShowUpdateModal(true)}> Update Menu</button>
  </div>

  {/*modal for add menu */}
  {/* Modal 
  {isModalOpen && (
        <div className="modal">
          <form>
            {/* Add form inputs for each field in formData 
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="error">{validationErrors.name}</span>
            <label>Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
            />
            <span className="error">{validationErrors.subtitle}</span>
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <span className="error">{validationErrors.price}</span>
          
            {/* Add other form inputs as needed 
            <button type="button" onClick={addMenu}>
              Add Menu
            </button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}




{/*modal for uopdate menu 
<div>
  <div className={`modal ${showUpdateModal ? 'show' : ''}`} style={{ display: showUpdateModal ? 'block' : 'none' }}>
        <div className="modal-header">
          <h4 className="tt">Update Menu</h4>
          <button type="button" className="close" onClick= {closeupdate}>&times;</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleUpdateMenu}>
          
    <div className="form-group">
      <label htmlFor="updateCategorySelect">Select Menu:</label>
      <select
        id="updateCategorySelect"
        className="form-control"
        onChange={(e) => setSelectedMenu(e.target.value)}
        value={selectedMenu || ''}
        required
      >
        <option value="" disabled>Select a Menu item</option>
        {MenuData.map((menu) => (
          <option key={menu.id} value={menu.id}>
            {menu.name}
          
          </option>
           
        ))}
      </select>
    </div>
            <div className="form-group">
              <label htmlFor="updateCategoryName">New Dish Name:</label>
              <input
                type="text"
                className="form-control"
                id="updateCategoryName"
                value={updateMenuName}
                onChange={(e) => setUpdateMenuName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="Add">Update Menu</button>
          </form>
        </div>
      </div>
      </div>







        {error && <div>Error fetching Menu</div>}
        {MenuData.map((menu) => (
          <div key={menu.id} className="ggg">
            <div className="newww" >
          
           <div className="klmmm">
            <div>
    
            {menu.image ? (
                  <img src={menu.image} alt={menu.name} className="cpppp"/>
                ) : (
                  <img  className="cpppp"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" alt="Default" />
                )}
                </div>
                <div className="ttt">
            <h3 className="xyzzz"> {menu.name}</h3>
            <h3 className="xyzzz"> {menu.subtitle}</h3>
            <h3 className="xyzzz"> Price:{menu.price}</h3>
            </div>
            </div>
          
            
          </div>
          </div>
        ))}
      </div>



</>

    );
};
export default Getmenu;
*/}