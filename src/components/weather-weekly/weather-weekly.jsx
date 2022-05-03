// react
import { useState, useEffect, useRef } from 'react'

// additional functional
import useWeatherService from '../../services/weatherService'
import useConditionalRender from '../../hooks/coniditional-render.hook'

// components
import WeatherWeeklyItem from './weather-weekly-item/weather-weekly-item'

// styles&img
import './weather-weekly.scss'

function WeatherWeekly({ stateLift, location }) {
	const { getDataForWeek, loading, error } = useWeatherService()
	const { condRender } = useConditionalRender()

	const [weatherData, setWeatherData] = useState([])
	const itemRefs = useRef([])

	useEffect(() => {
		getDataForWeek(50.4501, 30.5234)
			.then(res => {
				setWeatherData([...res])
			})
	}, [])

	useEffect(() => {
		setWeatherData(location)
	}, [location])

	const mappedWeatherData = weatherData.map((item, i) => {
		const { date, temp, weather } = item
		return <WeatherWeeklyItem
			date={date}
			temp={temp}
			weather={weather}
			key={i}
			stateLift={() => stateLift(item)}
			tabIndex={i}
			itemRefs={itemRefs} />
	})

	const { loaded, err, content } = condRender(loading, error, mappedWeatherData)

	return (
		<div className="weather-weekly">
			<div className="weather-weekly__content">
				<ul className="weather-weekly__list weekly-list">
					{loaded}
					{err}
					{content}
				</ul>
			</div>
		</div >
	)
}

export default WeatherWeekly