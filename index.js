const fs = require('fs'),
	  ytdl = require("ytdl-core"),
	  readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma URL do Youtube:', async (answer) => {
  if(!ytdl.validateURL(answer)) return console.log('URL inválido.')
  ytdl(answer).pipe(fs.createWriteStream('video.mp4'));
  console.log('Vídeo baixado com sucesso.')
  
  rl.close();
});

