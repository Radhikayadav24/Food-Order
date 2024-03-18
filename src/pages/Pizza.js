import React from "react";
import StarIcon from "../assets/star.png";
import FilterIcon from "../assets/settings-sliders.png";
import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/base";

import DropdownIcon from "../assets/down-arrow.png";
function Pizza() {
  const [showModal, setShowModal] = useState(false);
  const [isPureVegFilterActive, setIsPureVegFilterActive] = useState(false);
  const [filterValue, setFilterValue] = useState(1);
  const [sortType1, setSortType1] = useState(false);
  const [sortType2, setSortType2] = useState(false);
  const [sortType3, setSortType3] = useState(false);
  const [sortType4, setSortType4] = useState(false);
  const [sortType5, setSortType5] = useState(false);
  const [isVegFilterActive, setVegFilterActive] = useState(false);
  const [isNonVegFilterActive, setNonVegFilterActive] = useState(false);

  const [isLessThan30MinsFilterActive, setIsLessThan30MinsFilterActive] =
    useState(false);
  const [isLessThan45MinsFilterActive, setIsLessThan45MinsFilterActive] =
    useState(false);
  const [isPrice300To600FilterActive, setIsPrice300To600FilterActive] =
    useState(false);
    const [isPriceLessThan300FilterActive, setIsPriceLessThan300FilterActive] =
    useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleFilterButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsDropdownOpen(false);
  };

  const [Cards, setCards] = useState([
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-QOETAw_2smnhPtCqsh8A1KTeBnpYEBTQ&usqp=CAU",
      name: "Cheese Pizza. ",
      Address: "  South Tukoganj",
      foodcategory: "Pure Veg ",
      Price: "250",
      Rating: "4.5 •",
      Time: "25-30 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlISaIf36_nPszqzVv7uOVyIzg-M5xqb4a0A&usqp=CAU",

      name: "Meat Pizza. ",
      Address: "  old palasia",
      foodcategory: "Non-Veg ",
      Price: "350",
      Rating: "4 •",
      Time: "30-45 mins",
    },
    {
      src: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaL5RHcK_uaMwPjJLi-KIoSQlCKd38eXxBzg&usqp=CAU",
      name: " Large Pizzas. ",
      Address: "  South Tukoganj",
      foodcategory: "Pure Veg ",
      Price: "900",
      Rating: "4.5 •",
      Time: "25-30 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOwj-9B9lOBTsPvHVFusqiAhHrvIlSB1dHg&usqp=CAU",
      name: "Cheese Pizza. ",
      Address: "  La Pina's PiZZa ",
      foodcategory: "Pure Veg ",
      Price: "600",
      Rating: "4.5 •",
      Time: "60 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIVTfTUulYU6FVcWkFzK3oRQ4RhPH2-nqrA&usqp=CAU",

      name: "Veggie Pizza ",
      Address: "  Old Palasia",
      foodcategory: "Pure Veg ",
      Price: "150",
      Rating: "4.2 •",
      Time: "20-30 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStK-M23NCWUZ50kQKGjA7YNPPGYVRiF79oIA&usqp=CAU",

      name: "Pepperoni Pizza ",
      Address: " Bomby Hospital",
      foodcategory: "Pure Veg ",
      Price: "250",
      Rating: "4.2 •",
      Time: "20-30 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlISaIf36_nPszqzVv7uOVyIzg-M5xqb4a0A&usqp=CAU",

      name: "Meat Pizza. ",
      Address: "  old palasia",
      foodcategory: "Non-Veg ",
      Price: "350",
      Rating: "4 •",
      Time: "30-45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gNuIAb__tptA0QHpxisWbSc46w7k4phPLA&usqp=CAU",

      name: "Margherita Pizza.",
      Address: " Baikunth Dham ",
      foodcategory: "Pure Veg ",
      Price: "250",
      Rating: "3.5 •",
      Time: "30-45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzP5iRP9I_HR7QyrUQvnU6fkTTryjzXxqzA&usqp=CAU",
      name: "BBQ Chicken Pizza. ",
      Address: " Sapna Sangeeta mall",
      foodcategory: "Non-Veg ",
      Price: "450",
      Rating: "3.5 •",
      Time: "30-45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ2J0PemTBsfpVnsEJX6dYsPY4hYRUWc-Ng&usqp=CAU",

      name: "KFC Pizza ",
      Address: "  South Tukoganj",
      foodcategory: "Non-Veg ",
      Price: "350",
      Rating: "5 •",
      Time: "45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHRqpQ6I3PUyplWnlYSHAg7Mwfh0NGTLzxR7Be6aQ5tZz8k50Le2cgy6mOe4-CV7ustU&usqp=CAU",

      name: "farmhouse Pizza ",
      Address: "  Khajarana",
      foodcategory: "Pure Veg ",
      Price: "250",
      Rating: "5 •",
      Time: "30-45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi23Ug8hUqAjIQSCpAITPZPmnsubBcKLHlqg&usqp=CAU",

      name: "Tomato Pizza ",
      Address: "New palasia ",
      foodcategory: "Pure Veg ",
      Price: "150",
      Rating: "4 •",
      Time: "30 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuDObx-vOa9S0z4ektGiLLJ-BDzjXZ6LczQ&usqp=CAU",
      name: "Double CHesse PIzza",
      Address: " Vijay Nagar",
      foodcategory: "Pure Veg ",
      Price: "250",
      Rating: "5 •",
      Time: "30-45 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-Lx--o13IIniw9GqqhVX4--UH7lYLuqdEw&usqp=CAU",
      name: "Double CHesse PIzza",
      Address: " Vijay Nagar",
      foodcategory: "Pure Veg ",
      Price: "350",
      Rating: "5 •",
      Time: "20 mins",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7Z4T0NZzW1dg9_-E-xTxZqoFKEYyzeE40w&usqp=CAU",
      name: "Double CHesse FormHouse PIzza",
      Address: " MR10",
      foodcategory: "Pure Veg ",
      Price: "550",
      Rating: "5 •",
      Time: "20 mins",
    },
  ]);

  const handlePureVegButtonClick = () => {
    setIsPureVegFilterActive(!isPureVegFilterActive);
    // setShowModal(false); // Close the modal after applying the filter
  };

  // Filter the cards based on the isPureVegFilterActive state
  // const filteredCards = isPureVegFilterActive
  //   ? Cards.filter((card) => card.foodcategory.trim()=== "Pure Veg")
  //   : Cards;

  // Filter the cards based on the filter states
  const filteredCards = Cards.filter((card) => {
    if (isPureVegFilterActive && card.foodcategory.trim() !== "Pure Veg") {
      return false;
    }
    if (
      isLessThan30MinsFilterActive &&
      parseInt(card.Time.split("-")[0]) >= 30
    ) {
      return false;
    }
    if (
      isPrice300To600FilterActive &&
      (parseInt(card.Price) < 300 || parseInt(card.Price) > 600)
    ) {
      return false;
    }
    return true;
  });

  const handleLessThan30MinsButtonClick = () => {
    setIsLessThan30MinsFilterActive(!isLessThan30MinsFilterActive);
    setShowModal(false);
  };

  const handleLessThan45MinsButtonClick = () => {
    setIsLessThan45MinsFilterActive(!isLessThan45MinsFilterActive);
    setShowModal(false);
  };

  const handlePrice300To600ButtonClick = () => {
    setIsPrice300To600FilterActive(!isPrice300To600FilterActive);
    setShowModal(false);
  };

  const handlePriceLessThan300ButtonClick = () => {
    setIsPriceLessThan300FilterActive(!isPriceLessThan300FilterActive);
    setShowModal(false);
  };

  function filterByCat() {
    let tempCards = [...Cards];
    console.log("Cards", tempCards);
    let sortedData = tempCards;

    if (sortType1) {
      sortedData = tempCards;
    }
    if (sortType2) {
      sortedData = tempCards.sort(
        (a, b) =>
          parseInt(a.Time.split("-")[0]) - parseInt(b.Time.split("-")[0])
      );
      console.log("tempCards", sortedData);
    }
    if (sortType3) {
      sortedData = tempCards.sort(
        (a, b) => parseFloat(b.Rating) - parseFloat(a.Rating)
      );
      console.log("tempCards", sortedData);
    }
    if (sortType4) {
      sortedData = tempCards.sort(
        (a, b) => parseInt(a.Price) - parseInt(b.Price)
      );
      console.log("tempCards", sortedData);
    }
    if (sortType5) {
      sortedData = tempCards.sort(
        (a, b) => parseInt(b.Price) - parseInt(a.Price)
      );

      console.log("tempCards", sortedData);
    }
    console.log("sortedData", sortedData);

    setCards(sortedData);
  }

  // function for Veg filter
  const handleVegFilterChange = (isChecked) => {
    console.log("isVegFilterActive", isChecked);
    setVegFilterActive(isChecked);
  };

  //  function for Non-Veg filter
  const handleNonVegFilterChange = (isChecked) => {
    setNonVegFilterActive(isChecked);
  };

  // Apply filtering based on Veg and Non-Veg checkbox states
  const filteredVegNonVegCards = Cards.filter((card) => {
    if (isVegFilterActive && !isNonVegFilterActive) {
      return card.foodcategory === "Pure Veg";
    } else if (!isVegFilterActive && isNonVegFilterActive) {
      return card.foodcategory === "Non-Veg";
    } else {
      return true;
    }
  });

  return (
    <>
      <div className="mmm">
        <h1 className="pizza">Pizza</h1>
        <p className="parap">
          Cheesilicious pizzas to make every day extraordinary.
        </p>
        <div className="btnp">
          <button
            className={`pizzavbtn ${showModal ? "pizzavbtnactive" : ""}`}
            onClick={handleFilterButtonClick}
          >
            Filter <img className="filter" src={FilterIcon}></img>
          </button>

          <button
            className={`pizzavbtn ${isDropdownOpen ? "pizzavbtnactive" : ""}`}
            onClick={toggleDropdown}
          >
            Sort By<img className="Sortbtn" src={DropdownIcon} alt="Sort"></img>
          </button>
          {isDropdownOpen && (
            <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
              <div className="dropdownContent">
                <div className="Rele">
                  <div className="ppq">
                    <label style={{ display: "flex", gap: "20px" }}>
                      <input
                        type="radio"
                        name="sortOption"
                        checked={sortType1}
                        onChange={() => {
                          setSortType1(true);
                          setSortType2(false);
                          setSortType3(false);
                          setSortType4(false);
                          setSortType5(false);
                          filterByCat();
                        }}
                      />
                      Relevance (Default)
                    </label>
                  </div>
                  <div className="ppq">
                    <label style={{ display: "flex", gap: "20px" }}>
                      <input
                        type="radio"
                        name="sortOption"
                        checked={sortType2}
                        onChange={() => {
                          setSortType1(false);
                          setSortType2(true);
                          setSortType3(false);
                          setSortType4(false);
                          setSortType5(false);
                          filterByCat();
                        }}
                      />
                      Delivery Time
                    </label>
                  </div>
                  <div className="ppq">
                    <label style={{ display: "flex", gap: "20px" }}>
                      <input
                        type="radio"
                        name="sortOption"
                        checked={sortType3}
                        onChange={() => {
                          setSortType1(false);
                          setSortType2(false);
                          setSortType3(true);
                          setSortType4(false);
                          setSortType5(false);
                          filterByCat();
                        }}
                      />
                      Rating
                    </label>
                  </div>
                  <div className="ppq">
                    <label style={{ display: "flex", gap: "20px" }}>
                      <input
                        type="radio"
                        name="sortOption"
                        checked={sortType4}
                        onChange={() => {
                          setSortType1(false);
                          setSortType2(false);
                          setSortType3(false);
                          setSortType4(true);
                          setSortType5(false);
                          filterByCat();
                        }}
                      />
                      Cost: Low to High
                    </label>
                  </div>
                  <div className="ppq">
                    <label style={{ display: "flex", gap: "20px" }}>
                      <input
                        type="radio"
                        name="sortOption"
                        checked={sortType5}
                        onChange={() => {
                          setSortType1(false);
                          setSortType2(false);
                          setSortType3(false);
                          setSortType4(false);
                          setSortType5(true);
                          filterByCat();
                        }}
                      />
                      Cost: High to Low
                    </label>
                  </div>
                  <button
                    style={{ Width: "205px", borderRadius: "9px" }}
                    onClick={() => {
                      filterByCat();
                      handleCloseModal();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </ClickAwayListener>
          )}
          <button
            className={`pizzavbtn ${
              isPureVegFilterActive ? "pizzavbtnactive" : ""
            }`}
            onClick={handlePureVegButtonClick}
          >
            Pure Veg
          </button>
          <button
            className={`pizzavbtn ${
              isLessThan30MinsFilterActive ? "pizzavbtnactive" : ""
            }`}
            onClick={handleLessThan30MinsButtonClick}
          >
            Less than 30 mins
          </button>
          <button
            className={`pizzavbtn ${
              isPrice300To600FilterActive ? "pizzavbtnactive" : ""
            }`}
            onClick={handlePrice300To600ButtonClick}
          >
            Rs. 300-600
          </button>
        </div>

        <div className="ex">
          <h2>Restaurants to explore </h2>
        </div>
        <div className="card-container">
          {filteredCards.map((card, index) => (
            <>
              {((isVegFilterActive && card.foodcategory == "Pure Veg ") ||
                (isNonVegFilterActive && card.foodcategory == "Non-Veg ") ||
                (!isVegFilterActive && !isNonVegFilterActive)) && (
                  
                  (!isLessThan45MinsFilterActive || (parseInt(card.Time) < 45)) &&
                  (!isPriceLessThan300FilterActive || (parseFloat(card.Price) < 300)) &&
                <div key={index} className="card">
                  <img className="card-image" src={card.src} alt={card.alt} />
                  <div className="card-details">
                    <h3 className="card-address">{card.Address}</h3>
                    <p className="card-name">{card.name}</p>

                    <p className="card-Price">{card.Price}</p>
                    <p className="card-foodcategory">{card.foodcategory}</p>
                    <div className="Rt">
                      <img
                        src={StarIcon}
                        style={{ width: 20, height: 20 }}
                      ></img>
                      <p className="card-Rating">{card.Rating}</p>
                      <p className="card-Time">{card.Time}</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}

          {/*model for Filter*/}
          {showModal && (
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
                zIndex: 9,
              }}
            >
              <ClickAwayListener onClickAway={() => setShowModal(false)}>
                <div>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  <div className="modal" style={{ minWidth: 600 }}>
                    <h3 className="fff">Filter</h3>
                    <div className="filterConatiner">
                      <div className="filterall">
                        <button
                          className={
                            filterValue == 1
                              ? "Svndc filterBtnActive"
                              : "Svndc filterBtn"
                          }
                          onClick={() => {
                            setFilterValue(1);
                          }}
                        >
                          Sort
                        </button>
                        <button
                          className={
                            filterValue == 2
                              ? "Svndc filterBtnActive"
                              : "Svndc filterBtn"
                          }
                          onClick={() => {
                            setFilterValue(2);
                          }}
                        >
                          Veg/Non-Veg
                        </button>
                        <button
                          className={
                            filterValue == 3
                              ? "Svndc filterBtnActive"
                              : "Svndc filterBtn"
                          }
                          onClick={() => {
                            setFilterValue(3);
                          }}
                        >
                          Delivery Time{" "}
                        </button>
                        <button
                          className={
                            filterValue == 4
                              ? "Svndc filterBtnActive"
                              : "Svndc filterBtn"
                          }
                          onClick={() => {
                            setFilterValue(4);
                          }}
                        >
                          Cost For Two{" "}
                        </button>
                      </div>

                      <div style={{ padding: "8px 0px" }}>
                        {filterValue === 1 && (
                          <div>
                            <div className="ghjk">SORT BY</div>
                            <div className="Rele">
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    name="sortOption"
                                    checked={sortType1}
                                    onChange={() => {
                                      setSortType1(true);
                                      setSortType2(false);
                                      setSortType3(false);
                                      setSortType4(false);
                                      setSortType5(false);
                                      filterByCat();
                                    }}
                                  />
                                  Relevance (Default)
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    name="sortOption"
                                    checked={sortType2}
                                    onChange={() => {
                                      setSortType1(false);
                                      setSortType2(true);
                                      setSortType3(false);
                                      setSortType4(false);
                                      setSortType5(false);
                                      filterByCat();
                                    }}
                                  />
                                  Delivery Time
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    name="sortOption"
                                    checked={sortType3}
                                    onChange={() => {
                                      setSortType1(false);
                                      setSortType2(false);
                                      setSortType3(true);
                                      setSortType4(false);
                                      setSortType5(false);
                                      filterByCat();
                                    }}
                                  />
                                  Rating
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    name="sortOption"
                                    checked={sortType4}
                                    onChange={() => {
                                      setSortType1(false);
                                      setSortType2(false);
                                      setSortType3(false);
                                      setSortType4(true);
                                      setSortType5(false);
                                      filterByCat();
                                    }}
                                  />
                                  Cost: Low to High
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    name="sortOption"
                                    checked={sortType5}
                                    onChange={() => {
                                      setSortType1(false);
                                      setSortType2(false);
                                      setSortType3(false);
                                      setSortType4(false);
                                      setSortType5(true);
                                      filterByCat();
                                    }}
                                  />
                                  Cost: High to Low
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* {filterValue == 1 && (
                          <div>
                            <div className="ghjk">SORT BY</div>
                            <div className="Rele">
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="radio"
                                    checked={sortType1}
                                    onChange={(e) => {
                                        setSortType1(e.target.checked);
                                       }}
                                  ></input>
                                  Relevance (Default)
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input type="radio"
                                   checked={sortType2}
                                   onChange={(e) => {
                                       setSortType2(e.target.checked);
                                      }}
                                  ></input>
                                  Delivery Time
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input type="radio"      checked={sortType3}
                                   onChange={(e) => {
                                       setSortType3(e.target.checked);
                                      }}></input>
                                  Rating
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input type="radio"      checked={sortType4}
                                   onChange={(e) => {
                                       setSortType4(e.target.checked);
                                      }}></input>
                                  Cost: Low to High
                                </label>
                              </div>
                              <div className="ppq">
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input type="radio"      checked={sortType5}
                                   onChange={(e) => {
                                       setSortType5(e.target.checked);
                                      }}></input>
                                  Cost: High to Low
                                </label>
                              </div> 
                       
                         </div>
                          </div>
                        )} */}

                        {filterValue === 2 && (
                          <div className="Veg">
                            <div className="ghjk">Filter BY</div>
                            <div className="Veggg">
                              <div>
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="checkbox"
                                    name="Veg"
                                    checked={isVegFilterActive}
                                    onChange={(e) =>
                                      handleVegFilterChange(e.target.checked)
                                    }
                                  />
                                  Veg
                                </label>
                              </div>
                              <div>
                                <label style={{ display: "flex", gap: "20px" }}>
                                  <input
                                    type="checkbox"
                                    name="Non-Veg"
                                    checked={isNonVegFilterActive}
                                    onChange={(e) =>
                                      handleNonVegFilterChange(e.target.checked)
                                    }
                                  />
                                  Non-Veg
                                </label>
                              </div>
                            </div>
                          </div>
                        )}

                        {filterValue == 3 && (
                          <div>
                            <div className="ghjk">Filter By</div>
                            <div>
                              <label style={{ display: "flex", gap: "20px" }}>
                                <input
                                  type="checkbox"
                                  checked={isLessThan30MinsFilterActive}
                                  onChange={(e) =>
                                    handleLessThan30MinsButtonClick(
                                      e.target.checked
                                    )
                                  }
                                ></input>
                                Less Than 30 mins
                              </label>
                              <label style={{ display: "flex", gap: "20px" }}>
                                <input
                                  type="checkbox"
                                  checked={isLessThan45MinsFilterActive}
                                  onChange={(e) =>
                                    handleLessThan45MinsButtonClick(
                                      e.target.checked
                                    )
                                  }
                                ></input>
                                Less Than 45 mins
                              </label>
                            </div>
                          </div>
                        )}
                        {filterValue == 4 && (
                          <div>
                            <div className="ghjk">Filter By</div>
                            <div>
                              <label style={{ display: "flex", gap: "20px" }}>
                                <input
                                  type="checkbox"
                                  className="checkbox"
                                  checked={isPriceLessThan300FilterActive}
                                  onChange={(e) =>
                                    handlePriceLessThan300ButtonClick(
                                      e.target.checked
                                    )
                                  }
                                ></input>
                                Less than Rs. 300
                              </label>
                              <label style={{ display: "flex", gap: "20px" }}>
                                <input
                                  type="checkbox"
                                  className="checkbox"
                                  checked={isPrice300To600FilterActive}
                                  onChange={(e) =>
                                    handlePrice300To600ButtonClick(
                                      e.target.checked
                                    )
                                  }
                                ></input>
                                Rs.300 - Rs.600
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <button style={{ Width: "205px", borderRadius: "9px" }}>
                        Clear Filters
                      </button>
                      <button
                        style={{ Width: "205px", borderRadius: "9px" }}
                        onClick={() => {
                          filterByCat();
                          handleCloseModal();
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Pizza;
