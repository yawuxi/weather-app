// react

// additional functional

// components

// styles&img
import './weather-weekly-item.scss'
import image from '../../../images/sunny.png'

function WeatherWeeklyItem({ stateLift, date, tabIndex, itemRefs, temp: { min, max }, weather: { weatherStatus } }) {
	const toMiliSeconds = new Date(date * 1000)
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const focusOnItem = (id) => {
		itemRefs.current.forEach(el => el.classList.remove('selected-weekly-item'));
		itemRefs.current[id].classList.add('selected-weekly-item');
		itemRefs.current[id].focus();
	}

	return (
		<li className="weekly-list__item"
			onClick={() => { return stateLift(), focusOnItem(tabIndex) }}
			tabIndex={tabIndex + 3}
			ref={el => itemRefs.current[tabIndex] = el}>
			<h2 className="weekly-list__title">{dayOfWeek[toMiliSeconds.getDay()]}</h2>
			<h2 className="weekly-list__date">{toMiliSeconds.getDate()}</h2>
			<img className="weekly-list__image" src={image} alt="" />
			<div className="weekly-list__temperature">{min.toFixed()}&deg;<span> {max.toFixed()}&deg;</span></div>
		</li >
	)
}

export default WeatherWeeklyItem