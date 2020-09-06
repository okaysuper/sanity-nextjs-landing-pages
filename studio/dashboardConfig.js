export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f54ee44e700ee73bf5ea3ef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4h4c16bt',
                  apiId: 'ab19124f-1a86-4e90-9e11-9ee331dfe999'
                },
                {
                  buildHookId: '5f54ee451e2b2f1eb9b674d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ejqzaymt',
                  apiId: '7807687d-a176-47da-86eb-fa38a6682470'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/okaysuper/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ejqzaymt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
