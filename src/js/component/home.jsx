import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div clasName="text-center">
			<Navbar />
			<div className="bg-light text-dark bg-opacity-50">
			<Jumbotron />

				<div className="d-flex flex-wrap justify-content-evenly m-auto">

					<div clasName="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div clasName="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div clasName="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
					<div clasName="col-md-3 col-lg-3 col-xl-3 col-12 p-1">
						<Card />
					</div>
				</div>
				<Footer />
			</div>
		</div>	
		
			);
};

			export default Home;
