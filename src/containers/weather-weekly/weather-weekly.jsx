// styles
import './weather-weekly.scss'

// components
import WeatherWeeklyItem from './weather-weekly-item/weather-weekly-item'

function WeatherWeekly() {
	return (
		<div className="weather-weekly">
			<div className="weather-weekly__content">
				<ul className="weather-weekly__list weekly-list">
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
					<WeatherWeeklyItem />
				</ul>
			</div>
		</div>
	)
}

export default WeatherWeekly