const express = require('express')
const generateGoals = require('./utilities').generateGoals

const app = express()
const PORT = 3001

const _static_goals = generateGoals(10)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/img', express.static(__dirname + '/images'))

app.get('/api', (req, res) => {
  res.send({ message: "Welcome to #LootGoals API"})
})

app.get('/api/goals', (req, res) => {
  const _length = req.query.length ? req.query.length > 100 ? 100 : req.query.length : null
  if (!_length) return res.send(_static_goals)
  res.send(generateGoals(_length))
})


app.get('/api/goals/:id', (req, res) => {
  const _id = req.params.id
  const _goal = _static_goals.filter(goal => goal.id === _id)
  if (!_id || !_goal.length) {
    return res.status(422).send({ error: 'GOAL_NOT_FOUND' })
  }
  res.send(_goal[0])
})


app.get('*', (req, res) => {
  res.status(404).send({ error: "Route not found." })
})


app.listen(PORT, () => {
  console.log(`Running server at: http://localhost:${PORT}/api`)
})