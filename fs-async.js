const fs = require('fs')

fs.readFile('./content/first.txt','utf8', (err, result) =>{ 
if(err)
    {
        console.log(err)
        return
    }
    const first = result
    fs.readFile('./content/test.txt', 'utf8', (err, result) => {

        if(err){
            console.log(err)
            return
        }

        fs.writeFile('./content/result-async.txt', `Here is the result via async: ${first} and ${result} `
        ,(err, result) =>{

            if(err)
            {
                console.log(err)
                return
            }
            
            fs.readFile('./content/result-async.txt', 'utf8', (err, result) => {
                if(err)
                {
                    console.log(err)
                    return
                }
                console.log(result)
            })
        })
    
   
    })
})