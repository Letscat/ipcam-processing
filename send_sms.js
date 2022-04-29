const accountSid = 'AC84b0545a661d2de63b194fb604fa5d8b'; 
const authToken = '4334a997a1fa00f2c1ed1d18b70417c0'; 
const client = require('twilio')(accountSid, authToken); 

client.messages 
      .create({ 
         body: 'Guten Tag Herr Vincent. Wir haben eine Bewegung mit der Kamera festgestellt',  
         from: '+18142507702',     
         to: '+41767259592' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();