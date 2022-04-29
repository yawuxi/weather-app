// styles
import './weather-weekly-item.scss'
import image from '../../../images/sunny.png'

function WeatherWeeklyItem({ stateLift, date, temp: { min, max }, weather: { weatherStatus } }) {

	const toMiliSeconds = new Date(date * 1000)
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	return (
		<li className="weekly-list__item" onClick={stateLift}>
			<h2 className="weekly-list__title">{dayOfWeek[toMiliSeconds.getDay()]}</h2>
			<h2 className="weekly-list__date">{toMiliSeconds.getDate()}</h2>
			<img className="weekly-list__image" src={image} alt="" />
			<div className="weekly-list__temperature">{min.toFixed()}&deg;<span> {max.toFixed()}&deg;</span></div>
		</li>
	)
}

export default WeatherWeeklyItem