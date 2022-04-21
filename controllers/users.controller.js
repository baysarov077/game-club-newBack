const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  getAllUser: async (req, res) => {
    try {
      const cat = await User.find();
      res.json(cat);
    } catch (err) {
      res.json({ error: "Ошибка при выводе пользователей" });
    }
  },
  getByIdUser: async (req, res) => {
    try {
      const getIdUser = await User.findById(req.params.id);
      res.json(getIdUser);
    } catch (e) {
      res.json(e.toString());
    }
  },
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({ login: login, password: hash });
      res.json(user);
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Ошибка при регистрации: " + err.toString() });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json("Невреный логин");
      }

      const zadrot = await bcrypt.compare(password, candidate.password);

      if (!zadrot) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token: token, id: payload.id });
    } catch (err) {
      console.log({ err });
      res.json(err);
    }
  },
  addImage: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        image: req.file.path,
      });

      const addImage = await User.findById(req.params.id);
      res.json(addImage);
    } catch (e) {
      res.json(`Ошибка в UserController=>AddImage${e.toString()}`);
    }
  },
  addAmount: async (req, res) => {
    try {
      const amo = await User.findByIdAndUpdate(req.params.id, {
        amount: req.body.amount,
      });
      res.json(amo);
    } catch (e) {
      res.json(e.toString());
    }
  },
};
