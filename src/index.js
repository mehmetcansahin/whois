import {Hono} from 'hono'
import {whois} from "./whois";
import {serveStatic} from 'hono/cloudflare-workers'
import {Home} from "./home";

const app = new Hono()

app.use('/static/*', serveStatic({root: './'}))
app.use('/favicon.ico', serveStatic({path: './favicon.ico'}))

app.get('/', (c) => c.html(<Home/>))

app.get('/whois', async (c) => await whois(c))
export default app
