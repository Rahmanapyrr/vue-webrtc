const express = require("express");
const router = express.Router();
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const authenticator = new IamAuthenticator({apikey: process.env.WATSON_ASSISTANT_APIKEY,
  });


const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
  disableSslVerification: true,
});

// router.get("/session", async (req,res)=>{
//     try{
//         const session = await assistant.createSession ({
//             assistantId: process.env.WATSON_ASSISTANT_ID,
//         });
//         res.json(session["result"]);
//     }
//     catch (error){
//         res.send("There was an error in your request");
//         console.log(err);
//     }
//   });

  const analyzeParams = {
    'url': 'www.cnn.com',
    'features': {
      'entities': {
        'sentiment': true,
        'limit': 1
      }
    }
  };
  
  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      console.log(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });

module.exports = router;