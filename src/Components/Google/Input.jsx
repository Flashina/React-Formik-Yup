import React,{useState} from 'react'

const Input = () => {
    const [name,setName] = useState('sajid')
    const [userName,setUserName] = useState('')

    const changeName = () =>{
        setName(userName)
    }
  return (
    <div>
<h1>{name}</h1>
<input type="text" onChange={(e) => setUserName(e.target.value)} />

<button onClick={changeName}>Click</button>
    </div>
  )
}

export default Input