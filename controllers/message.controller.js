const Message = require('../models/Message.model')

module.exports.messageController = {
  getMessage: async (req, res) => {
    try {
      const message = await Message.find();
      res.json(message);
    } catch (error) {
      return res.json({ error: "Ошибка при выводе сообщения" });
    }
  },
  createMessage: async (req, res) => {
    try {
      const message = await Message.create({text: req.body.text})
      res.json(message)
    } catch (error) {
      return res.json({ error: "Ошибка при добавлении сообщения" });
    }
  }
}