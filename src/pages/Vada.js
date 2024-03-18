import React from "react";
function Vada(){

    const Cards = [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3puRpdVWMLH2ksiAZ88fvA8ANoDCSYCkEw&usqp=CAU",
          name: " Urad dal Vada ",
          Address: "  South Tukoganj",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaqeRbG_S1cgllKzjLsTTYIklzBXMJbBeSA&usqp=CAU",
    
          name: "Poha Medu Vada ",
          Address: "  Old Palasia",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7IwlP1bikZM9C8QpJJ1vpEn3kFN_BnvYRQ&usqp=CAU",
    
          name: " Vada Pav",
          Address: " Bomby Hospital",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhl1vZ4wwiwMSuOw9GLNAVIC6vH3wrs_VXg&usqp=CAU",
    
          name: " Masala Vada  ",
          Address: "  old palasia",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzvzDUJ97QiNHP386zXHuEOL127VGBY-M6Q&usqp=CAU",
    
          name: "Batata Vada ",
          Address: "  Roy's Rolls ",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgG-xD_bJ6usN_2RowAgW9bTc8XwlNMCdzv-OtQ7Bd5SRaVt0PHfdEBpfwAYfoQkZH9s&usqp=CAU",
          name: " Nagpuri Vada Bhat ",
          Address: " Sapna Sangeeta mall",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB413LQ3K53qK5HUJSF5d-vvFPqebKcmR_LsO9cAgVlmjNIHuN_zwmOGXKRU7mB2QZGhE&usqp=CAU",
    
          name: "Masala Vada",
          Address: "  South Tukoganj",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZJRuCb8COee0ItbfCxGBHhings9xvMzbHQ&usqp=CAU",
    
          name: "Vada Curry ",
          Address: "  Khajarana",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEbHOnAnv9EQYYMcXguWTNjmulhQoB_W8YA&usqp=CAU",
    
          name: "Dahi Vada",
          Address: "New palasia ",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqr-2HFu57NUfjctCnKTThyqFlkPjtI8C-A&usqp=CAU",
    
          name: "MEdu Vada ",
          Address: " Vijay Nagar",
        },
      ];

    return(
        <>
        <div className="mmm">
        <h1 className="pizza">Vada</h1>
        <p className="parap">Cheesilicious Vada to make every day extraordinary.</p>
        <div className="btnp">
          <button className="pizzavbtn">Filter <img className="filter" src="https://static.vecteezy.com/system/resources/thumbnails/009/008/831/small/of-filter-icon-filter-logo-isolated-on-white-background-free-vector.jpg"></img></button>
          <button className="pizzavbtn">Sort By<img className="Sortbtn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADPz8/i4uLg4ODl5eXd3d0ICAgNDQ3n5+cGBgYQEBATExOEhITY2NjU1NQ/Pz+8vLzw8PBZWVk4ODhpaWn39/ezs7NJSUmsrKzBwcFSUlJ/f38ZGRkdHR0qKiozMzOfn5+cJBNVAAADjUlEQVR4nO3di3aiQAwGYBQRqvVSbbW3bbfv/5Kr3SJ6hg5zyUwSzv89Qf7DJAFatSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCXQ7WZarCpDiHxpqvtRI/tauqZ7/jIXbO37dEjX/nMXW6Q59I14AN3qcEe3AK+cNcZ4cUl4Ct3lVFehwOW3DVGGu7FN+4SI70NBTxyVxhtaNpoWvP9tvaAU+76CNjvbt65yyPwbk34h7s8Ah+2gDvu6kjsRt6G9kbUe0d6zbYv9G/DM9tj1Piv4Tj6cGNJOI5Zan1r88FdHYFPW8BixV0egZU14Ya7PAJza0L1j4eTyd4ecATTdPDF6RN3hZHsTxbfPrlrjPI4HLC44y4yRm17rriY19x1Brt3fOs95y401NL5tb7SiE3lGlDpa+Hmzj1gUcy4y/W39LiC3wdV27hxHTJXEblL9uQdUFkvLr16UGPEoICKetG/By8RuUt3477oTSqWhs+iNynoRb9Fr/Aq+i56k/BxEz5kriJyh7AiCCi6F2N7UH5EooBie5GiBy8RF9xpejSEAUUuDdqAAnuxJuvB1kzWQY27Ves3b7hTXbmf0QeUtfqJe7BVSjmoVIu+JyJ3tB/JAp7GjYRejHngHSZg9TdJhkyH/aDWSa+ggIh1gj1oROQ8qNS3av0YV/8ycQ+2+G7DMwUsiorneTFHD14isiTMGJBl9efqwUvE3Ae1zhww+9JYZFkTt6qcERdZe7BV5juo6W/V+s2WmQLmHjJXETMlZAuYafXnXPQ9ETMkZA2YoRdTP/A6REx7UBfsARMvDY5Fb0o4bmQEPF3FVLfhXIvelGjcNAOfnMgpzespAUOmU9EfVCk92KL/D3/mRW8qaXuRf9GbSF9sLAQNmQ7l6hd4Bc/oVr+wIdMhWv0S7kV/U94TBJS06E0Uq190wNNejD2o0ha9KXb1iw8Y2Yu18CP6X8xEVREw5jZc8Jq4FTpuFPRgK+wqqrmCZwHjRseQ6fivfmUB/XtRUQ+2/Fa/woBevaitB1vuLzaUBnRfGqrWxC23caOyB1uVw0FVfAXPBseN1iHTGVr96gOeetF6UFX3YMu2+kcR0NKLMt9sh/gl4ngCFsWu76cW/ib8YAgD8+sK7V/+p9D69ovgntbcBSVQfe1/4u2/xP35k8pht56ud0G/CgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEL8A6UJRO6JFXniAAAAAElFTkSuQmCC"></img></button>
          <button className="pizzavbtn">Pure Veg</button>
          <button className="pizzavbtn">Less than 30 mins</button>
          <button className="pizzavbtn">Rs. 300-600</button>
        </div>
        <div className="ex">
          <h2  >Restaurants to explore  </h2>
        </div>
        <div className="card-container">
            {Cards.map((card, index) => (
              <div
                key={index}
                className="card"
           
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
        </>
    );
};
export default Vada;