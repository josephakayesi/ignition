const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
	res.json({
		env: 'production',
		message: 'tinf servers up and running!'
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
