import { useEffect, useState } from 'react'
import './style.css'
import "./App.css"
import UsersForm from './components/UsersForm'
import axios from 'axios'
import TargetUser from './components/TargetUser'

function App() {
  const [user, setUser] = useState([])
  const [ userSelect, setUserSelect] = useState(null)

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
     .then(res => setUser(res.data))
  },[])
  const getUsers = ()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
     .then(res => setUser(res.data))
}
 const selectUser = (user)=>{
  setUserSelect(user)
 }

 const deleteUser = (id)=>{
  const filteredDelete = user.filter(user => user.id !== id)
  setUser(filteredDelete)
 }

 const desSelectUser = ()=>setUserSelect(null)

console.log(user)
  return (
    <div className="App">
    <UsersForm
    getUsers={getUsers} 
    userSelect={userSelect}
    desSelectUser={desSelectUser}/>

    <TargetUser
    user={user}
    selectUser={selectUser}
    deleteUser={deleteUser} />

    </div>
  )
}

export default App
