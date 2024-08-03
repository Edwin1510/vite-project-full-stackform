import { useEffect, useState } from "react"
import GetApi from "./Router"
import { useNavigate } from "react-router-dom"


const Forgot = () => {

    const initialState = {
        name: "",
        age: "",
        newage: "",
    }

    const [formdata, setformdata] = useState(initialState)
    const [postdata, setpostdata] = useState([])
    const [validataion, setvalidation] = useState(false)
    const navigate = useNavigate()

    const data = postdata.datas

    const Getapidata = async () => {
        const data = await GetApi()
        setpostdata(data)
    }

    useEffect(() => {
        Getapidata()
    }, [])


    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = data.find((username) => username.name === formdata.name)
        if (user) {
            const response = await fetch("https://checkapi-5lce.onrender.com/api/patch", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formdata)
            })
            const datajson = await response.json()
            console.log(datajson)
            setformdata(initialState)
            navigate("/sent")

        } else {
            setvalidation(!validataion)
        }



    }


    return (

        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">NAME</label>
                <input id="name" type="text" name="name" onChange={handleChange} value={formdata.name} /><br />
                {validataion && <h4 style={{ color: "red" }}>username not valid</h4>}
                <label htmlFor="age">AGE</label>
                <input id="age" type="text" name="age" onChange={handleChange} value={formdata.age} /><br />
                <label htmlFor="newage">NEWAGE</label>
                <input id="newage" type="text" name="newage" onChange={handleChange} value={formdata.newage} /><br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Forgot