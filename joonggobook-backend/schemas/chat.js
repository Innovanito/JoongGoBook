export default {
  name: 'chat',
  title: 'Chat',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'chatTime',
      title: 'ChatTime',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      }
    }
  ]
}