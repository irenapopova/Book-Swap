import React from 'react';
import { Button } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => (
	<div className="footer-root">
		<div className="footer-main">
			<div className="footer-box">
				<h5 className="footer-box-title">
					Project
				</h5>
				<ul className="footer-box-content">
					<li>A freeCodeCamp full-stack project</li>
					<li>
						Check project descriptions
						<a className="link" href="https://www.freecodecamp.com/challenges/manage-a-book-trading-club" target="_blank">
							here
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-box">
				<h5 className="footer-box-title">
					Tech Stack
				</h5>
				<div className="footer-box-content">
					<li>Front-end: React + Redux + Semantic UI React</li>
					<li>Back-end: Express.js + MongoDB</li>
					<li>Public API: Google Books API</li>
				</div>
			</div>
			<div className="footer-box">
				<h5 className="footer-box-title">
					Author: Irena Popova
				</h5>
				<div className="footer-box-content">
					<li>A web developer in Berlin, Germany</li>
					<li>
						Get in touch: 
						<Button circular as="a" color='black' icon='github alternate' href="https://github.com/irenapopova" />
						<Button circular as="a" color='black' icon='linkedin' href="https://www.linkedin.com/irenapopova" />
					    <Button circular as="a" color='black' icon='codepen' href="https://codepen.io/irenapopova/" />
					    <Button circular as="a" color='black' icon='free code camp' href="https://www.freecodecamp.com/irenapopova" /> 
					</li>
					<li>
						View my portfolio:
						<a className="link" href="https://https://irenapopova.github.io/portfolio-blog/" target="_blank">
							https://https://irenapopova.github.io/portfolio-blog/
						</a>
					</li>
				</div>
			</div>
		</div>
		<div className="footer-small">
			<div className="author"><a href="https://github.com/irenapopova">By Irena Popova, 2019</a></div>
		    <div className="divider">|</div>
		    <a className="repo" href="https://irenapopova.github.io/portfolio-blog/">GitHub Repository</a>
		</div>
	</div>
)

export default Footer;