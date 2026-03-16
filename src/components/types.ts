export interface Content {
  text: string
  image: string
  video: string
}

export interface AccordionItem {
  id: number
  title: string
  content: Content,
  description: string
}