import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      title: 'Title',
      name: 'title',
      description: 'Title of the skill',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0% to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
