import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://e0.pxfuel.com/wallpapers/724/281/desktop-wallpaper-get-amazon-prime-video-for-windows-amazon.jpg"
        alt=""
      ></img>
      <div className="home__row">
        <Product
          id="123456"
          title="the lean startup: how constant innovation creates"
          price={11.96}
          rating={2}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"
        />
        <Product
          id="6983456"
          title="Apple iphone 11 pro gray smartphone"
          price={500}
          rating={5}
          image="https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=612x612&w=0&k=20&c=zETLJeguLoTEFBNKPl1vjPY1lvPW1uM6GPpyiMSvsC0="
        />
      </div>
      <div className="home__row">
        <Product
          id="1215456"
          title="Boat head phones"
          price={1.96}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7WsEXbmz0V5FS9rhwP6X0NQPbjeg5jtrXQ&usqp=CAU"
        />
        <Product
          id="126466"
          title="smart watch"
          price={110}
          rating={5}
          image="https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=90"
        />
        <Product
          id="123456"
          title="Seasonal criket kit"
          price={116}
          rating={3}
          image="https://shop.teamsg.in/wp-content/uploads/2021/05/kashmir-willow-economy-kit.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="154456"
          title="croma 127cm 4k ultra HD LED smart tv"
          price={156}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1mmHjDcMwJ5BU1Jl_YycLbQQCx8HOxVtOw&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
