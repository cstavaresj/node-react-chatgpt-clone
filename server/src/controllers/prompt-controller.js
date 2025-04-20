const OpenAIWrapper = require("../config/openai");

async function sendText(req, res) {
try {
    const { prompt } = req.body;

    
    const response = await OpenAIWrapper.client().chat.completions.create(
		OpenAIWrapper.textCompletion({ prompt })
    );

    
    const chatResponse = response.choices[0].message.content;

    res.status(200).json({
		success: true,
		data: chatResponse
    });
    
	} catch (error) {
    console.error("Erro ao chamar OpenAI:", error);
    
    res.status(500).json({ error: "Erro ao processar o prompt" });
	}
}

module.exports = { sendText };
