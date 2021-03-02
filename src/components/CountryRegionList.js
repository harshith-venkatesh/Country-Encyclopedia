import React from 'react';

const CountryRegionList = ({continentRegion,setRegions}) => {
  	const regionSelector = (region) => {
		setRegions(region);
	};
  return(
    <>
    <ul className="list-region">
					{continentRegion && continentRegion
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
        </>
  )
}

export default CountryRegionList;