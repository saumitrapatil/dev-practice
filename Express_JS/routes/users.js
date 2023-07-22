const express = require('express')
const router = express.Router()

router.use(logger)
router.use(express.json())

router.get('/', (req, res) => {
	console.log(req.query.name)
	res.send('User List')
})

router.get('/new', (req, res) => {
	res.render('users/new')
})

router.post('/', (req, res) => {
	const isValid = true
	if (isValid) {
		users.push({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			age: req.body.age,
		})
		/* res.redirect(`/users/${users.length - 1}`) */
		res.send(users)
	} else {
		console.log('Error')
		res.render('users/new', { firstName: req.body.firstName })
	}
})

router
	.route('/:id')
	.get((req, res) => {
		console.log(req.user)
		res.send(`Get user with ID ${req.params.id}`)
	})
	.put((req, res) => {
		res.send(`Update user with ID ${req.params.id}`)
	})
	.delete((req, res) => {
		res.send(`Delete user with ID ${req.params.id}`)
	})

// .param() executes the function in it's second argument whenever it finds a
// parameter with 'id'

const users = [{ name: 'akshay' }]

router.param('id', (req, res, next, id) => {
	req.user = users[id]
	next()
})

function logger(req, res, next) {
	console.log(req.originalUrl)
	next()
}

module.exports = router
