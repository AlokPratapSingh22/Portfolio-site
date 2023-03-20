import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      title: 'Title',
      name: 'title',
      description: 'Platform for socail media',
    }),

    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
