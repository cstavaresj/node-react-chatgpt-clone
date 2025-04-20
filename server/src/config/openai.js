const { OpenAI } = require("openai");  // Certifique-se de que a biblioteca que você está usando seja a oficial da OpenAI
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

module.exports = class OpenAIWrapper {

  static client() {
    return openai;
  }

  static textCompletion({ prompt }) {
    // Certifique-se de usar um modelo válido, por exemplo, 'gpt-4' ou 'gpt-3.5-turbo'
    return {
      model: "gpt-4.1-nano",  // Modelo correto e válido
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,  // Ajuste conforme necessário
      max_tokens: 3500,  // Ajuste conforme necessário
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    };
  }

};
