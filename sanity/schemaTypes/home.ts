export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'proverb',
        type: 'string',
        title: 'Proverb'
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
     
    ]
  }