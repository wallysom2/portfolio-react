import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import myImg from '../../Assets/avatar.svg';

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
							/>
						</Tilt>
					</Col>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className="purple"> INTRODUCE </span>{' '}
							MYSELF
						</h1>
						<p className="home-about-body">
							Passionate developer. Lover of code. 🚀
							<br />
							<br />
							Experienced in testing with Jest and Cypress for rock-solid reliability. &nbsp;
							<i>
								<b className="purple">
								Always exploring new technologies to stay ahead of the curve.{' '}
								</b>{' '}
							</i>
							<br />
							<br />
							Whenever possible, I apply my passion for developing
							products with <b className="purple">Node.js</b> and
							<i>
								<b className="purple">
									{' '}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className="purple"> React.js and Next.js</b>
							</i>
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
