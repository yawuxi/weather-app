// styles
import './weather-sidebar.scss'
import image from '../../images/cloudy.png'

function WeatherSidebar() {
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
				<div className="weather-sidebar__temperature">10<span>&deg;C</span></div>
				<div className="weather-sidebar__location">Kyiv, UA</div>
				<div className="weather-sidebar__day-time">Monday,<span> 13:17</span></div>
				<div className="divider"></div>
				<h2 className='weather-sidebar__fact-title'>Interesting fact!</h2>
				<div className="weather-sidebar__fact">
					Какой либо интересный факт взятый из API - numbers API, факт будет браться по текущей дате - MM/DD.
					<br />
					<br />
					Например: 27.04
				</div>
			</div>
		</aside >
	)
}

export default WeatherSidebar