import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fashion from "../../Assets/Projects/fashion.png";


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
              imgPath={fashion}
              isBlog={false}
              title="fashion"
              description="Online marketplace store build with javascript, css and html. Have features which allows user to chooce clothes options images and make new orders."
              ghLink="https://github.com/wallysom2/fashion-site"
              demoLink="https://scintillating-unicorn-0565df.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
