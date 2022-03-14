var keys = require('./keys.js');

var twitter_config = module.exports = {
    twitter: {
        consumer_key: keys.consumer_key,
        consumer_secret: keys.consumer_secret,
        access_token: keys.access_token,
        access_token_secret: keys.access_token_secret
      },
    topics: ['Zelenskyy', 'Putin', 'Ukraine', 'Russia', 'Refugee', 'Ukraine Russia War', 'NATO'],
    languages: ['en', 'es', 'de', 'fr', 'ar', 'uk', 'ru'],
    kinesis_delivery: 'Social-Media-Analytics-Tool-Stack-IngestionFirehose-uALWXopuGvMP'
}