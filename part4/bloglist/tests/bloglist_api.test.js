const {test, after} = require ('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {

  await Blog.deleteMany({})
  const noteObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = noteObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  after(async() => {
    await mongoose.connection.close()
  })

  test('The unique identifier property of the blog posts is by default _id', async () => {
    const blogs = await Blog.find({})
    expect(blogs[0]._id).toBeDefined()
  })

  test('A valid blog can be added ', async () => {
    const newBlog = {
      title:"Canonical string reduction",
      author:"Edsger W. Dijkstra",
      url:"http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes:14,
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)})


    test('If title and url are missing, respond with 400 bad request', async () => {
      const newBlog = {
        author:"Edsger W. Dijkstra",
        likes:12
      }
  
      await api
        .post('/api/blogs')
        .send(newBlog)
        .set(headers)
        .expect(400)
        const blogsAtEnd = await helper.blogsInDb()

        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
      })

      test('If the likes property is missing, it will default to 0 ', async () => {
        const newBlog = {
          title:"First class tests",
          author:"Robert C. Martin",
          url:"http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        }
    
        await api
          .post('/api/blogs')
          .send(newBlog)
          .set(headers)
          .expect(200)
          .expect('Content-Type', /application\/json/)
    
        const blogsAtEnd = await helper.blogsInDb()
        const addedBlog = await blogsAtEnd.find(blog => blog.title === "First class tests")
        expect(addedBlog.likes).toBe(0)
      })
    