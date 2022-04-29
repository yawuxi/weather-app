// styles
import './weather-controls.scss'

function WeatherControls() {
	return (
		<div className="weather-controls">
			<div className="weather-controls__content">
				<button className="weather-controls__button" style={{ color: '#8A8A8A', fontSize: 24 }}>Today</button>
				<span> / </span>
				<button className="weather-controls__button">Week</button>
			</div>
		</div>
	)
}

export default WeatherControls