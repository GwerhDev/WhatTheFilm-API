const cohere = require('cohere-ai');
const { cohereApiKey } = require('../config/');

cohere.init(cohereApiKey);

const aiRecommendation = async (query) => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: query,
    max_tokens: 400,
    temperature: 0.8,
    k: 0,
    p: 1,
    frecuency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  console.log(response);
  return response.body.generations[0].text
};

module.exports = {
  aiRecommendation
}