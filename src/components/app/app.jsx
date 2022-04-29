// styles
import './app.scss'
import { useState } from 'react'

// components
import WeatherSidebar from '../weather-sidebar/weather-sidebar'
import WeatherControls from '../weather-controls/weather-controls'
import WeatherWeekly from '../weather-weekly/weather-weekly'
import WeatherCurrentDay from '../weather-current-day/weather-current-day'

function App() {
	const [weatherInfo, setWeatherInfo] = useState([])

	const stateLift = (weatherInfo) => {
		setWeatherInfo(weatherInfo)
	}

	return (
		<div className="weather">
			<WeatherSidebar />
			<div className="weather-main">
				<WeatherControls />
				<WeatherWeekly stateLift={stateLift} />
				<h2 className="weather__choose-title">Choose day of the week</h2>
				<WeatherCurrentDay weatherInfo={weatherInfo} />
			</div>
		</div>
	)
}

export default App