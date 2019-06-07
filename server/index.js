// Enable .env
const envStatus = require('dotenv').config()
// Check if .env is set up and bail out if not.
// eslint-disable-next-line no-console
if (envStatus.error) {
  // eslint-disable-next-line no-console
  console.error('You need to create the .env file')
  throw envStatus.error
}


const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})