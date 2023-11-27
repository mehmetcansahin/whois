import {Hono} from 'hono'
import {whois} from "./whois";


const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))


app.get('/whois', async (c) => await whois(c))
export default app
