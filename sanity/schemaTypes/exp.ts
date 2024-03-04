
export default {
    name: 'exp',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
      },
      {
        name: 'responsibilities',
        title: 'Responsibilities',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url',
      },
    ],
  };