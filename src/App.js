import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./styles.css";
//import restDB from "./db/restCountries.json";

//const countryData = restDB;

export default function App() {
	const [regions, setRegions] = useState("Asia");
	const [countryData, setCountryData] = useState([]);
	const [continentRegion, setContinentRegion] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		async function getCountries() {
			let url = "";
			if (query) {
				url = `https://restcountries.eu/rest/v2/name/${query}`;
			} else {
				url = `https://restcountries.eu/rest/v2/all`;
			}
			const response = await fetch(url);
			const body = await response.json();
			setCountryData(body);
			setContinentRegion([
				...new Set(body.map((continent) => continent.region))
			]);
		}

		getCountries();
	}, [query]);

	const regionSelector = (region) => {
		setRegions(region);
	};

	return (
		<div className="App">
			<header className="header">Know Your Country</header>
			<div className="container">
				<Search getQuery={(query) => setQuery(query)} />
				<ul className="list-region">
					{continentRegion
						.filter((elem) => elem !== "Polar" && elem.length > 0)
						.map((elem) => (
							<li className="list-region-inline" key={elem}>
								<div
									className="region-button"
									onClick={() => regionSelector(elem)}
								>
									{" "}
									<span> {elem}</span>
								</div>
							</li>
						))}
				</ul>
				<br />

				<CountryList countryData={countryData} regions={regions} />
			</div>
			<Footer />
		</div>
	);
}
