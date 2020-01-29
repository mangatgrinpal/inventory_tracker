import axios from 'axios';


const authHeaderKeys = [
	'access-token',
	'token-type',
	'client',
	'expiry',
	'uid'
]


export const setAuthHeaders = headers => {
	authHeaderKeys.forEach(key=> {
		axios.defaults.headers.common[key] = headers[key]
	})
}

export const persistAuthHeadersInDeviceStorage = (headers) => {
	authHeaderKeys.forEach(key=> {
		localStorage.setItem(key, headers[key])
	})
}

export const deleteAuthHeaders = () => {
	authHeaderKeys.forEach(key=> {
		delete axios.defaults.headers.common[key]
	})
}

export const deleteAuthHeadersFromDeviceStorage = async () => {
	authHeaderKeys.forEach(key=> {
		localStorage.removeItem(key)
	})
}