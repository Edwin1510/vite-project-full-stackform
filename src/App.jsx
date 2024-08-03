import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GetApi from "./Router"


const App = () => {

  const navigate = useNavigate()

  const initialState = {
    name: "",
    age: "",
  }

  const [formdata, setformdata] = useState(initialState)
  const [postdata, setpostdata] = useState([])
  const [show, setshow] = useState(false)
  const DATA = postdata.datas



  const GetApidata = async () => {
    const data = await GetApi()
    setpostdata(data)
  }

  useEffect(() => {
    GetApidata()
  }, [])


  const HandleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()

    const user = DATA.find((user) => user.name === formdata.name)
    if (user) {
      setshow(true)
    } else {
      const response = await fetch("https://checkapi-5lce.onrender.com/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
      })
      const data = await response.json()
      console.log(data);
      setformdata(initialState)
      navigate("/sent")
      console.log(formdata)
    }
  }

  return (
    <>
      {console.log(DATA)}
      <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={HandleChange} name="name" value={formdata.name} />
        {show && <h4 style={{ color: "red" }}>username already used</h4>}
        <label htmlFor="age">AGE</label>
        <input id="age" onChange={HandleChange} name="age" value={formdata.age} />
        <input type="submit" />
      </form>




    </>
  )
}

export default App