// styles
import './weather-weekly.scss'
import { useState, useEffect } from 'react'
import useWeatherService from '../../services/weatherService'

// components
import WeatherWeeklyItem from './weather-weekly-item/weather-weekly-item'

function WeatherWeekly({ stateLift }) {
	const { getDataForWeek, loading, error } = useWeatherService()

	const [weatherData, setWeatherData] = useState([])

	useEffect(() => {
		getDataForWeek(50.4501, 30.5234)
			.then(res => {
				setWeatherData([...res])
			})
	}, [])

	const mappedWeatherData = weatherData.map((item, i) => {
		const { date, temp, weather } = item
		return <WeatherWeeklyItem
			date={date}
			temp={temp}
			weather={weather}
			key={i}
			stateLift={() => stateLift(item)} />
	})

	return (
		<div className="weather-weekly">
			<div className="weather-weekly__content">
				<ul className="weather-weekly__list weekly-list" >
					{mappedWeatherData}
				</ul>
			</div>
		</div >
	)
}

export default WeatherWeekly