import express from "express";
import { API_KEY } from "../utils/configs/LiveSearchServer.config";

const LiveSearchServerMiddleware = (app: express.Application) => {
  app.use((req, res, next) => {
    const { api_key } = req.headers;

    if (!api_key || api_key !== API_KEY) {
      return res.status(401).send({ error: "unauthorised" });
    } else {
      return next();
    }
  });
};

export default LiveSearchServerMiddleware;
