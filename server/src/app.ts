import express from "express";
const cors = require("cors");
import LiveSearchServerController from "./controllers/LiveSearchServer.controller";
import LiveSearchServerMiddleware from "./midlewares/LiveSearchServer.middleware";
import { PORT } from "./utils/configs/LiveSearchServer.config";

const app = express();

/* enable CORS for all routes */
app.use(cors());

/* protect all endpoints with an api-key */
LiveSearchServerMiddleware(app);

/* application entrypoint */
LiveSearchServerController(app);

app.listen(PORT, () => {
  console.log(`[INFO] live-search-server on port ${PORT}`);
});
