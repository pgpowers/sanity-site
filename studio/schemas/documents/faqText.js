export default {
  name: 'faqText',
  type: 'document',
  title: 'FAQ Page Text',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'pageText',
      type: 'markdown',
      title: 'Page Text',
      description: 'Put the FAQ Page text in here.'
    }
  ]
}