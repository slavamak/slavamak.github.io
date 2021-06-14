import dynamic from "next/dynamic"

const Projects = dynamic(() => import("../Projects"))
const Hero = dynamic(() => import("../Hero"))

const Module = ({ module }) => {
  const type = module._type

  switch (type) {
    case "collection":
      return <Projects data={module} />
    case "hero":
      return <Hero data={module} />
    default:
      return null
  }
}

export default Module
