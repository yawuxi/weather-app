// react
import { useState, useEffect } from 'react'

// additional functional
import { motion } from 'framer-motion'

// components

// styles&img
import './weather-weekly-item.scss'
import image_def from '../../../images/sunny.png'
import image_clear from '../../../images/gifs/Sunny.gif'
import image_clouds from '../../../images/gifs/Cloudy.gif'
import image_rain from '../../../images/gifs/Raining.gif'
import image_snow from '../../../images/gifs/Snow.gif'

function WeatherWeeklyItem({
	stateLift,
	date,
	tabIndex,
	itemRefs, temp: { min, max },
	weather: { weatherStatus, weatherDescr }
}) {
	const [weatherImage, setWeatherImage] = useState(image_def)
	const toMiliSeconds = new Date(date * 1000)
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const focusOnItem = (id) => {
		itemRefs.current.forEach(el => el.classList.remove('selected-weekly-item'));
		itemRefs.current[id].classList.add('selected-weekly-item');
		itemRefs.current[id].focus();
	}

	const checkWeatherStatus = () => {
		switch (weatherStatus) {
			case 'Clear':
				setWeatherImage(image_clear)
				break
			case 'Clouds':
				setWeatherImage(image_clouds)
				break;
			case 'Rain':
				setWeatherImage(image_rain)
				break;
			case ' Snow':
				setWeatherImage(image_snow)
				break;
		}
	}

	useEffect(() => {
		checkWeatherStatus()
	}, [weatherStatus])

	const liVariants = {
		visible: i => ({
			scale: '100%',
			transition: {
				delay: 2.5 + i * 0.2,
				type: "spring",
				stiffness: 50
			},
		}),
		hidden: { scale: '0%' },
	}

	return (
		<motion.li
			variants={liVariants}
			custom={tabIndex}
			initial="hidden"
			animate="visible"
			className="weekly-list__item"
			onClick={() => { return stateLift(), focusOnItem(tabIndex) }}
			tabIndex={tabIndex + 3}
			ref={el => itemRefs.current[tabIndex] = el}>
			<h2 className="weekly-list__title" > {dayOfWeek[toMiliSeconds.getDay()]}</h2>
			<h3 className="weekly-list__date">{toMiliSeconds.getDate()}</h3>
			<img className="weekly-list__image" src={weatherImage} alt={weatherDescr} />
			<div className="weekly-list__temperature">{min.toFixed()}&deg;<span> {max.toFixed()}&deg;</span></div>
		</motion.li >
	)
}

export default WeatherWeeklyItem