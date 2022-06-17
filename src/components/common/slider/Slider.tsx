import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Slider.module.css";
import carouselBanner from "../../../images/units-card.png";
import iconKey from "../../../images/icon-key.svg";
const Slider = (props: any) => {
	const images = props.carouselBanner.split(",");
	console.log(images);

	return (
		<div>
			<div className={styles.sliderContainer}>
				{" "}
				<Carousel
					showThumbs={false}
					autoPlay={true}
					infiniteLoop={true}
					showArrows={false}
					showStatus={false}
					emulateTouch
				>
					{images &&
						images.map((item: any, index: any) => {
							console.log(item);

							return (
								<div className={styles.sliderItem} key={index}>
									<img className={styles.banner} src={item} />
									<span className={styles.inUse}>
										<img src={iconKey} alt="Key" />
										In use
									</span>
									<span className={styles.price}>{props.price}</span>
								</div>
							);
						})}
				</Carousel>
			</div>
		</div>
	);
};

export default Slider;