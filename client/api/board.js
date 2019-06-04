import request from 'superagent'

export function getBoards() {
  request.get('/api/')
}