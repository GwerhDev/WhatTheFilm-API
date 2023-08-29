const cohere = require('cohere-ai');
const { api_key } = require('./config');

cohere.init(api_key);

(async () => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: 'Controlador de una API que devuelve en qué plataforma se puede ver una película determinada.',
    max_tokens: 100,
    temperature: 0.1,
    k: 0,
    p: 1,
    frecuency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();