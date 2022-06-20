import React, { useEffect } from "react";

declare global {
	interface Window {
		BeansMap: any;
	}
}

const Map = () => {
  useEffect(() => {
    window.addEventListener('load', scriptLoaded);
    window.onload = scriptLoaded();
  }, []);

  const scriptLoaded: any = () => {
    const be = new window.BeansMap();

    be.render(
      'beans-maps-1',
      '0baf0b44e30a49b:3538663834623937633062333465323062343930',
      [
        {
          address: '1200 Dale Ave, Mountain View, CA',
          unit: '43',
          options: {
            links: {
              // [Optional] Set display to true to show the distance bar at the top. Default false.
              display: true,
            },
            tiles: {
              // [Optional] Set display to false to hide the address and tiles card. Default true.
              display: true,
              keybox: {
                // [Optional] Set the text to show on the tiles.
                text: '#9112',

								// [Optional] Set the icon for the tile. See
								// https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/parking_0.png
								// for size and format.
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
							// [Optional] Set display to false to hide all the markers. Default true.
							display: true,
							keybox: {
								// [Optional] Set display to true to show the marker if all the markers are hidden
								// [Optional] Set display to false to hide the marker if all the markers are visible
								display: true,

								// [Optional] Set the text to show on the markers.
								text: "#9112",
							},
							entrance: {
								text: "#9111",

								// [Optional] Set the icon for the marker. See
								// https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/parking_0.png
								// for size and format.
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
								// [Required] Set the POI location.
								location: {
									lat: 33.63427078772915,
									lng: -111.86407107998963,
								},

								// [Required] Set the POI type.
								name: "CARWASH",

								// [Optional] Set the icon for the POI. See
								// https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/parking_0.png
								// for size and format.
								iconUrl:
									"https://storage.googleapis.com/beans-mobile-resources/marker-note-icons/...",
							},
							{
								// [Optional] Set display to false to hide specific POIs that are a part of the Beans data set.
								display: false,

								// [Required] Set the POI type.
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
				// [Optional] Set the location of the user to a fixed position for the navigation to work.
				userLocation: "LIVE",

				// [Optional] Set the default maps app to open on clicking the navigate button
				platform: "APPLE",
			},
			{
				// [Optional] Set the default view to satellite.
				initialMap: "STREET",
			}
		);
	};

	return (
		<div>
			<div id="beans-maps-1" style={{ width: "50vw", height: "100vh" }}>
				{scriptLoaded}
			</div>
		</div>
	);
};

export default Map;
