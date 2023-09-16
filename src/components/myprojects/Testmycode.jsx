import './myprojects.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testproducts from "./Testproducts";
import { productData, responsive } from "./data";

export default function Testmycode() {
  const product = productData.map((item) => (
    <Testproducts
      name={item.name}
      github={item.github}
      image={item.image}
      desciption={item.desciption}
      Technologies = {item.Technologies}
    />
  ));

  return (
    <section id='myprojects' className='container myproject__container'>
        <h5>All my recent</h5>
        <h2>Projects !</h2>
        <Carousel showDots={true} responsive={responsive} infinite={true}>
          {product}
        </Carousel>
      </section>

  );
}