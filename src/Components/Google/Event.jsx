import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState('Sara')
    const [number, setNumber] = useState(0)

    const changename = () => {
        setName('Hikmah')
        console.log(name);
    }

    const changeNumber = () => {
        setNumber(number + 1)
        console.log(number);
    }
    // const decrementNumber = () => {
    //     setNumber(number - 1)
    //     console.log(number);
    // }

    const decrementNumber = () => {
        if(number > 0) {
            setNumber(number - 1)
        }
    }


  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changename}>Change Name</button>

        <h1>{number}</h1>
        <button onClick={changeNumber}>Increment</button>
        <button onClick={decrementNumber}>Derement</button>

        <div>
            <input type="text" onChange={(e)=>console.log(e.target.value)} />
        </div>

    </div>

  )
}

export default Event