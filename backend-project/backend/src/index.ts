import { Hono } from 'hono'

// const app = new Hono()


const app = new Hono().basePath('/api/v1');


app.post('/signup', (c: any) => {
  return (
    c.text('signup')
  )

})
app.post('/login', (c: any) => {
  return (
    c.text('login')
  )

})
app.post('/blog', (c: any) => {
  return (
    c.text('Create Blog')
  )

})
app.put('/blog', (c: any) => {
  return (
    c.text('Update Blogs')
  )

})
app.get('/blog/:id', (c: any) => {
  const id = c.req.param('id');
  console.log(id);

  return (
    c.text(`get Blogs ${id}`)
  )

})

export default app
