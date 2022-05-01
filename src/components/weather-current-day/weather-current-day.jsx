// react

// additional functional

// components
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// styles&img
import './weather-current-day.scss'
import sunRise from '../../images/day-weather__sunrise-image.png'
import sunSet from '../../images/day-weather__sunset-image.png'
import lowTemp from '../../images/low-temperature.png'
import highTemp from '../../images/high-temperature.png'

function WeatherCurrentDay({ weatherInfo }) {
	return (
		<div className="weather-day-info">
			<div className="weather-day-info__content">
				<ul className="weather-day-info__list info-list">
					<SkeletonTheme baseColor="#c5c5c5" highlightColor="#cecdcd">
						{weatherInfo.date ? <ViewBox weatherInfo={weatherInfo} /> : [
							<Skeleton width={300} height={250} borderRadius={25} key={1} />,
							<Skeleton width={300} height={250} borderRadius={25} key={2} />,
							<Skeleton width={300} height={250} borderRadius={25} key={3} />,
							<Skeleton width={300} height={250} borderRadius={25} key={4} />,
							<Skeleton width={300} height={250} borderRadius={25} key={5} />,
							<Skeleton width={300} height={250} borderRadius={25} key={6} />,
						]}
					</SkeletonTheme>
				</ul>
				<SkeletonTheme baseColor="#c5c5c5" highlightColor="#cecdcd">
					{weatherInfo.date ? <PoweredBy /> : <Skeleton width={300} height={'100%'} borderRadius={25} />}
				</SkeletonTheme>
			</div>
		</div>
	)
}

function ViewBox({ weatherInfo }) {
	const { sunrise, sunset, wind, humidity, temp } = weatherInfo

	let sunRiseHours = new Date(sunrise * 1000).getHours()
	let sunRiseMinutes = new Date(sunrise * 1000).getMinutes()
	let sunSetHours = new Date(sunset * 1000).getHours()
	let sunSetMinutes = new Date(sunset * 1000).getMinutes()

	return (
		<>
			<li className="info-list__item" tabIndex="10">
				<h3 className="info-list__title">UV Index</h3>
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
			</li>
			<li className="info-list__item" tabIndex="11">
				<h3 className="info-list__title">Sunrise & sunset</h3>
				<div className="sun-set-rise">
					<div className="sun-set-rise__content">
						<div className="sun-set-rise__block">
							<img src={sunRise} alt="" />
							<p className="sun-set-rise__time">
								{sunRiseHours < 10 ? '0' + sunRiseHours : sunRiseHours}
								:
								{sunRiseMinutes < 10 ? '0' + sunRiseMinutes : sunRiseMinutes}
							</p>
						</div>
						<div className="sun-set-rise__block">
							<img src={sunSet} alt="" />
							<p className="sun-set-rise__time">
								{sunSetHours < 10 ? '0' + sunSetHours : sunSetHours}
								:
								{sunSetMinutes < 10 ? '0' + sunSetMinutes : sunSetMinutes}
							</p>
						</div>
					</div>
				</div>
			</li>
			<li className="info-list__item" tabIndex="12">
				<h3 className="info-list__title">Humidity</h3>
				<div className="humidity">
					<div className="humidity__content">
						<p className="humidity__value-int">{humidity}%</p>
						<p className="humidity__value-string">Average</p>
						<div className="humidity__value-bar"></div>
					</div>
				</div>
			</li>
			<li className="info-list__item" tabIndex="13">
				<h3 className="info-list__title">Visibility</h3>
				<div className="visibility">
					<div className="visibility__content">
						<p className="visibility__value-of">9/10 <span>km</span></p>
						<div className="visibility__value-string">Good visibility</div>
					</div>
				</div>
			</li>
			<li className="info-list__item" tabIndex="14">
				<h3 className="info-list__title">Min & max temperature</h3>
				<div className="temperature">
					<div className="temperature__content">
						<div className="sun-set-rise__block">
							<img src={lowTemp} alt="" />
							<p className="sun-set-rise__time">{temp.min.toFixed()}&deg;</p>
						</div>
						<div className="sun-set-rise__block">
							<img src={highTemp} alt="" />
							<p className="sun-set-rise__time">{temp.max.toFixed()}&deg;</p>
						</div>
					</div>
				</div>
			</li>
			<li className="info-list__item" tabIndex="15">
				<h3 className="info-list__title">Wind</h3>
				<div className="wind">
					<div className="wind__content">
						<p className="visibility__value-of">{wind.toFixed()} <span>km/h</span></p>
						<div className="visibility__value-string">Light breeze</div>
					</div>
				</div>
			</li>
		</>
	)
}

function PoweredBy() {
	return (
		<div className="powered-by">
			<div className="powered-by__content">
				<h2 className="powered-by__title">Powered by <br /> Dmitry Rylov</h2>
			</div>
		</div>
	)
}

export default WeatherCurrentDay