let front =[
{"uid": "a","CorrectAnswer": "1"},
{"uid": "b","CorrectAnswer": "4"},
{"uid": "c","CorrectAnswer": "3"}, 
{"uid": "d","CorrectAnswer": "2"}, 
{"uid": "e","CorrectAnswer": "4"}, 
{"uid": "u","CorrectAnswer": "4"},
{"uid": "g","CorrectAnswer": "4"},
{"uid": "h","CorrectAnswer": "2"},
{"uid": "m","CorrectAnswer": "3"}
]
 let db =[
{"uid": "a","Question": " check 1 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "2"},
{"uid": "b","Question": " check 2 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "4"},
{"uid": "c","Question": " check 3 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "3"}, 
{"uid": "d","Question": " check 4 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "2"}, 
{"uid": "e","Question": " check 5 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "4"}, 
{"uid": "u","Question": " check 6 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "4"},
{"uid": "g","Question": " check 7 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "4"},
{ "uid": "h","Question":" check 8 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "2"},
{"uid": "m","Question": " check 9 ?","Answers": ["a", "B", "c", "d"],"CorrectAnswer": "1"}
]


function compareArrays(arr1, arr2) {
    const hashTable= {};
    let count = 0;
    // Store key-value pairs of arr1 in hash table
    for (let i = 0; i < arr1.length; i++) {
        const { uid, CorrectAnswer } = arr1[i];
      hashTable[uid] = CorrectAnswer;
    }
    
    // Check if each key-value pair in arr2 exists in hash table
    for (let i = 0; i < arr2.length; i++) {
        const { uid, CorrectAnswer } = arr2[i];
        if (hashTable[uid] === CorrectAnswer) {
            count++;
        }
    }
    console.log(hashTable)
 
    return count;
  }
console.log(compareArrays(front,db))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export const getCustomerProfile = tryCatch(async (req,res,next)=>{
//     let {cookieToken}=req.cookies
//     //  console.log(token)
    
//      let url1 = "https://ambrelamoney.coherentlab.com" 

//      let {token,customerId}=req.query
//      console.log(cookieToken == token)
//      if(cookieToken != token){
//         return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
//      }
//      let checkCustomerId = "AC2301000024"

//      if( checkCustomerId != customerId){
//         return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
//      }
//     //  console.log(token1,"i am token 1",token==token1);
//      const data1={
//         token,
//         checkCustomerId
//      }
//     const config = {
//         headers: {
//             "content-type": "application/json",
//         }
//     }

//     // const sendData = await axios.post(url1, data1, config)
//     // console.log(sendData)
//     res.send(sendData)
// })





// option:[{A:1},{b:2},{c:3},{d:4}]
// function f(){
//     var t = 10
    
//     return function g(){
//         console.log(t)
//     }
   
// }

// let x = f()
// let y = x()
//  console.log(y())







const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
});

Instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.request.use(
  (config) => {
   
      config.headers= {
        "Content-Type": "application/json",
        "Content-Length": bodyData.length,
        // "Host":"localHost",
        "User-Agent": "PostmanRuntime/7.30.0",
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "Connection": "keep-alive",
        "Authorization": `Bearer ${axios1?.data?.access_token}`,


      }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default  Instance