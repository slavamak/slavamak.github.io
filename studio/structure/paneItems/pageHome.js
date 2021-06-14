import { AiOutlineHome } from 'react-icons/ai'
import S from '@sanity/desk-tool/structure-builder'

export const Home = S.listItem()
  .title('Home')
  .icon(AiOutlineHome)
  .child(
    S.document()
      .title('Home Page')
      .id('homePage')
      .documentId('homePage')
      .schemaType('homePage')
  )
