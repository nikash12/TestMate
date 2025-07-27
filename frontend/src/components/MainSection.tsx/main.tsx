import { useEffect, useState } from "react"

export default function Main() {
  const userId = localStorage.getItem("userId") || 'ok'

  const [moduleIndex, setModuleIndex] = useState(0)
  const [mockModules, setMockModules] = useState<string[]>([])

  useEffect(() => {
    fetch("http://localhost:2001/api/modules")
      .then((res) => res.json())
      .then((data) => {
        setMockModules(data.modules || []) 
      })
      .catch((err) => console.error("Error fetching modules:", err))
  }, []) 

  if (!userId) {
    return (
      <div>
        <a href="/login">Login</a> to Continue
      </div>
    )
  }

  return (
    <div>
      <h1>Selected Project:</h1>

      <h2>Modules in this project:</h2>
      {mockModules.map((mod, i) => (
        <h3 key={i} onClick={() => setModuleIndex(i)} style={{ cursor: "pointer" }}>
          👉 {mod}
        </h3>
      ))}
    </div>
  )
}
