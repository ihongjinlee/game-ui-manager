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
    {
      title: 'index',
      name: 'index',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      userId: 'user_id',
      userIndex: 'index',
      media: 'image',
    },
    prepare({title, userId, userIndex, media}) {
      return {
        title,
        subtitle: `[${userIndex}] ${userId}`,
        media,
      }
    },
  },
}
