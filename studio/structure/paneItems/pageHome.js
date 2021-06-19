import S from "@sanity/desk-tool/structure-builder"
import { AiOutlineHome } from "react-icons/ai"

const Home = S.listItem()
  .title("Home")
  .icon(AiOutlineHome)
  .child(
    S.document()
      .title("Home Page")
      .id("homePage")
      .documentId("homePage")
      .schemaType("homePage")
  )

export default Home
