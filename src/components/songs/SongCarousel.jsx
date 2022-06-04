import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SongCarousel = () => {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <Carousel showThumbs={false}>
        <div>
          <img
            
            
            style={{ height: "90vh", width: "60%" }}
            src="https://a10.gaanacdn.com/gn_img/showcase/JD2KJAbOLw/D2KJvPOKOL/size_m_1633351809.webp"
          />
        </div>
        <div>
          <img
            
            style={{ height: "90vh", width: "60%" }}
            src="https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/0wrb45AKLg/size_m_1651137450.webp"
            alt="img"
          />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://a10.gaanacdn.com/gn_img/showcase/NOXWVRgWkq/NOXWVyw3kq/size_m_1632893200.webp" />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://a10.gaanacdn.com/gn_img/showcase/XzVWRLKdqR/zVWRJ71Wdq/size_m_1651204676.webp" />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://a10.gaanacdn.com/gn_img/showcase/Rz4W8vKxD5/z4W8e2vbxD/size_m_1640083784.webp" />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjUP4EvkqaOKL4hHQenCyD3xOYpFvHtXBqw&usqp=CAU" />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsycQGb8fDd-EUuNKAMRccqtt93q-5LYyIOw&usqp=CAU" />
        </div>
        <div>
          <img 
          style={{ height: "90vh", width: "60%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf98Mk2XQKSOcXMXkO7mOpUSV5zPIB1F-Wow&usqp=CAU" />
        </div>
      </Carousel>
    </div>
  );
};

export default SongCarousel;
