import { app } from './app'

app.listen(process.env.PORT || 3003, () => {
  console.log('Server running on port 3003')
})
