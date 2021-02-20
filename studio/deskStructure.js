import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdQuestionAnswer } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings', 'faqText'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('FAQ Page')
        .child(
          S.editor()
            .id('faqText')
            .schemaType('faqText')
            .documentId('faqText')
        )
        .icon(MdQuestionAnswer),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
