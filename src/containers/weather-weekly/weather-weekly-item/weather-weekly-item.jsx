// styles
import './weather-weekly-item.scss'
import image from '../../../images/sunny.png'

function WeatherWeeklyItem() {
	return (
		<li className="weekly-list__item">
			<h2 className="weekly-list__title">Mon</h2>
			<img className="weekly-list__image" src={image} alt="" />
			<div className="weekly-list__temperature">5&deg;<span>8&deg;</span></div>
		</li>
	)
}

export default WeatherWeeklyItem