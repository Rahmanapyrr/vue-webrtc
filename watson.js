const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const authenticator = new IamAuthenticator({apikey: process.env.WATSON_ASSISTANT_APIKEY,
  });


  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2019-02-28',
    authenticator: authenticator,
    serviceUrl: process.env.WATSON_ASSISTANT_URL,
  });

//   router.get{"/session", async (res,res)=>{
//       try{
//           const session = await assistant.createSession ({
//               assistantId: process.env.WATSON_ASSISTANT_ID,
//           });
//           res.json(session["result"]);
//       }
//       catch (error){
//           res.send("There was an error in your request");
//           console.log(err);
//       }
//     }};

//     module.exports = router;