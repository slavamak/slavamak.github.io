import { AiOutlineMenu } from "react-icons/ai"

export default {
  type: "document",
  name: "navigationMenu",
  icon: AiOutlineMenu,
  fields: [
    {
      type: "string",
      name: "title",
    },
    {
      type: "array",
      name: "items",
      of: [{ type: "link" }],
    },
  ],
}
