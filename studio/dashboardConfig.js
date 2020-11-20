export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb73c3a5890f24943343918',
                  title: 'Sanity Studio',
                  name: '10-46-studio',
                  apiId: 'ed506860-3998-4e47-9232-308f9e04c3c6'
                },
                {
                  buildHookId: '5fb73c3ae1370a4c9937fc7a',
                  title: 'Blog Website',
                  name: '10-46',
                  apiId: '54324288-d7ad-49c7-9c81-79d5f57f738c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shimmyl/10-46',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://10-46.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
