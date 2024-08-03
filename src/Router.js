
const GetApi = async () => {

    const response = await fetch("https://checkapi-5lce.onrender.com/api")

    const data = await response.json()
    return data

}

export default GetApi