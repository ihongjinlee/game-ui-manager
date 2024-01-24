export default {
  title: 'user',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'user_id',
      name: 'user_id',
      type: 'string',
    },
    {
      title: 'name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'image',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'user_id',
      media: 'image',
    },
  },
}
