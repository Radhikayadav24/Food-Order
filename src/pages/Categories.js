import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "react-js-loader";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  
  const [categoriesData, setCategoriesData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [errorCategories, setErrorCategories] = useState(false);
  const [errorMenu, setErrorMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loading, setLoading] = useState(true); 
  const [updateCategoryName, setUpdateCategoryName] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const location = useLocation();
  const selectedTable = location.state?.selectedTable;
  const [Cart, setCart] = useState([]);
  const [refreshCartButton, setrefreshCartButton] = useState(true);

  useEffect(() => {
    let Carttemp = localStorage.getItem("Cart");
    console.log("Carttemp", Carttemp);
    if (Carttemp != null) {
      setCart(JSON.parse(Carttemp));
    }
    fetchCategories();
    fetchMenu();
  }, []);

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
    }finally {
      setLoading(false); // Set loading to false when the API call is completed
    }
  }

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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

  const openupdate = () => {
    setShowUpdateModal(true);
  };

  const closeupdate = () => {
    setShowUpdateModal(false);
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
        setShowDeleteModal(false);
      } else {
        console.error("Error deleting category:", responseData.message);
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

  const handleCrtpg = (Cart) => {
    navigate(`/Cart`, {
      state: { CartData: Cart },
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


  const imagess = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1yhf9991y6QVrSvHvWD3jFDL-rKe5zeSug&usqp=CAU",
    
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr9zmkPWtmW_J3OoTfKD7_dg6L-jIq9ZOoA&usqp=CAU",

      
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpRXfCH8bjolJfMDfFn511GhRBHjJvgsf2g&usqp=CAU",

    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjNg93RopRN2uBocADtVi__zGdT3svvrk4A&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxl6KqVNYJlxDw1T_iuS0rowsAhzu-vTfcw&usqp=CAU",

    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyWiKWdxoosBOk35PpE6u4lB1CXdZsfWb9A&usqp=CAU",

    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gv2DXCGc1_dS_KIv_jzdMd9ivJkiJ0zWMQ&usqp=CAU",

      
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvGd9RC-sXbNLzqnA2w6b22SHcSL0it-Ktw&usqp=CAU",

      
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_HXwTtOOen4bSCupK5Zs7IKWMxKlBEbvWw&usqp=CAU",

 
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCurUew4WmwKKI3wcVTHb5Joi3VjpIGYiBEg&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQOIsiXWTTnwbZ0RpJsG3gpWltcSCfZFoFA&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCQnIZXj66XW7ZTg-ZpVCcVlvvgtD-owKhw&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Qu_wfTs7ls7dAFe46IJrv5949bBU3HtGkQ&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKvxTIU0rt7NlCdIYVrpm9VB8rZMSWAJN_Vv3Kik5urbqvqfEM3KTEUi70xXssgLHpys&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXz0BEUHLpcrZzl5hmNdVYD-uLWYAl7co3qQ&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBLWgHZJbOjSxcJRqETW5b-7Y_oEy7BGblQ&usqp=CAU",

   
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmpASRLqnRuaSTqQDfg1W-LcPV9U_0p0urA&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhWS_wThYI1XCRQZgpO3eEsTyBrGnC6zilA&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWFVMGgQm_xEOFDEZ3qleLMBwirvjC2z-1w&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MNVtq35O8l2WqVDFkrz4LhHu-EII6stDPTiAYTWyEm3jB8AQT2OJ-bQdo4raM3FiOnQ&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0cvbwkOJqVJJmZdKf4j07c5FJUPNTsRlhw&usqp=CAU",

   
    },

    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCurUew4WmwKKI3wcVTHb5Joi3VjpIGYiBEg&usqp=CAU",

   
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNKofLhaOPYDXil9VkNdOh7_IjQl1Auk2RjODIbwIwcbZVkjkkIeqOBeQFNRal1hjp7k&usqp=CAU",

 
    },
  ];

  return (
    <div>
       {loading ? (
      <div className="loader-container">
        <Loader type="spinner-circle" bgColor="#fc8019" color="#fc8019"  size={100} />
      </div>
    ) : (
      <div className="ql">
        <div className="cate">
          <h1>Choose Your Meal</h1>
        </div>

        {/* Display DATAA booked tble  */}
        {selectedTable && (
          <div className="tbl">
            <h2>Booked Table </h2>
            <p>
              <b>ID: </b>
              {selectedTable.id}
            </p>
            <p>
              <b>Table No:</b> {selectedTable.tableNo}
            </p>
            <p>
              <b>Seating Capacity: </b>
              {selectedTable.seatingCapacity}
            </p>
          </div>
        )}
        <div className="mmc">
          <div className="main">
            <div className="cng">
              {errorCategories && <div>Error fetching categories</div>}
              <div className="ss">
                {categoriesData.map((Category) => (
                  <div className="mm">
                    <div key={Category.id} className="cct">
                      <div className="b1">
                        <button
                          className={`pqr ${
                            selectedCategory === Category.id && "selected"
                          }`}
                          onClick={() => handleCategoryClick(Category.id)}
                        >
                          {Category.categoryName}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/*}
          <div className="aud">
            <button onClick={openModal}>Add category</button>
            <button onClick={openupdate}> Update Category</button>
            <button onClick={openDeleteModal}> Delete Category</button>
          </div>
                        */}
          {/* Add Category Modal */}
          <div
            className={`modal ${showModal ? "show" : ""}`}
            style={{ display: showModal ? "block" : "none" }}
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
        </div>
        {/*modal for uopdate cate */}
        <div>
          <div
            className={`modal ${showUpdateModal? "show" : ""}`}
            style={{ display: showUpdateModal ? "block" : "none" }}
          >
            <div className="modal-header">
              <h4 className="tt">Update Category</h4>
              <button type="button" className="close" onClick={closeupdate}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateCategory}>
                <div className="form-group">
                  <label htmlFor="updateCategorySelect">Select Category:</label>
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
                  <label htmlFor="updateCategoryName">New Category Name:</label>
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
        </div>

        {/* Delete Category Modal */}
        <div>
          <div
            className={`modal ${showDeleteModal ? "show" : ""}`}
            style={{ display: showDeleteModal ? "block" : "none" }}
          >
            <div className="modal-header">
              <h4 className="tt">Delete Category</h4>
              <button
                type="button"
                className="close"
                onClick={closeDeleteModal}
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
                <button onClick={closeDeleteModal}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {errorMenu && <div>Error fetching Menu</div>}
          <div className="card-container">
          {menuData
            .filter(
              (menu) =>
                selectedCategory === null ||
                menu.categoryId === selectedCategory
            )
            .map((menu ,index) => (
              <div key={menu.id}
              className="card">
              
                 
                          {menu.image ? (
                            <img
                              src={menu.image}
                              alt={menu.name}
                              className="card-image" 
                            />
                          ) : (
                            <img
                            className="card-image" 
                             src={imagess[index % imagess.length].src}

                            
                            
                            
                              alt="Default"
                            />
                          )}
                       
                       <div className="card-details">
                      
                          <h3 className="card-name"> {menu.name}</h3>
                          <p className="card-address"> {menu.subtitle}</p>
                          <p className="card-address"> Price:{menu.price}</p>
                          {checkIsInCart(menu) == true && refreshCartButton && (
                          <button
                            className="rty"
                            onClick={() => handleCrtpg(Cart)}
                          >
                            {" "}
                            Go to cart
                          </button>
                        )}
                        {checkIsInCart(menu) == false && refreshCartButton && (
                          <button
                            className="rty"
                            onClick={() => handleCartclick(menu)}
                          >
                            {" "}
                            Add to cart
                          </button>
                        )}
                         

                        </div>
                       

                        {/* <button className="rty"  onClick={() => handleMenudata(menu)} > Add to cart</button> */}
                      </div>
                   
            ))}
        </div>
      </div>
      </div>
    )}
    </div>
  );
};

export default Categories;

/*import React, { useState, useEffect } from "react";
import Getmenu from "./Getmenu";

 

const Categories = () => {
 
  const [categoriesData, setCategoriesData] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    fetchinfo();
  }, []);

  async function fetchinfo() {
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
        seterror(false);
      } else {
        seterror(true);
      }
    } catch (error) {
      console.error("Error fetching Categories", error);
      seterror(true);
    }
  }
  

  {

  }

  return (
    <div>
      <div className="cate">
        <h1>Choose Your Meal</h1>
      </div>

     
      <div>
        {error && <div>Error fetching categories</div>}
        <div className="ss">
        {categoriesData.map((Category) => (
          <div key={Category.id}>
            <button className="pqr"  >{Category.categoryName}</button>
          </div>
       
        ))}
      </div>
      </div>
      <Getmenu/>
      <div>
        <button
          className="siya"
          onClick={() => {
            fetchinfo();
          }}
        >
          submit
        </button>
      </div>
    </div>
    /*
<div>
<div>
    {error && <div>Error fetching categories</div>}
  {categoriesData.map((Category)=>(
    <div>
      <button className="pqr" key={Category.id}>
      {Category.categoryName}
  </button>
  </div>
  ))}
   </div>

   
  
  );
};
export default Categories;
*/
