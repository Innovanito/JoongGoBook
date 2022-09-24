export default {
  name: 'dm',
  title: 'DM',
  type: 'document',
  fields: [
    {
      name: 'dmTitle',
      title: 'DmTitle',
      type: 'string'
    },
    {
      name: 'buyer',
      title: 'Buyer',
      type: 'string'
    },
    {
      name: 'seller',
      title: 'Seller',
      type: 'string'
    },
    {
      name: 'chat',
      title: 'Chat',
      type: 'array',
      of:[{type: 'chat'}]
    },
  ]
}