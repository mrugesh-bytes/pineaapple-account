import React, { useEffect } from "react";
import { AnyIfEmpty } from "react-redux";

declare global {
	interface Window {
		BeansMap: AnyIfEmpty<object>;
	}
}

const Map = () => {
	useEffect(() => {
		window.addEventListener("load", scriptLoaded);
		window.onload = scriptLoaded();
	}, []);

	const scriptLoaded: any = () => {
		const be = new window.BeansMap();

		be.render(
			"beans-maps-1",
			"0baf0b44e30a49b:3538663834623937633062333465323062343930",
			[
				{
					address: "1200 Dale Ave, Mountain View, CA",
					unit: "43",
					options: {
						links: {
							display: true,
						},
						tiles: {
							display: true,
							keybox: {
								text: "#9112",
								iconUrl:
									"https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/...",
							},
							entrance: {
								text: "#9111",
							},
							elevation: {
								text: "Floor 3",
							},
							parking: {
								text: "Street",
							},
						},
						markers: {
							display: true,
							keybox: {
								display: true,
								text: "#9112",
							},
							entrance: {
								text: "#9111",
								iconUrl:
									"https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/...",
							},
							elevation: {
								text: "Floor 3",
							},
							parking: {
								text: "Street",
							},
						},
						poi: [
							{
								location: {
									lat: 33.63427078772915,
									lng: -111.86407107998963,
								},
								name: "CARWASH",
								iconUrl:
									"https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/...",
							},
							{
								display: false,
								name: "TRASH",
							},
							{
								display: false,
								name: "ALL",
							},
						],
					},
				},
			],
			{
				userLocation: "LIVE",
				platform: "APPLE",
			},
			{
				initialMap: "STREET",
			}
		);
	};

	return (
		<div id="beans-maps-1" style={{ width: "50vw", height: "100vh" }}>
			{scriptLoaded}
		</div>
	);
};

export default Map;
