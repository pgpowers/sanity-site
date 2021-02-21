import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdEmail } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings', 'faqText', 'commissionText'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('FAQ Page')
        .child(
          S.editor()
            .id('faqText')
            .schemaType('faqText')
            .documentId('faqText')
        )
        .icon(RiQuestionnaireFill),
      S.listItem()
        .title('Commissions Page')
        .child(
          S.editor()
            .id('commissionText')
            .schemaType('commissionText')
            .documentId('commissionText')
        )
        .icon(MdEmail),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings)
    ])
