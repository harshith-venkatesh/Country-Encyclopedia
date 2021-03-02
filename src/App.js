import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import CountryRegionList from "./components/CountryRegionList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./styles.css";
//import restDB from "./db/restCountries.json";

//const countryData = restDB;

export default function App() {
	const [regions, setRegions] = useState("Asia");
	const [countryData, setCountryData] = useState([]);
	const [continentRegion, setContinentRegion] = useState([]);
	const [query, setQuery] = useState("");
	const [isLoading,setIsLoading] = useState(true);

  
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
			setIsLoading(false);
			body.length>0  &&
				setContinentRegion([
				...new Set(body.map((continent) => continent.region))
			]);
			
		}

		getCountries();
	}, [query,isLoading]);



	return (
		<div className="App">
			<header className="header">Know Your Country</header>
			{isLoading?<h1>Loading...</h1>:(
				<div className="container">
				<Search getQuery={(query) => setQuery(query)} />
				
				<CountryRegionList continentRegion={continentRegion} setRegions={setRegions}/>

		

				<CountryList countryData={countryData} regions={regions} />
			</div>
			)}
			<Footer />
		</div>
	);
}
