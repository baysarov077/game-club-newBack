const { Router } = require("express");

const { userController } = require("../controllers/users.controller");
const fileMiddleware = require("../models/middlewares/file.middleware");

const router = Router();

router.post("/users", userController.registerUser);
router.post("/login", userController.login);
router.get("/users", userController.getAllUser);
router.post("/image", fileMiddleware.single("avatar"), userController.addImage);

module.exports = router;
