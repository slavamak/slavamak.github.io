import schemaTypes from "all:part:@sanity/base/schema-type"
import createSchema from "part:@sanity/base/schema-creator"

import footerSettings from "./documents/footerSettings"
import headerSettings from "./documents/headerSettings"
import navMenu from "./documents/navMenu"
import pageHome from "./documents/pageHome"
import project from "./documents/project"
import redirect from "./documents/redirect"
import siteSettings from "./documents/siteSettings"
import collection from "./modules/collection"
import hero from "./modules/hero"
import link from "./objects/link"
import socialLink from "./objects/socialLink"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Documents
    navMenu,
    siteSettings,
    headerSettings,
    footerSettings,
    project,
    pageHome,
    redirect,

    // Modules
    hero,
    collection,

    // Objects
    socialLink,
    link,
  ]),
})
