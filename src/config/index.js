module.exports = {
  apiUrl: process.env.API_URL,
  port: process.env.PORT,
  privateSecret: process.env.PRIVATE_SECRET,
  //cohere
  cohereApiKey: process.env.COHERE_API_KEY,
  //mongodb
  mongodbUri: process.env.MONGODB_URI,
  //google
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
}