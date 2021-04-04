import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import navMenu from './documents/navMenu'
import siteSettings from './documents/siteSettings'
import headerSettings from './documents/headerSettings'
import footerSettings from './documents/footerSettings'
import project from './documents/project'
import redirect from './documents/redirect'
import pageHome from './documents/pageHome'

import hero from './modules/hero'
import collection from './modules/collection'

import socialLink from './objects/socialLink'
import link from './objects/link'

export default createSchema({
  name: 'default',
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
    link
  ]),
})
