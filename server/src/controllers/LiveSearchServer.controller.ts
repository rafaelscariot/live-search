import express from "express";
import LiveSearchServerService from "../services/LiveSearchServer.service";

const LiveSearchServerController = (app: express.Application) => {
  app.get("/results/:term", (req, res) => {
    try {
      const { term } = req.params;
      const result = LiveSearchServerService.searchResults(term);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

export default LiveSearchServerController;
