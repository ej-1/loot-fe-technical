const uuidv4 = require('uuid/v4')
const text = require('./_text')
const images = require('./_images').images
var addMonths = require('date-fns/add_months')

const generateGoals = (length) => {
  const goals = []
  const _length = length > 100 ? 100 : length

  const _status = ['IN_PROGRESS', 'COMPLETED']
  const completedGoalIndex = parseInt(Math.floor(Math.random() * 5))
  const nullDateIndex = parseInt(Math.floor(Math.random() * 5))

  for (i = 0; i < _length; i++) {
    const _goal_limit = Math.floor(Math.random() * 1000000)
    let _amount = Math.floor(Math.random() * _goal_limit)
    let _goal_balance = Math.floor(Math.random() * _amount)

    if (i % completedGoalIndex === 0) _goal_balance = _amount

    const _percentage = parseFloat(
      parseFloat(`${_goal_balance / _amount}`).toFixed(1)
    )

    const _image = images[Math.floor(Math.random() * images.length)]

    const _description = text.generate(Math.floor(Math.random() * 421))

    const _id = uuidv4()

    const date = new Date('2018', '7', `${Math.floor(Math.random() * 28)}`)
    let _date = addMonths(date, Math.floor(Math.random() * 12))
    if (i % nullDateIndex === 0) _date = null

    goals.push({
        balance: _goal_balance,
        description: _description,
        amount: _amount,
        percentage: _percentage,
        id: _id,
        image_url: _image.path,
        name: _image.name,
        date: _date,
        status: _status[parseInt(_percentage)]
      })
  }
  return goals
}

module.exports = { generateGoals }