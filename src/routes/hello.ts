import { DefineRoutes } from "#functions/routes.js"

export default DefineRoutes((app) => [
    app.get("/", async (req, res) => {
        return { hello: "world" }
    })
])