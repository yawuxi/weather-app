// styles
import './app.scss'
import { useState } from 'react'

// components
import WeatherSidebar from '../weather-sidebar/weather-sidebar'
import WeatherWeekly from '../weather-weekly/weather-weekly'
import WeatherCurrentDay from '../weather-current-day/weather-current-day'

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
				<div className="weather-controls">
					<div className="weather-controls__content">
						<p className="weather-controls__text">Weather for week</p>
					</div>
				</div>
				<WeatherWeekly stateLift={stateLift} location={location} />
				<h2 className="weather__choose-title">Choose day of the week</h2>
				<WeatherCurrentDay weatherInfo={weatherInfo} />
			</div>
		</div>
	)
}

export default App