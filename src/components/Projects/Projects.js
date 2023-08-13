import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portech from "../../Assets/Projects/portech.png";
import ozen from "../../Assets/Projects/ozen.png";
import zaafoor from "../../Assets/Projects/zaafoor.png";
import horizon from "../../Assets/Projects/horizon.png";
import ebdaa from "../../Assets/Projects/ebdaa.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zaafoor}
              isBlog={false}
              title="Zaafoor Services"
              description="Website for Zaafoor Services company "
              demoLink="http://zaafoor.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebdaa}
              isBlog={false}
              title="Ebdaa Alriadh"
              description="Website for Ebdaa Alriadh for home Decor company "
              demoLink="http://ebdaa-alriadh.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ozen}
              isBlog={false}
              title="OZEN Store"
              description="Ecommerce for ozen company "
              demoLink="https://Ozen-ye.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portech}
              isBlog={false}
              title="Portech"
              description="portel and website for collage"
              demoLink="http://portech.totalh.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horizon}
              isBlog={false}
              title="Horizon"
              description="Ecommerce for ozen company "
            demoLink="http://horizon-ye.com/n"   />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
