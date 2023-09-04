import {React, useState } from "react";


function Nooty() {

    const [item, setItem] = useState("")
    const [list, setList] = useState([])

    const getUserData = (e) => {
        e.preventDefault()
        console.log(item)

        if (item) {
            setList([...list, item])
            setItem("")
        }else{

        }
    }


    return <div>
            <h1>Nooty lists</h1>
            <form className="input">
                <input type="text" value={item} placeholder="Enter  item"
                    onChange={(event) => {
                        setItem(event.target.value)
                    }}
                />
                <button onClick={getUserData}>Save item</button>
            </form>

            <div className="notes">
                {
                    list.map((item, index) => (
                        <p style={{backgroundColor:"coral",marginTop:"20px",padding:"10px",fontSize:"25px",borderRadius:"5px"}}>
                            {item}
                        </p>

                    ))
                }
            </div>
        </div>
    
}

export default Nooty;
