import { Routes, Route } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/dashboard" children={[
          <Route path="/" />,
          <Route path="/notes" />,
          <Route path="/projects" />,
          <Route path="/task" />,
          <Route path="/settings" />
        ]} />
      </Routes>
    </>
  )
}

export default App
