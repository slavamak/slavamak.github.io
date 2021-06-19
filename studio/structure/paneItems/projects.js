import S from "@sanity/desk-tool/structure-builder"
import { AiOutlineProject } from "react-icons/ai"

const Projects = S.listItem()
  .title("Projects")
  .icon(AiOutlineProject)
  .child(
    S.documentTypeList("project")
      .title("Projects")
      .filter("_type == $type")
      .params({ type: "project" })
  )

export default Projects
