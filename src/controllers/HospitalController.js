const Hospital = require('../models/Hospital');

module.exports = {


   async index(request, response){
     const hospitais = await Hospital.find(); 
     return response.json(hospitais);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    hospital = await Hospital.deleteOne({nome});
    return response.json(hospital);

   },
   async store(request, response){
        const {  nome, cidade, contato,link, endereço, informações } = (request.body);
        
        let hospital = await Hospital.findOne({ nome });

         
          if(!hospital){
            
                
            hospital = await Hospital.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                 informações
        
            });

          };
            
        
            return response.json(hospital);

      
        
    }
};