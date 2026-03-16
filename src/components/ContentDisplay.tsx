import { type Content } from "./types"

interface Props {
  content: Content | null
}

function ContentDisplay({ content }: Props) {
  if (!content) {
    return <div>Select a topic from the left.</div>
  }

  return (
    <div>
      <p>{content.text}</p>

      <img
        src={content.image}
        alt="content"
        style={{ width: "300px", marginTop: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <iframe
          width="420"
          height="240"
          src={content.video}
          title="video"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default ContentDisplay