export default [
  {
    title: 'EdgewiseRealty.com v5',
    client: 'Edgewise Realty',
    description: `
      New construction marketplace for builders to sell directly to buyers.
      Built-in CMS, CRM, payment processing, and public API.
    `,
    techDescription: `
    SSR Nuxt.js front-end, Phoenix back-end, via GraphQL.
    Deployed via Docker to AWS and Heroku.
    `,
    date: '2017',
    status: 'active',
    role: 'CTO (full-stack dev), creative & marketing director',
    tags: {
      primary: ['vuejs', 'phoenix', 'graphql', 'symfony', 'mysql'],
      secondary: ['webpack', 'sass'],
      services: ['Stripe', 'Mandrill', 'Twilio', 'Slack', 'Sentry/Raven', 'Mixpanel', 'GetStream'],
      devops: ['docker', 'aws', 'heroku']
    }
  },
  {
    title: 'Core22',
    client: 'Core',
    description: 'MVP wellness / weight-loss app; with ecommerce and real-time coaching.',
    role: 'full-stack dev',
    techDescription: `
    Isomorphic JS (Universal JS / SSR) talking to Phoenix via GraphQL over socket channels.
    Payment processing through Stripe.
    `,
    date: '2017',
    status: 'prototype',
    tags: {
      primary: ['vuejs', 'phoenix', 'graphql', 'postgres'],
      secondary: ['webpack', 'sass'],
      services: ['SendGrid', 'Twilio', 'Stripe', 'Sentry/Raven', 'Mixpanel'],
      devops: ['heroku']
    }
  },
  {
    title: 'S4C',
    client: 'Marketbridge',
    description: 'MVP b2b asset management connecting Dropbox, Box, and AWS S3 storage with tagging, search, and user management.',
    techDescription: 'Vue SPA talking to Laravel via REST.',
    date: '2017',
    status: 'commercial product',
    role: 'front-end dev',
    tags: {
      primary: ['vuejs', 'laravel', 'postgres'],
      secondary: ['webpack', 'sass'],
      services: ['Dropbox', 'Box', 'aws', 'MailGun', 'Sentry/Raven', 'Mixpanel'],
      devops: ['aws', 'heroku']
    }
  },
  {
    title: 'EdgewiseRealty.com v4',
    client: 'Edgewise Realty',
    description: `
      New construction marketplace connecting buyers and sellers from 
      lead-gen through fulfillment (move-in).
    `,
    techDescription: 'Multi-page Vue app calling both GraphQL and REST APIs.',
    date: '2017',
    status: 'upgraded',
    role: 'CTO (full-stack dev), creative & marketing director',
    tags: {
      primary: ['vuejs', 'graphql', 'symfony', 'mysql'],
      secondary: ['webpack', 'sass'],
      services: ['Stripe', 'Mandrill', 'Twilio', 'Slack', 'Sentry/Raven', 'Mixpanel', 'GetStream'],
      devops: ['aws']
    }
  },
  {
    title: 'D2Groups.com',
    client: 'D2 Groups',
    description: 'Responsive marketing site for architecture and interior design firm.',
    techDescription: 'Content management through Drupal 7, with Backbone.js',
    date: '2016',
    status: 'active, unmaintained',
    role: 'front-end dev',
    tags: {
      primary: ['backbonejs', 'drupal', 'mysql'],
      secondary: ['sass'],
      devops: ['aws']
    }
  },
  {
    title: 'HTHWorldwide.com',
    client: 'HTH Worldwide',
    description: 'b2b marketing site.  Oversaw strategy, content, design, and was lead full-stack developer.',
    techDescription: 'Content management through Drupal 7, with Backbone.js',
    date: '2015',
    status: 'retired',
    role: 'full-stack dev, creative director',
    tags: {
      primary: ['backbonejs', 'drupal', 'mysql'],
      secondary: ['sass'],
      devops: ['aws']
    }
  },
  {
    title: 'Visit System',
    client: 'ARI',
    date: '2015',
    status: 'end-of-life',
    role: 'full-stack dev',
    description: 'Internal tool for coordinating client visit agendas, as well notifying presenters via calendar invites/updates.  Visit itineraries are printable for handouts on visit day.',
    techDescription: 'Drupal 7 content management system with Backbone.js',
    tags: {
      primary: ['backbonejs', 'drupal', 'mysql'],
      secondary: ['sass'],
      devops: ['aws']
    }
  },
  {
    title: 'Video Center',
    client: 'GeoBlue',
    date: '2015',
    status: 'retired',
    description: 'Responsive video library',
    techDescription: 'Custom video players supporting both Flash streaming and HTML5 from AWS.',
    role: 'full-stack dev, creative director',
    tags: {
      primary: ['backbonejs', 'flash'],
      secondary: ['sass'],
      devops: ['aws']
    }
  },
  {
    title: 'Presentation Platform',
    client: 'ARAMARK Education',
    date: '2014',
    status: 'retired',
    description: 'Desktop application for syncing approved/updated interactive marketing content.',
    techDescription: 'Interactive marketing presentations built in web technology, with content managed through Drupal 7, and deployed through Adobe AIR.',
    role: 'full-stack dev, strategic and creative director',
    tags: {
      primary: ['backbonejs', 'drupal', 'mysql', 'air'],
      secondary: ['sass'],
      devops: ['aws']
    }
  },
  {
    title: 'Wall Street Journal',
    client: 'Wall Street Journal',
    date: '2010',
    status: 'unknown',
    description: 'HTML and CSS consultant for building out new b2b product site.  Worked closely with WSJ team regarding process, best practices, and integrations.',
    // techDescription: '...',
    role: 'front-end dev',
    tags: {
      primary: [],
      secondary: []
    }
  },
  {
    title: 'Lincoln Financial',
    client: 'Lincoln Financial',
    date: '2010',
    description: 'Intranet UX/UI consultant.',
    // techDescription: '...',
    status: 'unknown',
    tags: {
      primary: [],
      secondary: []
    }
  },
  {
    title: 'Dow Jones',
    client: 'Dow Jones',
    date: '2009',
    description: 'Consultant.  Mobile and mobile web UX/UI best practices, emerging trends, and optimization.',
    // techDescription: '...',
    status: 'unknown',
    tags: {
      primary: [],
      secondary: []
    }
  }
]
