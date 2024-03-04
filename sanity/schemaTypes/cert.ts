
export default {
    name: 'cert',
    title: 'Certification',
    type: 'document',
    fields: [
      {
        name: 'cert',
        title: 'Certification',
        type: 'image',
        options: {
            hotspot: true,
          },
      },
      {
        name: 'site',
        title: 'Site URL',
        type: 'url',
      },
     
    ],
  };