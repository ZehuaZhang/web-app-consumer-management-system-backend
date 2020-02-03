import { Router, Request, Response } from 'express'

const router = Router()

// home page
router.get('/', (req: Request, res: Response) => {
  res
    .set('Content-Type', 'text/plain')
    .send(
    `Welcome to .zZehua's Epic Server!\n\n` +
    `Home Page => GET /\n` +
    `Health Check => GET /ping\n\n` +
    `User => /accounts or /api/users/\n` +
    `User Add => POST / BODY={username:string, email:string, dateofbirth:epochtimenumber, balance:number}\n` +
    `User Update => POST /:id BODY={username?:string, email?:string, dateofbirth?:epochtimenumber, balance?:number}\n` +
    `User Delete => DELETE /:id \n` +
    `User Get List => GET /?sort=oneof(id, username, email, dateofbirth, balance)&order=oneof(ascending, descending)&limit={limit:number}&offset={offset:number}\n\n` +
    `Search => /api/search/\n` +
    `Search Get List => GET /?term={term:string}&sort=oneof(id, username, email, dateofbirth, balance)&order=oneof(ascending, descending)&limit={limit:number}&offset={offset:number}\n`
  )
})

// manual heartbeat
router.get('/ping', (req: Request, res: Response) => {
  res.send('pong')
})

export default router
