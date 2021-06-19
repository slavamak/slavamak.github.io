import S from "@sanity/desk-tool/structure-builder"

import Home from "./paneItems/pageHome"
import Projects from "./paneItems/projects"
import Redirects from "./paneItems/redirects"
import Settings from "./paneItems/settings"

export default () =>
  S.list().title("Content").items([Home, Projects, Settings, Redirects])
