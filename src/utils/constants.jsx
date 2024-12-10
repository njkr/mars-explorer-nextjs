
export const api_url =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_Back_URL_SERVER
		: process.env.REACT_APP_Back_URL_TEST;

export const mx_contract_address = process.env.REACT_APP_MX_CONTRACT_ADDR;

export const mx_token = process.env.REACT_APP_MX_TOKEN;


