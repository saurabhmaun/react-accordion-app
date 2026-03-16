import { useState } from "react"
import AccordionList from "./components/AccordionList"
import ContentDisplay from "./components/ContentDisplay"
import data from "./components/data"
import { type Content } from "./components/types"
import "./App.css"

function App() {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)

  return (
    <div className="container">
      <div className="left">
        <AccordionList data={data} onSelect={setSelectedContent} />
      </div>

      <div className="right">
        <ContentDisplay content={selectedContent} />
      </div>
    </div>
  )
}

export default App