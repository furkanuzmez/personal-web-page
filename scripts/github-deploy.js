const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/furkanuzmez/fuzmez-webpage.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)