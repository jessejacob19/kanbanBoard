const connection = require('./connection')

function getCards(columnId, db = connection) {
  return //gets all the cards for a specific column
}

function deleteCard(cardId, db = connection) {
  return //deletes a specific card
}
function editCardName(card, db = connection) {
  return
}
function editCardDescription(card, db = connection) {
  return
}
function editCardPos(card, db = connection) {
  return
}

module.exports = {
  getCards,
  deleteCard,
  editCardName,
  editCardDescription,
  editCardPos
}