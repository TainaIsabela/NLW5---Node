import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
routes.post("/users", userController.create);
routes.post("/settings", settingsController.create);
export { routes };