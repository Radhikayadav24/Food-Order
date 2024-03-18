import React from "react";
import { useNavigate } from "react-router-dom";


function Homepage() {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    
    if (id === 1) {
      navigate('/Pizza'); 
    } else if (id === 2) {
      navigate('/NorthIndian'); 
    }else if (id === 3) {
      navigate('/Paratha'); 
    }else if (id === 4) {
      navigate('/Biriyani'); 
    }else if (id === 5) {
      navigate('/Pastry');
    }else if (id === 6) {
      navigate('/Burgur'); 
    }else if (id === 7) {
      navigate('/Chinese'); 
    }else if (id === 8) {
      navigate('/Khichdi'); 
    }else if (id === 9) {
      navigate('/CholeBhature'); 
    }else if (id === 10) {
      navigate('/Pasta'); 
    }else if (id === 11) {
      navigate('/Cake');
    }else if (id === 12) {
      navigate('/Roll');
    }else if (id === 13) {
      navigate('/Pavbhaji'); 
    }else if (id === 14) {
      navigate('/Noodle'); 
    }else if (id === 15) {
      navigate('/Rasgulla'); 
    }else if (id === 16) {
      navigate('/Shake'); 
    }else if (id === 17) {
      navigate('/Dosa'); 
    }else if (id === 18) {
      navigate('/Gulabjamun');
    }else if (id === 19) {
      navigate('/Vada'); 
    }
    else if (id === 20) {
      navigate('/Idli'); 
    }
    
  };

  const images = [
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      alt: "restaurants curated for pizza",
      "id": 1,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      alt: "restaurants curated for north indian",
      "id": 2,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
      alt: "restaurants curated for paratha",
      "id": 3,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      alt: "restaurants curated for Biryani",
      "id": 4,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
      alt: "restaurants curated for pastry",
      "id": 5,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      alt: "restaurants curated for Burger",
      "id": 6,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      alt: "restaurants curated for Chinese",
      "id": 7,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
      alt: "restaurants curated for Khichdi",
      "id": 8,

    },

    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
      alt: "restaurants curated for Chole Bature",
      "id": 9,

    },

    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
      alt: "restaurants curated for Chole Pasta",
      "id": 10,

    },

    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      alt: "restaurants curated for Cake",
      "id": 11,

    },

    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
      alt: "restaurants curated for Roll",
      "id": 12,

    },

    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
      alt: "restaurants curated for Pav Bhaji",
      "id": 13,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
      alt: "restaurants curated for Noodles ",
      "id": 14,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
      alt: "restaurants curated for Rasgulla",
      "id": 15,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
      alt: "restaurants curated for Shake",
      "id": 16,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
      alt: "restaurants curated for Dosa",
      "id": 17,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
      alt: "restaurants curated for Gulab Jamun",
      "id": 18,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
      alt: "restaurants curated for Vada",
      "id": 19,

    },
    {
      src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
      alt: "restaurants curated for Idli",
      "id": 20,

    },
  ];

  const Cards = [
    {
      src: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",
      name: "Gurukripa Restaurant - Sarwate ",
      Address: "  South Tukoganj",
    },
    {
      src: "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Jain Mithai Bhandar (JMB) ",
      Address: "  Old Palasia",
    },
    {
      src: "https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Hotel Apna Avenue ",
      Address: " Bomby Hospital",
    },
    {
      src: "https://img.freepik.com/free-photo/boiling-cauldron-simmers-hearty-vegetable-soup-recipe-generated-by-ai_188544-10271.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Nafees Restaurant ",
      Address: "  old palasia",
    },
    {
      src: "https://img.freepik.com/premium-photo/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus_466689-6855.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Firangi Bake ",
      Address: " Baikunth Dham ",
    },
    {
      src: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&uid=R16223289&ga=GA1.1.1442093961.1702895121&semt=sph",
      name: " Subway ",
      Address: " Sapna Sangeeta mall",
    },
    {
      src: "https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?size=626&ext=jpg&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "KFC ",
      Address: "  South Tukoganj",
    },
    {
      src: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Rotiwala ",
      Address: "  Khajarana",
    },
    {
      src: "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Apna sweet ",
      Address: "New palasia ",
    },
    {
      src: "https://img.freepik.com/premium-photo/shahi-paneer_57665-15284.jpg?size=626&ext=jpg&ga=GA1.1.1442093961.1702895121&semt=sph",

      name: "Gyaniji Ka Khalsa Dhaba",
      Address: " Vijay Nagar",
    },
  ];

  return (
    <div>
      {/*}
      <div className="divs">
        <button
          className="cate"
          onClick={() => {
            navigate("/Categories");
          }}
        >
          {" "}
          Food Category{" "}
        </button>
        <button
          className="cate"
          onClick={() => {
            navigate("/Getmenu");
          }}
        >
          {" "}
          Menu{" "}
        </button>
        <button
          className="cate"
          onClick={() => {
            navigate("/Cart");
          }}
        >
          <img
            className="imgcart"
            src="https://t3.ftcdn.net/jpg/03/15/48/52/240_F_315485298_P3OoczaRyTPKR6S3TJTvgRKioweq3duI.jpg"
          ></img>
          Cart
        </button>
      </div>
        */}
        <div>
          <div
            tabIndex={0}
            aria-label="Order Food Online in Indore"
            role="banner"
            className="fpGMDP"
          >
            <div
              aria-hidden="true"
              className="MasterHeading__Content-sc-6pjiye-4 kSkLVQ"
            >
              <div className="MasterHeading__TextWrapper-sc-6pjiye-1 hveOxk">
                <h1
                  color="text_High_Emphasis"
                  className="MasterHeading__TextContainer-sc-6pjiye-2 cCaqlf"
                >
                  Order Food <br/> Online in Indore
                </h1>
                <div className="MasterHeading__CurvedUnderline-sc-6pjiye-5 fDZKcW">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 78 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
                      stroke="#F15700"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="MasterHeading__ImageWrapper-sc-6pjiye-3 iTgrwg">
                <img
                  className="sc-eDLJxc hETPAk"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
                  width={501}
                  height={300}
                  alt="food"
                />
              </div>
            </div>
          </div>
          <div />
        </div>
      

      <div>
        <div>
         
            <div >
              <h2 className="sc-beySbM kFrUeB title" style={{marginTop:20}}>What's on your mind?</h2>
            
            </div>
    
          <div className="dish">
            <div className="row gridDiv">
              {images.map((image, index) => (
                <div key={index} className="col">
                  <div className="image-wrapper">
                    <img
                      className="image"
                      src={image.src}
                      width={144}
                      height={180}
                      alt={image.alt}
                      onClick={() => handleImageClick(image.id)}
                           />
                   
               
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="cdp">
              <b>Top restaurant chains in Indore</b>
            </h3>
          </div>
          <div className="card-container">
            {Cards.map((card, index) => (
              <div
                key={index}
                className="card"
                onClick={() => navigate("/Categories")}
              >
                <img className="card-image" src={card.src} alt={card.alt} />
                <div className="card-details">
                  <h3 className="card-name">{card.name}</h3>
                  <p className="card-address">{card.Address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
