export default {
  name: 'portfolioItem',
  type: 'document',
  title: 'Portfolio Items',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Portfolio Image',
      description: 'Describe this portfolio item.'
    }
  ]
}
