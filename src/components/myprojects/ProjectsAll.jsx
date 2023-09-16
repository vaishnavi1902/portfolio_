import './myprojects.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EachProject from "./EachProject";
import { projectData, responsive } from "./projectdata";

export default function Testmycode() {
  const project = projectData.map((item) => (
    <EachProject
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
          {project}
        </Carousel>
      </section>

  );
}