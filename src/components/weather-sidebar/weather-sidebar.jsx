// styles
import './weather-sidebar.scss'
import { useState, useEffect } from 'react'
import moment from 'moment'
import image from '../../images/cloudy.png'

import useNumbersService from '../../services/numbersService'
import useWeatherService from '../../services/weatherService'
import Spinner from '../spinner/spinner'
import Error from '../error/error'


function WeatherSidebar() {
	const { getFactByData, loading, error } = useNumbersService()
	const { getDataForSideBar } = useWeatherService()

	const currentDate = new Date()

	const [barState, setBarState] = useState({
		temperature: 0,
		location: '',
		day: currentDate.getDate(),
		month: currentDate.getMonth() + 1,
		dayNumberOfWeek: currentDate.getUTCDay(),
		dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		time: {
			hours: moment().format('h'),
			minutes: moment().format('mm')
		},
		fact: '',
	})

	const { fact, day, month } = barState

	useEffect(() => {
		getFactByData({ day, month })
			.then(res => {
				setBarState(barState => ({ ...barState, fact: res.text }))
			})

		getDataForSideBar(50.4501, 30.5234)
			.then(res => {
				setBarState(barState => ({ ...barState, temperature: res.temp, location: res.location }))
			})

		const interval = setInterval(() => {
			setBarState(barState => ({
				...barState, time: {
					hours: barState.time.hours = moment().format('h'),
					minutes: barState.time.minutes = moment().format('m')
				}
			}))
		}, 10000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const loaded = loading ? <Spinner /> : null
	const err = error ? <Error /> : null
	const factContent = !(loading || error) ? fact : null
	const infoContent = !(loading || error) ? <ViewBox barState={barState} /> : null

	return (
		<aside className="weather-sidebar">
			<div className="weather-sidebar__content">
				<div className="weather-sidebar__search">
					<input type="text" placeholder='search for places...' />
					<button></button>
				</div>
				<div className="weather-sidebar__weather-status">
					<img src={image} alt="" />
				</div>
				{infoContent}
				<div className="divider"></div>
				<h2 className='weather-sidebar__fact-title'>Interesting fact!</h2>
				<div className="weather-sidebar__fact">
					{factContent}
					{loaded}
					{err}
				</div>
			</div>
		</aside >
	)
}

const ViewBox = ({ barState }) => {
	const { temperature, location, dayOfWeek, time, dayNumberOfWeek } = barState
	return (
		<>
			<div className="weather-sidebar__temperature">{temperature.toFixed()}<span>&deg;C</span></div>
			<div className="weather-sidebar__location">{location}</div>
			<div className="weather-sidebar__day-time">
				{dayOfWeek[dayNumberOfWeek]},<span> {time.hours + ':' + time.minutes}</span>
			</div>
		</>
	)
}
export default WeatherSidebar