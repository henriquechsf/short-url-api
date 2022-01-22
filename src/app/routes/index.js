module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({
      projeto: 'Encurtador de URL',
      versao: '1.0.0',
      aluno: 'Carlos Henrique de S. Ferreira'
    })
  })
}
