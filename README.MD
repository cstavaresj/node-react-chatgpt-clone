# ChatGPT Clone • Fullstack com React e Node.js

Este projeto é um clone funcional da interface do ChatGPT, desenvolvido com **React no frontend** e **Node.js no backend**, utilizando a **API da OpenAI** para comunicação com o modelo de linguagem.  

O projeto foi criado como parte da formação [ChatGPT for Devs](https://web.dio.me/track/formacao-chatgpt-devs) da DIO, com aulas do professor **Felipe Silva Aguiar**.

---

## ✨ Sobre o projeto

Com o tempo, tanto a interface do ChatGPT quanto a forma de integração com a API da OpenAI passaram por diversas mudanças. Este projeto foi adaptado para refletir essas atualizações:

- A interface foi ajustada para se aproximar da aparência atual do ChatGPT.
- O backend foi atualizado para funcionar com as versões recentes da API da OpenAI.
- Todo o fluxo de mensagens e respostas foi modernizado para acompanhar a experiência do chat real.

---

## 🧪 Tecnologias utilizadas

### Backend:
- Node.js
- JavaScript

### Frontend:
- React
- JavaScript
- CSS

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/cstavaresj/node-react-chatgpt-clone.git
cd node-react-chatgpt-clone
```

### 2. Configurar o backend

```bash
cd server
npm install
```

Crie um arquivo `.env` com sua chave da API da OpenAI:

```env
OPENAI_API_KEY=sua-chave-aqui
```

Inicie o servidor:

```bash
npm start
```

O backend estará disponível em: `http://localhost:5000`

---

### 3. Executar o frontend

Abra um novo terminal e execute:

```bash
cd web
npm install
npm start
```

O frontend será iniciado em: `http://localhost:3000`

---

## 💬 Funcionalidades

- Interface de chat inspirada na versão mais recente do ChatGPT
- Envio de mensagens e retorno de respostas usando a API da OpenAI
- Layout adaptado para refletir a experiência real de uso

---

## 📚 Créditos

Este projeto foi desenvolvido durante a [Formação ChatGPT for Devs](https://web.dio.me/track/formacao-chatgpt-devs) da DIO, com o professor **Felipe Silva Aguiar**.

As adaptações foram feitas para manter o projeto atualizado conforme a evolução da interface do ChatGPT e da API da OpenAI.

---

## 📌 Observações

- Para obter uma chave da OpenAI, acesse: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
- Você pode utilizar modelos como `gpt-3.5-turbo` ou `gpt-4`, dependendo do seu plano na OpenAI.
