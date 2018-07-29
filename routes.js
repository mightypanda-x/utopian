import {Application, Router} from 'express';
import * as Utopian from './api/utopian';

export function registerRoutes(router, app) {
  // Register API Routes
  Utopian.RegisterProjectRoutes(router);
  return router;
}
