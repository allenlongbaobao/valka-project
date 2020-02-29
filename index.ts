import { Valka } from "@aotools/valka"
import path from "path"
import { connect as connectDatabase } from "./src/database"

const start = async () => {
  await connectDatabase()
  await initValka()
}

const initValka = async () => {
  const port = parseInt(process.env.PORT as string, 10) || 8888
  const app = await Valka({
    port,
    baseDir: path.resolve(__dirname, "src"),
    enableAuth: true,
    jwtCookie: "token",
    jwtHeader: "jwt-token",
    jwtSecret: "default",
  })
  return app
}

start()
console.log('start sucess')
