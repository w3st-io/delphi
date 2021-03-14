/**
 * %%%%%%%%%%%%%%%%%%%%%% *
 * %%% BLOCK SERVICES %%% *
 * %%%%%%%%%%%%%%%%%%%%%% *
*/
// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/pages',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


// [HOME] //
async function s_home() {
	const authAxios = await this.authAxios()

	try {
		const { data } = await authAxios.get('/')

		return data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: `PageService: Error --> ${err}`
		}
	}
}


// [HOME] //
async function s_quote(hashtag) {
	const authAxios = await this.authAxios()

	try {
		const { data } = await authAxios.get(`/quote/${hashtag}`)

		return data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: `PageService: Error --> ${err}`
		}
	}
}


// [EXPORT] //
export default {
	authAxios,
	s_home,
	s_quote,
}