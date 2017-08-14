"use strict";

// let mercury = {
// 	name: "Mercury",
// 	discovered: "1400BC",
// 	mass:"3.3011×1023 kg",
// 	size: "7.48×107 km2",
// 	distance_from_sun: "35.98 million miles",
// 	atmosphere: "hydrogen, helium, and oxygen",
// 	satellites: "none",
// 	visitors: "Mariner 10 (1974), MESSENGER (2004)"
// };

let mercuryCard = `
				<article class="planet" id="mercury">
					<header>
						<h1>Mercury</h1>
					</header>
					<p>Year discovered: 1400BC</p>
					<p>Mass: 3.3011×1023 kg</p>
					<p>Size: 7.48×107 km2</p>
					<p>Distance From The Sun: 35.98 million miles</p>
					<p>Atmosphere: hydrogen, helium, and oxygen</p>
					<p>Satellites: none</p>
					<p>Visitors: Mariner 10 (1974), MESSENGER (2004)</p>
				</article>`;

function outputTo(domElement) {
  $(domElement).append(mercuryCard);
}

module.exports={outputTo};
