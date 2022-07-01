const reqEvent = event => require(`../commands/${event}`);
module.exports = client => {
  client.on('market', () => reqEvent('market')(client));
}