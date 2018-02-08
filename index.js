const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new koa()

app.use(cors())
app.use(bodyParser())
app.use(async ctx => {
  if (ctx.path === '/error') {
    console.log(ctx.request.body)
  }
  ctx.body = ''
})

app.listen(4000)
