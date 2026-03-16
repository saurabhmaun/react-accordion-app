import { useState } from "react"
import { type AccordionItem, type Content } from "./types"

interface Props {
  data: AccordionItem[]
  onSelect: (content: Content) => void
}

function AccordionList({ data, onSelect }: Props) {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    if (openId === id) {
      setOpenId(null) // collapse
    } else {
      setOpenId(id) // expand
    }
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="accordion-item">
          
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(item.id)}
          >
            {item.title}
          </div>

          {openId === item.id && (
            <div className="accordion-content">
                {item.description}
              <br />
              <button onClick={() => onSelect(item.content)}>
                View Details
              </button>
            </div>
          )}

        </div>
      ))}
    </div>
  )
}

export default AccordionList