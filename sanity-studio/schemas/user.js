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
      title: 'email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'team',
      name: 'team',
      type: 'string',
      options: {
        list: [
          {title: 'pm', value: 'pm'},
          {title: 'marvel', value: 'marvel'},
          {title: 'dc', value: 'dc'},
        ],
        layout: 'radio',
      },
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
