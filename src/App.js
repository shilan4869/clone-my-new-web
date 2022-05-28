import "./App.css"
import Header from "./component/header/Header"
import Content from "./component/content/Content"

function App() {
  return (
    <div className="relative">
      <Header />
      <Content />
      <div className="hidden fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.6)]"></div>
    </div>
  )
}

export default App
