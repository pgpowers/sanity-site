import { FaPaintBrush } from "react-icons/fa";

export default {
  name: 'portfolioItem',
  type: 'document',
  title: 'Portfolio Items',
  icon: FaPaintBrush,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Portfolio Image'
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      description: 'Describe this portfolio item.'
    }
  ]
}
