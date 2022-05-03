// react
import { useState } from 'react'

// additional functional
import { motion } from 'framer-motion'

// components
import WeatherSidebar from '../weather-sidebar/weather-sidebar'
import WeatherWeekly from '../weather-weekly/weather-weekly'
import WeatherCurrentDay from '../weather-current-day/weather-current-day'

// styles
import './app.scss'

function App() {
	const [weatherInfo, setWeatherInfo] = useState([])
	const [location, setLocation] = useState([])

	const stateLift = (weatherInfo) => {
		setWeatherInfo(weatherInfo)
	}

	const getLocation = (data) => {
		setLocation(data)
	}

	return (
		<div className="weather">
			<WeatherSidebar getLocation={getLocation} />
			<div className="weather-main">
				<motion.div
					className="weather-controls"
					transition={{ delay: 1.9 }}
					animate={{ y: ['-100%', '0%'], opacity: [0, 1] }} >
					<div className="weather-controls__content">
						<p className="weather-controls__text">Weather for week</p>
					</div>
				</motion.div>
				<WeatherWeekly stateLift={stateLift} location={location} />
				<motion.h2
					className="weather__choose-title"
					transition={{ delay: 5 }}
					animate={{ opacity: [0, 1] }}>Choose day of the week</motion.h2>
				<WeatherCurrentDay weatherInfo={weatherInfo} />
			</div>
		</div >
	)
}

export default App