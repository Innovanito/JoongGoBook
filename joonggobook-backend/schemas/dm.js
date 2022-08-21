export default {
  name: 'dm',
  title: 'DM',
  type: 'document',
  fields: [
    {
      name: 'sender',
      title: 'Sender',
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