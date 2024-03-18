import React from "react";
import "./About.css";
function About(){
    return(
        <>
      <div className="abt">
      <div className="hero">
        <div className="center">
          <h3><span className="believe">BELIEVE</span><span className="in">in</span><span className="good">good</span></h3>
          <h1>We believe in good.</h1>
          <p>
            When we say good, we don’t just mean good food. We also mean the goodness that good food leads to. Good memories, a good temper, a good day, a good burp. And we know that when our food leaves our kitchens, we’re creating all that. It’s rewarding, this belief in good. Now take a look at how we go about it.
          </p>
        </div>
      </div>

      <div className="assets">
        <div>
          <div className="info">
            <h1>
              No good salad starts
              with stale lettuce.
            </h1>
            <p>
              We’re ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While they’re still young and fresh - that’s our motto. It makes the kitchen a better place.
            </p>
          </div>
          <div className="image" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://www.freshmenu.com/pages/about/images/thumbnails/2.jpg")'}}>
            <div className="center">
              <h4>Farm - fresh</h4>
              <h3>Ingredients</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="image" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://www.freshmenu.com/pages/about/images/thumbnails/3.jpg")'}}>
            <div className="center">
              <h4>DAILY - CHANGING</h4>
              <h3>MENU</h3>
            </div>
          </div>
          <div className="info">
            <h1>
              Life is one thing after another.
              Don’t make it the same thing
              after another.
            </h1>
            <p>
              Our menu changes daily because we don’t believe in boring you (or ourselves). We also like to keep you guessing. Cliff-hangers, that’s what we believe in. But here’s a spoiler.
              The menu changes, the goodness doesn’t.
            </p>
          </div>
        </div>
        <div>
          <div className="info">
            <h1>
              Chefs who make the
              onions weep.
            </h1>
            <p>
              They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn’t know what to do with itself. We do though. We send it to you.
            </p>
          </div>
          <div className="image" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://www.freshmenu.com/pages/about/images/thumbnails/9.jpg")'}}>
            <div className="center">
              <h4>
                Highly<br />
                experienced
              </h4>
              <h3>Chefs</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="image" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://www.freshmenu.com/pages/about/images/thumbnails/5_new.jpg")'}}>
            <div className="center">
              <div>
                <h4>
                  World
                </h4>
                <h3>Cuisine</h3>
              </div>
            </div>
          </div>
          <div className="info">
            <h1>
              We can't help you travel
              the world. But we can
              help you taste it
            </h1>
            <p>
              Go ahead. Eat Spain, its fresh salads and delicious paella. Eat Mexico, its soft burrito wraps and its grilled meat and its colourful vegetables. Eat South Asia, all of it, from Thailand to Vietnam to Japan. The world - at least, its food - is full of goodness. And you shouldn’t need a plane ticket to experience it.
            </p>
          </div>
        </div>
        <div>
          <div className="info">
            <h1>
              There's no point if it isn't
              fresh when it reaches you.
            </h1>
            <p>
              Now we might use fresh ingredients, and we might have expert chefs, but if it took an hour and a half for a delicious fresh meal to reach you, it wouldn't be fresh. It wouldn't be delicious either. Our delivery boys are legendary for always being on time, so you don't have to wait (too long) for goodness.
            </p>
          </div>
          <div className="image" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url("https://www.freshmenu.com/pages/about/images/thumbnails/10.jpg")'}}>
            <div className="center">
              <h4>
                45 minutes
              </h4>
              <h3>Delivery</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
         </>
    );
}
export default About;