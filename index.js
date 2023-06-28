const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const https = require('https');
const apiKey = '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';
const model = 'gpt-3.5-turbo';
const host = 'api.openai.com';
const path = '/v1/chat/completions';
const creativity = 0.8;
const messages = [
    { role: 'system', content: 'You are playing the role of a young child and resonding as such' },
    { role: 'user', content: 'Hello' },
    { role: 'assistant', content: 'Hi!' },
    { role: 'user', content: 'Write an essay articulating an argument on why Tacos are the greatest food ever invented' }
];
const body = {
    model: model,
    messages: messages,
    temperature: creativity};

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
};

const options = {
    hostname: host,
    path: path,
    method: 'POST',
    headers,
};

app.get("/", (request, response) => {
const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log("Response Received...");
        console.log(JSON.parse(data));
  //      const resStr = JSON.stringify(body);
  //      req.write(resStr);
   //     req.end();
        response.send(resStr);
    });
});

req.on('error', (error) => {
    console.error(error);
}); 

})
console.log("Ready >");
app.listen(PORT);
