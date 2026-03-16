import { type AccordionItem } from "./types"

const data: AccordionItem[] = [
  {
    id: 1,
    title: "Introduction",
    description:"This section gives an overview of the topic.",
    content: {
      text: "This is introduction section.",
      image: "https://via.placeholder.com/300",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  },
  {
    id: 2,
    title: "React Basics",
    description:"This section gives an overview of the topic.",
    content: {
      text: "Learn React fundamentals.",
      image: "https://via.placeholder.com/300",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8"
    }
  },
  {
    id: 3,
    title: "Advanced Topics",
    description:"This section gives an overview of the topic.",
    content: {
      text: "Hooks and optimization.",
      image: "https://via.placeholder.com/300",
      video: "https://www.youtube.com/embed/Tn6-PIqc4UM"
    }
  }
]

export default data