import { useHttp } from "../hooks/http.hook"

const useWeatherService = () => {
	const _apiBase = 'https://api.openweathermap.org/data/2.5/onecall?'
	const _apiKey = '07da36f5c31cbe698220e0230cc748f0'

	const { request, loading, error } = useHttp()

	const getDataForSideBar = async (lat, lon) => {
		const res = _transformDataForSideBar(await request(`
		${_apiBase}lat=${lat}&lon=${lon}&units=metric&appid=${_apiKey}`))
		return res
	}

	const getDataForWeek = async (lat, lon) => {
		let res = await request(`
		${_apiBase}lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&&appid=${_apiKey}`)
		res.daily.length = 7
		return res.daily.map(_transformDataForWeek)
	}

	const _transformDataForSideBar = ({ current, timezone }) => {
		return {
			temp: current.temp,
			location: timezone
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
			weather: {
				weatherStatus: item.weather[0].main,
				weatherDescr: item.weather[0].description,
			},
		}
	}

	return { getDataForSideBar, getDataForWeek, loading, error }
}
export default useWeatherService