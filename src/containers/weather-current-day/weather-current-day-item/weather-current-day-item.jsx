// styles
import './weather-current-day-item.scss'
import sunRise from '../../../images/day-weather__sunrise-image.png'
import sunSet from '../../../images/day-weather__sunset-image.png'
import lowTemp from '../../../images/low-temperature.png'
import highTemp from '../../../images/high-temperature.png'

function WeatherCurrentDayItem({ itemType = 'wind', itemName = 'UV Index' }) {
	let conditionalRender = null;

	switch (itemType) {
		case 'uv-index':
			conditionalRender = WeatherUvIndex()
			break;
		case 'sun-set-rise':
			conditionalRender = WeatherSunSetRise()
			break;
		case 'humidity':
			conditionalRender = WeatherHumidity()
			break;
		case 'visibility':
			conditionalRender = WeatherVisibility()
			break;
		case 'temperature':
			conditionalRender = WeatherTemperature()
			break;
		case 'wind':
			conditionalRender = WeatherWind()
			break;
		default:
			conditionalRender = null;
	}

	return (
		<li className="info-list__item">
			<h3 className="info-list__title">{itemName}</h3>
			{conditionalRender}
		</li>
	)
}

function WeatherUvIndex() {
	return (
		<div className="uv-index">
			<div className="uv-index__content">
				<span className="uv-index__value-1">6</span>
				<span className="uv-index__value-2">9</span>
				<span className="uv-index__value-3">12</span>
				<div className="uv-index__main-bar">
					<svg
						width="220"
						height="106"
						viewBox="0 0 220 106"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M220 105.308C220 91.4789 217.155 77.785 211.627 65.0085C206.099 52.2319 197.996 40.6228 187.782 30.8441C177.567 21.0653 165.441 13.3084 152.095 8.01616C138.749 2.72393 124.445 6.04307e-05 110 6.10352e-05C95.5546 6.16397e-05 81.2506 2.72394 67.9048 8.01616C54.559 13.3084 42.4327 21.0653 32.2182 30.8441C22.0038 40.6228 13.9013 52.2319 8.37325 65.0085C2.84523 77.785 -1.26286e-06 91.4789 0 105.308L11 105.308C11 92.8618 13.5607 80.5373 18.5359 69.0384C23.5111 57.5395 30.8034 47.0914 39.9964 38.2905C49.1894 29.4896 60.1031 22.5084 72.1143 17.7454C84.1256 12.9824 96.9991 10.5309 110 10.5309C123.001 10.5309 135.874 12.9824 147.886 17.7454C159.897 22.5084 170.811 29.4896 180.004 38.2905C189.197 47.0914 196.489 57.5395 201.464 69.0384C206.439 80.5373 209 92.8618 209 105.308H220Z"
							fill="#C4C4C4"
							fillOpacity="0.65"
						/>
					</svg>
					<div className="uv-index__second-bar">
						<svg
							width="220"
							height="106"
							viewBox="0 0 220 106"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M220 105.308C220 91.4789 217.155 77.785 211.627 65.0085C206.099 52.2319 197.996 40.6228 187.782 30.8441C177.567 21.0653 165.441 13.3084 152.095 8.01616C138.749 2.72393 124.445 6.04307e-05 110 6.10352e-05C95.5546 6.16397e-05 81.2506 2.72394 67.9048 8.01616C54.559 13.3084 42.4327 21.0653 32.2182 30.8441C22.0038 40.6228 13.9013 52.2319 8.37325 65.0085C2.84523 77.785 -1.26286e-06 91.4789 0 105.308L11 105.308C11 92.8618 13.5607 80.5373 18.5359 69.0384C23.5111 57.5395 30.8034 47.0914 39.9964 38.2905C49.1894 29.4896 60.1031 22.5084 72.1143 17.7454C84.1256 12.9824 96.9991 10.5309 110 10.5309C123.001 10.5309 135.874 12.9824 147.886 17.7454C159.897 22.5084 170.811 29.4896 180.004 38.2905C189.197 47.0914 196.489 57.5395 201.464 69.0384C206.439 80.5373 209 92.8618 209 105.308H220Z"
								fill="#FFD910"
								fillOpacity="0.65"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

function WeatherSunSetRise() {
	return (
		<div className="sun-set-rise">
			<div className="sun-set-rise__content">
				<div className="sun-set-rise__block">
					<img src={sunRise} alt="" />
					<p className="sun-set-rise__time">07:02</p>
				</div>
				<div className="sun-set-rise__block">
					<img src={sunSet} alt="" />
					<p className="sun-set-rise__time">16:20</p>
				</div>
			</div>
		</div>
	)
}

function WeatherHumidity() {
	return (
		<div className="humidity">
			<div className="humidity__content">
				<p className="humidity__value-int">74%</p>
				<p className="humidity__value-string">Average</p>
				<div className="humidity__value-bar"></div>
			</div>
		</div>
	)
}

function WeatherVisibility() {
	return (
		<div className="visibility">
			<div className="visibility__content">
				<p className="visibility__value-of">9/10 <span>km</span></p>
				<div className="visibility__value-string">Good visibility</div>
			</div>
		</div>
	)
}

function WeatherTemperature() {
	return (
		<div className="temperature">
			<div className="temperature__content">
				<div className="sun-set-rise__block">
					<img src={lowTemp} alt="" />
					<p className="sun-set-rise__time">5&deg;</p>
				</div>
				<div className="sun-set-rise__block">
					<img src={highTemp} alt="" />
					<p className="sun-set-rise__time">16&deg;</p>
				</div>
			</div>
		</div>
	)
}

function WeatherWind() {
	return (
		<div className="wind">
			<div className="wind__content">
				<p className="visibility__value-of">4 <span>km/h</span></p>
				<div className="visibility__value-string">Light breeze</div>
			</div>
		</div>
	)
}

export default WeatherCurrentDayItem