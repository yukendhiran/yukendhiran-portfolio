// schema.js

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'year',
        title: 'Year',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };