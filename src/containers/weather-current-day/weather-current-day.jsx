// styles
import './weather-current-day.scss'

// components
import WeatherCurrentDayItem from './weather-current-day-item/weather-current-day-item'

function WeatherCurrentDay() {
	return (
		<div className="weather-day-info">
			<div className="weather-day-info__content">
				<ul className="weather-day-info__list info-list">
					<WeatherCurrentDayItem />
					<WeatherCurrentDayItem />
					<WeatherCurrentDayItem />
					<WeatherCurrentDayItem />
					<WeatherCurrentDayItem />
					<WeatherCurrentDayItem />
				</ul>
				<div className="powered-by">
					<div className="powered-by__content">
						<h2 className="powered-by__title">Powered by <br /> Dmitry Rylov</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherCurrentDay