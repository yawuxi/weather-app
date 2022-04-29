import { useState } from "react";

export function useHttp() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const request = async (url) => {
		setLoading(true)

		try {
			setError(false)

			const res = await fetch(url)

			if (!res.ok) {
				throw new Error(`Could not fetch the ${url} error - ${res.status}`)
			}

			setLoading(false)
			const data = await res.json()
			return data
		} catch (error) {
			setLoading(false)
			setError(error.message)
			throw error
		}
	}

	return { request, loading, error }
}