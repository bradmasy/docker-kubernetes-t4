const express = require ('express');
const redis   = require ('redis');
const app     = express();
const process = require('process');
const client  = redis.createClient({
    //host:"https://my-redis-server.com",
    host:"redis-server" ,// this is in reference to the docker compose file, same name as the image specified there
    port: 6379
});

client.set("visits", 0 );

app.listen(8081,()=>{
    console.log('Server started on port 8081');
})

app.get("/",(req,res)=>{
    process.exit(0);
    client.get("visits",(err,visits)=>{
        res.send("Number of visits is "+ visits);
        client.set("visits", parseInt(visits) +1 );
    })
})