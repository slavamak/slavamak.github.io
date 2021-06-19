import { AiOutlineIdcard } from "react-icons/ai"

export default {
  title: "Hero",
  name: "hero",
  type: "object",
  icon: AiOutlineIdcard,
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "social_links",
      type: "array",
      title: "Social links",
      of: [
        {
          type: "socialLink",
        },
      ],
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
      fields: [
        {
          name: "photo_alt",
          type: "string",
          title: "Photo alternate text",
        },
      ],
    },
  ],
  preview: {
    select: {
      photo: "photo",
      content: "content.0.children",
    },
    prepare({ photo, content }) {
      return {
        title: "Hero",
        subtitle: content && content[0]?.text,
        media: photo,
      }
    },
  },
}
