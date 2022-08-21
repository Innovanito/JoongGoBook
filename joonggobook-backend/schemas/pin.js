export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'about',
      title: 'About',
      type: 'string'
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'url'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'userId',
      title: 'userID',
      type: 'string'
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save'}]
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment'}]
    },
    {
      name: 'isSold',
      title: 'IsSold',
      type: 'boolean',
      description: 'True when the book is sold'
    }
  ]
}