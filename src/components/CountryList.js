import React from "react";
const CountryList = ({ countryData, regions }) => {
	return (
		<div className="country-list">
			{countryData
				.filter((elem) => elem.region === regions)
				.slice(0, 15)
				.map(({ name, capital, flag, subregion, population }) => (
					<div key={flag}>
						<div className="country-flag-card">
							<img className="country-flag-image" src={flag} alt={flag} />
							<div className="country-details">
								<span className="country-name">{name}</span>
								<div>
									{" "}
									<span>Capital: </span>{" "}
									<span className="country-subheading">{capital}</span>
								</div>
								<div>
									{" "}
									<span>Sub Region: </span>{" "}
									<span className="country-subheading">{subregion}</span>
								</div>
								<div>
									{" "}
									<span>Population: </span>{" "}
									<span className="country-subheading">{population}</span>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
export default CountryList;
