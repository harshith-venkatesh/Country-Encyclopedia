import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-header">Connect with me</div>
			Made with ❤ by Harshith Venkatesh
			<div className="sm-footer">
				<a
					href="https://www.instagram.com/harshith_bing/"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://twitter.com/Harshith_V007"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-twitter"></i>
				</a>
				<a href="https://github.com/harshith-venkatesh">
					<i className="fab fa-github"></i>
				</a>

				<a
					href="https://medium.com/@harshithvenkatesh"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-medium"></i>
				</a>

				<a
					href="https://www.linkedin.com/in/harshithvenkatesh/"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fab fa-linkedin"></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
