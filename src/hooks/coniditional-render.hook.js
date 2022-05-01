import Spinner from "../components/spinner/spinner";
import Error from "../components/error/error";

export default function useConditionalRender() {

	const condRender = (isLoading, isError, rednerContent) => {
		const loaded = isLoading ? <Spinner /> : null
		const err = isError ? <Error /> : null
		const content = !(isLoading || isError) ? rednerContent : null

		return { loaded, err, content }
	}

	return { condRender }
}