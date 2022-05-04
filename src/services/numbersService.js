import { useHttp } from "../hooks/http.hook"

const useNumbersService = () => {

	const { request, loading, error } = useHttp()

	const getFactByData = async ({ day, month }) => {
		const res = _transformFact(await request(`http://numbersapi.com/${month}/${day}/date?json`))
		return res
	}

	const _transformFact = (res) => {
		return {
			text: res.text
		}
	}

	return { getFactByData, error, loading }
}

export default useNumbersService