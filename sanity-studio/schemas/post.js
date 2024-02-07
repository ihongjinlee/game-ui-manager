export default {
  title: 'post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'releasedate',
      name: 'releasedate',
      type: 'date',
    },
    {
      title: 'members',
      name: 'members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
    },
    {
      title: 'url',
      name: 'url',
      type: 'url',
    },
    {
      title: 'photo',
      name: 'photo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releasedate',
      media: 'photo',
    },
  },
}
