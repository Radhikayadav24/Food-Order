import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { ClickAwayListener } from '@mui/base';
import Shoppingcart from "../assets/shopping.png"

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [MenuData, setMenuData] = useState([]);
  const [error, seterror] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showUpdateModall, setShowUpdateModall] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteModal1, setShowDeleteModal1] = useState(false);
  const [showDeleteModal2, setShowDeleteModal2] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoriesData, setCategoriesData] = useState([]);
  const [updateCategoryName, setUpdateCategoryName] = useState("");
  const [errorCategories, setErrorCategories] = useState(false);
  const [errorMenu, setErrorMenu] = useState(false);
  const [showUpdateMenuModal, setShowUpdateMenuModal] = useState(false);
  const [CartData, setCartData] = useState(null);
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    subtitle: "",
    price: "",
  });

  useEffect(() => {
    fetchinfo();
    fetchCategories();
    fetchMenu();
  }, []);

  async function fetchMenu() {
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
        setErrorMenu(false);
      } else {
        setErrorMenu(true);
      }
    } catch (error) {
      console.error("Error fetching Menu", error);
      setErrorMenu(true);
    }
  }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleclicklog = () => {
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
    setShowMenu(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openupdate = () => {
    setShowUpdateModal(true);
  };

  const closeupdate = () => {
    setShowUpdateModal(false);
  };

  const openDeleteModal2 = () => {
    setShowDeleteModal2(true);
  };

  const closeDeleteModal2 = () => {
    setShowDeleteModal2(false);
  };

  const openDeleteModall = () => {
    setShowDeleteModal1(true);
  };

  const closeDeleteModall = () => {
    setShowDeleteModal1(false);
  };

  //function for add menu
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

  //function for update menu
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

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/addCategory.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            restaurantId: 1,
            categoryName: newCategoryName,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        // Refresh the categories after adding a new one
        fetchCategories();
        closeModal();
      } else {
        console.error("Error adding category:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/updateCategory.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            restaurantId: 1,
            categoryName: updateCategoryName,
            categoryId: selectedCategory,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        fetchCategories();
      } else {
        console.error("Error updating category:", responseData.message);
      }
    } catch (error) {
      console.error("Error updating category", error);
    }
  };

  async function fetchCategories() {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/restaurantCategory.php",
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
        setCategoriesData(responseData.data);
        setErrorCategories(false);
      } else {
        setErrorCategories(true);
      }
    } catch (error) {
      console.error("Error fetching Categories", error);
      setErrorCategories(true);
    }
  }

  const openUpdateCategoryModal = () => {
    setShowUpdateCategoryModal(true);
  };

  const closeUpdateCategoryModal = () => {
    setShowUpdateCategoryModal(false);
  };

  // Function to handle category deletion
  const handleDeleteCategory = async () => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/deleteCategory.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            restaurantId: 1,
            categoryId: selectedCategory,
          }),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        // Refresh the categories after deletion
        fetchCategories();
        setShowDeleteModal2(false);
      } else {
        console.error("Error deleting category:", responseData.message);
      }
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  // Function to handle category deletion
  const handleDeleteMenu = async () => {
    try {
      const response = await fetch(
        "http://polexsoft.com/restaurant/api/deleteMenu.php",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ restaurantId: "1", menuId: selectedMenu }),
        }
      );
      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        // Refresh the menu after deletion
        fetchinfo();
        setShowDeleteModal1(false);
      } else {
        console.error("Error deleting category:", responseData.message);
      }
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnMobile);
    return () => {
      window.removeEventListener("resize", closeMenuOnMobile);
    };
  }, []);



  return (
    <div className="min">
      <div>
        <div data-testid="SWIGGY_HEADER_ICON" className="mainHeaderInnerDiv">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="foodimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcHcIPw0Lqs6UhHuwOcn7UbdWIryjmwETOg&usqp=CAU"
            ></img>
          </div>

          <div className="navbar">
            <div className="nav__toggle" onClick={toggleMenu}>
              {showMenu ? <IoClose /> : <IoMenu />}
            </div>
            {showMenu && (
              <div className="mobile-menu">
                <ul>
                  <li
                    onClick={() => {
                      navigate("/");
                      setShowMenu(false);
                    }}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      navigate("/Categories");
                      setShowMenu(false);
                    }}
                  >
                    Food Category
                  </li>
                  <li
                    onClick={() => {
                      navigate("/Getmenu");
                      setShowMenu(false);
                    }}
                  >
                    Menu
                  </li>
                  <li
                    onClick={() => {
                      navigate("/Cart");
                      setShowMenu(false);
                    }}
                  >
                            <img src={Shoppingcart} style={{width:20,height:20}}></img>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/About");
                      setShowMenu(false);
                    }}
                  >
                    About
                  </li>
                  <button className="log" onClick={handleclicklog}>
                    {isLoggedIn ? "Logout" : "Login"}
                  </button>

                  <div className="dropdown-container">
                    {isLoggedIn && (
                      <button className="log" onClick={toggleDropdown}>
                        Profile <i className="fa fa-caret-down"></i>
                      </button>
                    )}
                    {isLoggedIn && isDropdownOpen && (
                      <div className="dropdown-content">
                        <button onClick={() => setIsModalOpen(true)}>
                          Add Menu
                        </button>
                        <button onClick={openupdate}>Update Menu</button>
                        <button onClick={openDeleteModall}>Delete Menu</button>
                        <button onClick={openModal}>Add category</button>
                        <button onClick={openUpdateCategoryModal}>
                          {" "}
                          Update Category
                        </button>
                        <button onClick={openDeleteModal2}>
                          {" "}
                          Delete Category
                        </button>
                        <button onClick={handleAddOrder}>Add Order</button>
                        <button onClick={() => navigate("/ViewOrder")}>
                          View Order
                        </button>
                        <button onClick={() => navigate("/UpdateOrder")}>
                          Update Order
                        </button>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
            )}
          </div>
          <div className="btnn">
            <div>
              <button
                className="log"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>

              <button
                className="log"
                onClick={() => {
                  navigate("/Categories");
                }}
              >
                {" "}
                Food Category{" "}
              </button>
              <button
                className="log"
                onClick={() => {
                  navigate("/Getmenu");
                }}
              >
                {" "}
                Menu{" "}
              </button>
             

              <button
                className="log"
                onClick={() => {
                  navigate("/About");
                }}
              >
                About
              </button>
              <button className="log" onClick={handleclicklog}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>

              <div className="dropdown-container">
                {isLoggedIn && (
                  <button className="log" onClick={toggleDropdown}>
                    Profile <i className="fa fa-caret-down"></i>
                  </button>
                )}
                {isLoggedIn && isDropdownOpen && (
                  <div className="dropdown-content">
                    <button onClick={() => setIsModalOpen(true)}>
                      Add Menu
                    </button>
                    <button onClick={openupdate}>Update Menu</button>
                    <button onClick={openDeleteModall}>Delete Menu</button>
                    <button onClick={openModal}>Add category</button>
                    <button onClick={openUpdateCategoryModal}>
                      {" "}
                      Update Category
                    </button>
                    <button onClick={openDeleteModal2}> Delete Category</button>
                    <button onClick={handleAddOrder}>Add Order</button>
                    <button onClick={() => navigate("/ViewOrder")}>
                      View Order
                    </button>
                    <button onClick={() => navigate("/UpdateOrder")}>
                      Update Order
                    </button>
                  </div>
                )}
              </div>
              <button
                className="log"
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                <img src={Shoppingcart} style={{width:20,height:20}}></img>
              </button>
            </div>



          
          </div>

 {/* modal for Add menu */}

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
          <ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
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
          </ClickAwayListener>

        </div>
 
        
      )}
     
     


            {/* modal for update menu */}
            {showUpdateModal && (
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
            }}>
              <ClickAwayListener onClickAway={() => setShowUpdateModal(false)}>
              <div
                className={`modal ${showUpdateModal ? "showww" : ""}`}
              >
                <div className="modal-header">
                  <h4 className="tt">Update Menu</h4>
                  <button type="button" className="close" onClick={closeupdate}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleUpdateMenu} className="frm">
                    <div className="form-group">
                      <label htmlFor="updateCategorySelect" className="sm">Select Menu:</label>
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
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, subtitle: e.target.value })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        required
                      />
                    </div>
                    <button type="submit" className="Add">
                      Update Menu
                    </button>
                  </form>
                </div>
               
              </div>
              </ClickAwayListener>
            </div>
            )}

           


            {/* Delete menu Modal */}
            {showDeleteModal1 && (
            <div  style={{
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
            }}>
                       <ClickAwayListener onClickAway={() => setShowDeleteModal1(false)}>
              <div
                className={`modal ${showDeleteModal1 ? "show" : ""}`}
          
              >
                <div className="modal-header">
                  <h4 className="tt">Delete Menu</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={closeDeleteModall}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p className="par">
                    Are you sure you want to delete this menu?
                  </p>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="updateCategorySelect" className="cent">
                      Select Menu:
                    </label>
                    <div className="sele">
                      <select
                        id="updateCategorySelect"
                        className="form-control"
                        onChange={(e) => setSelectedMenu(e.target.value)}
                        value={selectedMenu || ""}
                        required
                      >
                        <option value="" disabled>
                          Select a menu
                        </option>
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
                    <button onClick={closeDeleteModall}>Cancel</button>
                  </div>
                </div>
              </div>
              </ClickAwayListener>
            </div>
            )}




            {/* Add Category Modal */}
            {showModal && (
            <div  style={{
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
            }}>
                 <ClickAwayListener onClickAway={() => setShowModal(false)}>
            <div
              className={`modal ${showModal ? "show" : ""}`}
        
            >
              <div className="modal-header">
                <h4 className="tt">Add Category</h4>
                <button type="button" className="close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddCategory}>
                  <div className="form-group">
                    <label htmlFor="newCategoryName">Category Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="newCategoryName"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="Add">
                    Add Category
                  </button>
                </form>
              </div>
            </div>
            </ClickAwayListener>
            </div>
            )}


            {/*modal for update cate */}
            {showUpdateCategoryModal && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex:9}}
            >
                 <ClickAwayListener onClickAway={() => setShowUpdateCategoryModal(false)}>
              <div
                className={`modal ${showUpdateCategoryModal ? "show" : ""}`}
                style={{ display: showUpdateCategoryModal ? "block" : "none" }}
              >
                   
                <div className="modal-header">
            
                  <h4 className="tt">Update Category</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={closeUpdateCategoryModal}
                  >
                    &times;
                  </button>

                </div>
                <div className="modal-body" >
                  <form onSubmit={handleUpdateCategory}>
                    <div className="form-group">
                      <label htmlFor="updateCategorySelect">
                        Select Category:
                      </label>
                      <select
                        id="updateCategorySelect"
                        className="form-control"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory || ""}
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categoriesData.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="updateCategoryName">
                        New Category Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="updateCategoryName"
                        value={updateCategoryName}
                        onChange={(e) => setUpdateCategoryName(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="Add">
                      Update Category
                    </button>
                  </form>
                </div>
              </div>
              </ClickAwayListener>
            </div>
            )}
            {/* Delete Category Modal */}
            {showDeleteModal2 && (
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
                   <ClickAwayListener onClickAway={() =>setShowDeleteModal2(false)}>
              <div
                className={`modal ${showDeleteModal2 ? "show" : ""}`}
                style={{ display: showDeleteModal2 ? "block" : "none" }}
              >
                <div className="modal-header">
                  <h4 className="tt">Delete Category</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={closeDeleteModal2}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p className="par">
                    Are you sure you want to delete this category?
                  </p>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="updateCategorySelect" className="cent">
                      Select Category:
                    </label>
                    <div className="sele">
                      <select
                        id="updateCategorySelect"
                        className="form-control"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory || ""}
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categoriesData.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="btn2">
                    <button onClick={handleDeleteCategory}>Delete</button>
                    <button onClick={closeDeleteModal2}>Cancel</button>
                  </div>
                </div>
              </div>
              </ClickAwayListener>
            </div>
            )}


        </div>
      </div>

      
    </div>
  );
}
export default Navbar;
