export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'netlify',
      options: {
        description:
          'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          {
            buildHookId: '6022118f2d730551245e4b8a',
            title: 'Sanity Studio',
            name: 'sanity-site-studio-q4ys2v4j',
            apiId: 'e2867924-d611-4357-b2a2-f383a37f4989'
          },
          {
            buildHookId: '6022118ffb90115bdcfed7ac',
            title: 'Portfolio Website',
            name: 'sanity-site-web',
            apiId: 'ef99fb40-922b-429f-97ac-2a21e688e474'
          }
        ]
      }
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pgpowers/sanity-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-site-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
