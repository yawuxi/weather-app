// react

// additional functional
import { motion } from 'framer-motion'

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
			<motion.div
				className="weather-day-info__content"
				transition={{ delay: 6 }}
				animate={{ x: ['-100%', '0%'], opacity: [0, 1] }}>
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
			</motion.div>
		</div>
	)
}

function ViewBox({ weatherInfo }) {
	const { sunrise, sunset, wind, humidity, temp, cloudiness, uvi } = weatherInfo

	const sunRiseHours = new Date(sunrise * 1000).getHours()
	const sunRiseMinutes = new Date(sunrise * 1000).getMinutes()
	const sunSetHours = new Date(sunset * 1000).getHours()
	const sunSetMinutes = new Date(sunset * 1000).getMinutes()

	// weather values to text
	// cloudness
	const cloudsLowerBiggerThan50 = cloudiness <= 50 ? 'Average cloudness' : 'High Cloudness'
	const cloudsLowerBiggerThan25 = cloudiness <= 25 ? 'Small cloudness' : cloudsLowerBiggerThan50

	// wind
	const windLowerBiggerThan27or35 = wind < 28 || wind === 35 ? 'Fresh wind' : 'High wind'
	const windLowerBiggerThan20or27 = wind < 20 || wind === 27 ? 'Moderate wind' : windLowerBiggerThan27or35
	const windLowerBiggerThan10or19 = wind < 10 || wind === 19 ? 'Light breeze' : windLowerBiggerThan20or27
	const windLowerBiggerThan5 = wind <= 5 ? 'Quiet wind' : windLowerBiggerThan10or19;

	// humidity
	const humidityLowerBiggerThan60 = humidity <= 60 || humidity <= 70 ? 'Average humidity' : 'High humidity'
	const humidityLowerBiggerThan35 = humidity <= 35 ? 'Low humidity' : humidityLowerBiggerThan60

	return (
		<>
			{/* UV Index */}
			<li className="info-list__item" tabIndex="10">
				<div className="uv-index">
					<div className="uv-index__content">
						<h3 className="info-list__title">UV Index</h3>
						<div className="uv-index__main-bar">
							<span className="uv-index__main-bar-1">1</span>
							<span className="uv-index__main-bar-2">2</span>
							<span className="uv-index__main-bar-3">3</span>
							<span className="uv-index__main-bar-4">4</span>
							<span className="uv-index__main-bar-5">5</span>
							<span className="uv-index__main-bar-6">6</span>
							<span className="uv-index__main-bar-7">7</span>
							<span className="uv-index__main-bar-8">8</span>
							<span className="uv-index__main-bar-9">9</span>
							<span className="uv-index__main-bar-10">10</span>
							<span className="uv-index__main-bar-11">11</span>
							<div className="uv-index__main-bar-body">
								<div
									className="uv-index__main-bar-fill"
									style={{ transform: `rotate(${uvi.toFixed() * 15}deg)` }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			{/* Sunrise&sunset */}
			<li className="info-list__item" tabIndex="11">
				<div className="sun-set-rise">
					<div className="sun-set-rise__content">
						<h3 className="info-list__title">Sunrise & sunset</h3>
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
			{/* Humidity */}
			<li className="info-list__item" tabIndex="12">
				<div className="humidity">
					<div className="humidity__content">
						<h3 className="info-list__title">Humidity</h3>
						<p className="humidity__value-int">{humidity}<span>%</span></p>
						<p className="humidity__value-string">{humidityLowerBiggerThan35}</p>
						<div className="humidity__value-bar">
							<div className="humidity__value-bar-fill" style={{ height: humidity + '%' }}></div>
						</div>
					</div>
				</div>
			</li>
			{/* Cloudness */}
			<li className="info-list__item" tabIndex="13">
				<div className="visibility">
					<div className="visibility__content">
						<h3 className="info-list__title">Cloudness</h3>
						<p className="visibility__value-of">{cloudiness}<span>%</span></p>
						<div className="visibility__value-string">{cloudsLowerBiggerThan25}</div>
					</div>
				</div>
			</li>
			{/* temperature */}
			<li className="info-list__item" tabIndex="14">
				<div className="temperature">
					<div className="temperature__content">
						<h3 className="info-list__title">Min & max temperature</h3>
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
			{/* wind */}
			<li className="info-list__item" tabIndex="15">
				<div className="wind">
					<div className="wind__content">
						<h3 className="info-list__title">Wind</h3>
						<p className="visibility__value-of">{wind.toFixed()} <span>km/h</span></p>
						<div className="visibility__value-string">{windLowerBiggerThan5}</div>
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