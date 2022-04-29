// styles
import './app.scss'

// components
import WeatherSidebar from '../weather-sidebar/weather-sidebar'
import WeatherControls from '../weather-controls/weather-controls'
import WeatherWeekly from '../weather-weekly/weather-weekly'
import WeatherCurrentDay from '../weather-current-day/weather-current-day'

function App() {
	return (
		<div className="weather">
			<WeatherSidebar />
			<div className="weather-main">
				<WeatherControls />
				<WeatherWeekly />
				<h2 className="weather__choose-title">Choose day of the week</h2>
				<WeatherCurrentDay />
			</div>
		</div>
	)
}

export default App