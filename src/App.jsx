import axios from "axios"
import { useEffect, useState } from "react"
import useDebounce from "./hooks/useDebounce"
import Header from "./components/header/header"
import Main from "./components/main/main"

function App() { 
  const [ username, setUsername ] = useState("")
  const [ data, setData ] = useState([])
  const [ notfound, setNotfound ] = useState(false)
  const debouncedSearch = useDebounce(username, 1000)
  useEffect(() => {
    if(!debouncedSearch) {
      setNotfound(false)
      return;
    }
    axios
      .get(`https://api.github.com/users/${debouncedSearch}`)
      .then((response) => {
        if(response.status === 200) {
          setNotfound(false)
          setData(response.data)
        }
      })
      .catch((error) => {
        if(error.response.status === 404) {
          setNotfound(true)
          setData({"message": "NOT FOUND"});
        } else {
          console.log(error)
        }
    })
  }, [debouncedSearch])
  return (
    <>
      <Header username={username} setUsername={setUsername} />
      {
        (notfound) ?
          (<h2>❌ NOT FOUND ❌</h2>) :
          ((debouncedSearch) ?
          (<Main data={data}/>) :
          (<h2>🔎 Search using GitHub Username</h2>))
      }
    </>
  )
}

export default App
