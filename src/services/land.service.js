// libs
import axios from "axios"

//custom
import { api_url } from "../utils/constants"


export const getMintData = async (reqBody) => {
    return await axios
      .post(api_url + '/players/getNonceHash', reqBody)
      .then((res) => {
        return { isError: false, data: res.data }
      })
      .catch((error) => {
        if (error.response)
          return { isError: true, message: error.response.data.message }
        return { isError: true, message: error.message }
      })
  }


  export const saveMintData = async (reqBody) => {
    return await axios
      .post(api_url + '/players/SaveLandTransaction', reqBody, {
        // headers: {
        //   Authorization: token,
        // },
      })
      .then((res) => {
        return { isError: false, data: res.data }
      })
      .catch((error) => {
        if (error.response)
          return { isError: true, message: error.response.data.message }
        return { isError: true, message: error.message }
      })
  }