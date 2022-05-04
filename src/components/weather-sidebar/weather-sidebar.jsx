// react
import { useState, useEffect } from 'react'

// additional functional
import moment from 'moment'
import { motion } from 'framer-motion'
import useWeatherService from '../../services/weatherService'
import useConditionalRender from '../../hooks/coniditional-render.hook'

// components
import WeatherSidebarSearch from './weather-sidebar-search/weather-sidebar-search'

// styles&img
import './weather-sidebar.scss'
import image_def from '../../images/sunny.png'
import image_clear from '../../images/gifs/Sunny.gif'
import image_clouds from '../../images/gifs/Cloudy.gif'
import image_rain from '../../images/gifs/Raining.gif'
import image_snow from '../../images/gifs/Snow.gif'

function WeatherSidebar({ getLocation }) {
	const { getDataForSideBar, loading, error } = useWeatherService()
	const { condRender } = useConditionalRender()

	const currentDate = new Date()

	const [barState, setBarState] = useState({
		temperature: 0,
		location: '',
		day: currentDate.getDate(),
		month: currentDate.getMonth() + 1,
		dayNumberOfWeek: currentDate.getUTCDay(),
		dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		time: {
			hours: moment().format().slice(11, 13),
			minutes: moment().format().slice(14, 16)
		},
		weatherStatus: ''
	})

	const [weatherImage, setWeatherImage] = useState(image_def)

	const checkWeatherStatus = () => {
		switch (barState.weatherStatus) {
			case 'Clear':
				setWeatherImage(image_clear)
				break
			case 'Clouds':
				setWeatherImage(image_clouds)
				break;
			case 'Rain':
				setWeatherImage(image_rain)
				break;
			case 'Snow':
				setWeatherImage(image_snow)
				break;
			case 'Mist':
				setWeatherImage(image_clear)
				break;
		}
	}

	const getCityData = (data) => {
		setBarState(barState =>
			({ ...barState, temperature: data.temp, location: data.location, weatherStatus: data.weather.weatherStatus }))
		checkWeatherStatus()
	}

	useEffect(() => {
		checkWeatherStatus()
	}, [barState.weatherStatus])

	useEffect(() => {
		getDataForSideBar(50.4501, 30.5234)
			.then(res => {
				setBarState(barState => ({ ...barState, temperature: res.temp, location: res.location, weatherStatus: res.weather.weatherStatus }))
			})
		checkWeatherStatus()
		const interval = setInterval(() => {
			setBarState(barState => ({
				...barState, time: {
					hours: moment().format().slice(11, 13),
					minutes: moment().format().slice(14, 16)
				}
			}))
		}, 10000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const { loaded, err, content } = condRender(loading, error, <ViewBox barState={barState} />)

	const dividerStyles = loading || err ? { marginTop: 50 } : {}

	return (
		<motion.aside
			className="weather-sidebar"
			transition={{ delay: 1 }}
			animate={{
				x: ['-100%', '0%']
			}}>
			< div className="weather-sidebar__content" >
				<WeatherSidebarSearch getCityData={getCityData} getLocation={getLocation} />
				<div className="weather-sidebar__weather-status">
					<img src={weatherImage} alt="" />
				</div>
				{content}
				{loaded}
				{err}
				< div className="divider" style={dividerStyles} ></div >
				{/* <h2 className='weather-sidebar__fact-title'>Interesting fact!</h2>
				<div className="weather-sidebar__fact">
					{factContent}
					{factLoaded}
					{factErr}
				</div> */}
			</div >
		</motion.aside >
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