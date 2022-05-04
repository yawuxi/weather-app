import { useHttp } from "../hooks/http.hook"

const useWeatherService = () => {
	const _apiWeatherBase = 'https://api.openweathermap.org/data/2.5/onecall?'
	const _apiGeocodeBase = 'https://api.openweathermap.org/geo/1.0/direct'
	const _apiKey = 'fa58a0c787258b5d7584e89bb5d49fa2'

	// first acc key - 07da36f5c31cbe698220e0230cc748f0
	// second acc key - fa58a0c787258b5d7584e89bb5d49fa2

	const { request, loading, error, setError, setLoading } = useHttp()

	const getDataForSideBar = async (lat, lon) => {
		const res = _transformDataForSideBar(await request(`
		${_apiWeatherBase}lat=${lat}&lon=${lon}&units=metric&appid=${_apiKey}`))
		return res
	}

	const getDataForWeek = async (lat, lon) => {
		let res = await request(`
		${_apiWeatherBase}lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${_apiKey}`)
		res.daily.length = 7
		return res.daily.map(_transformDataForWeek)
	}

	const getDataByCityName = async (cityName) => {
		let res = await request(`${_apiGeocodeBase}?q=${cityName}&limit=1&appid=${_apiKey}`)
		return _transformDataToLatLon(res[0])
	}

	const _transformDataForSideBar = ({ current, timezone }) => {
		return {
			temp: current.temp,
			location: timezone,
			weather: {
				weatherStatus: current.weather[0].main,
				weatherDescr: current.weather[0].description,
			},
		}
	}

	const _transformDataForWeek = (item) => {
		return {
			date: item.dt,
			humidity: item.humidity,
			sunrise: item.sunrise,
			sunset: item.sunset,
			temp: {
				min: item.temp.min,
				max: item.temp.max
			},
			uvi: item.uvi,
			wind: item.wind_speed,
			cloudiness: item.clouds,
			weather: {
				weatherStatus: item.weather[0].main,
				weatherDescr: item.weather[0].description,
			},
		}
	}

	const _transformDataToLatLon = (item) => {
		return {
			lat: item.lat,
			lon: item.lon,
		}
	}

	return { getDataForSideBar, getDataForWeek, getDataByCityName, loading, error, setError, setLoading }
}
export default useWeatherService