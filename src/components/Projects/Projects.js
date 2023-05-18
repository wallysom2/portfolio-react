import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projects from '../../Assets/data';
import Particle from '../Particle';
import ProjectCard from './ProjectCards';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					{projects.map((project, index) => (
						<Col md={4} className="project-card">
							<ProjectCard
								key={index}
								imgPath={project.imgPath}
								title={project.title}
								description={project.description}
								ghLink={project.ghLink}
								demoLink={project.demoLink}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
