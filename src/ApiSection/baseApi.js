import axios from "axios"

export const baseApi = async (httpmethod, url, data) => {

    const requestMethod = {
        method: httpmethod,
        url: url,
        data

    }

    return await axios(requestMethod).then((result) => {
        return result
    }).catch((err) => {
        console.log(err);
        return err

    })

}