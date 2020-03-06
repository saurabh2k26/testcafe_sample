/*fixture `Mocking demo test`
    .page `https://translate.google.co.in/?hl=en&tab=wT1#view=home&op=translate&sl=en&tl=es&text=love%20where%20you%20work`;

    test('Without Mocking', async t => {
        await t
        .wait(10000)
    })*/

////////////////////////////////////////////////////////////////
/*import { RequestMock  } from 'testcafe';

const mockedResponse = [[["amor donde trabajas","love where you work",null,null,3,null,null,null,[[["f16caa8d292961aa55f7ae83b3ec9001","en_es_2019q2.md"]
]
]
]
]
,null,"en",null,null,[["love where you work",null,[["hey",0,true,false]
,["amor en la que trabaja",0,true,false]
]
,[[0,19]
]
,"love where you work",0,0]
]
,1.0,[]
,[["en"]
,null,[1.0]
,["en"]
]
,null,null,null,null,null,null,null,null,null,[null,3]
]

const searchApiRegExp = new RegExp('https://translate.google.co.in/translate_a/single');

const mock = RequestMock()
    .onRequestTo(searchApiRegExp)
    .respond(JSON.stringify(mockedResponse), 200, {
        'access-control-allow-credentials': true,
        'access-control-allow-origin': '*',
        'content-type': 'application/json;charset=UTF-8',
      });

fixture('Mocking demo test')
    .page('https://translate.google.co.in/?hl=en&tab=wT1#view=home&op=translate&sl=en&tl=es&text=love%20where%20you%20work')
    .requestHooks(mock);

    test('With Mocking', async t => {
      await t
      .wait(10000)
});*/

////////////////////////////////////////////////////////////////
import { RequestLogger  } from 'testcafe';

const simpleLogger = RequestLogger(
  /.*/, {
      logResponseBody	: true,
      logResponseHeaders: true,
      stringifyResponseBody: true
  });

fixture('Logger demo test')
    .page('https://translate.google.co.in/?hl=en&tab=wT1#view=home&op=translate&sl=en&tl=es&text=love%20where%20you%20work')
    .requestHooks(simpleLogger);

    test('With Logging', async t => {
      await t
      .wait(1000)

      const logRecord = simpleLogger.requests;
      console.log(logRecord.length)
      for( var i=0; i<logRecord.length; i++){
      if(logRecord[i].request.url.includes('translate_a')){  
        console.log("********* url *********")       
        console.log(logRecord[i].request.url);   
        console.log("********* status code *********")         
        console.log(logRecord[i].response.statusCode);
        console.log("********* headers *********") 
        console.log(logRecord[i].response.headers);}}
    }
  ); 


    
