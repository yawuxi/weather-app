// react
import { useState } from 'react'

// additional functional
import useWeatherService from '../../../services/weatherService'

// components

// styles&img
import './weather-sidebar-search.scss'

function WeatherSidebarSearch({ getCityData, getLocation }) {
	const [searchInputValue, setSearchInputValue] = useState('')

	const { getDataForSideBar, getDataByCityName, getDataForWeek, setLoading, setError } = useWeatherService()

	const searchCityByLocation = async () => {
		const { lat, lon } = await getDataByCityName(searchInputValue)
		getDataForSideBar(lat, lon)
			.then(getCityData)

		getDataForWeek(lat, lon)
			.then(getLocation)
	}

	const onValueChange = (e) => {
		setSearchInputValue(e.target.value)
	}

	return (
		<div className="weather-sidebar__search">
			<input
				tabIndex="1"
				type="text"
				placeholder='write full city name'
				value={searchInputValue}
				onChange={onValueChange}
			/>
			<button onClick={searchCityByLocation} tabIndex="2"></button>
			{/* <button
				tabIndex="2"></button> */}
		</div>
	)
}

export default WeatherSidebarSearch