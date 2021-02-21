export default {
  name: 'commissionText',
  type: 'document',
  title: 'Commission Page Text',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'pageText',
      type: 'markdown',
      title: 'Commission Page Text',
      description: 'Put the Commission Page text in here.'
    }
  ]
}