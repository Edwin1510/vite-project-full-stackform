import { useEffect, useState } from "react"
import GetApi from "./Router"
import Showitem from "./Showitem"

const Sentitem = () => {

    const [postdata, setpostdata] = useState([])

    const Datas = postdata.datas

    const GetApidata = async () => {
        const data = await GetApi()
        setpostdata(data)
    }


    useEffect(() => {
        GetApidata()
    }, [])


    return (
        <>
            {console.log(Datas)}

            {Datas?.length > 0 ? (
                Datas.map((p) => {
                    return (
                        <Showitem {...p} key={p._id} />
                    )
                })
            ) : (
                <p>NO DISPLAY DATA</p>
            )
            }
        </>
    )
}


export default Sentitem