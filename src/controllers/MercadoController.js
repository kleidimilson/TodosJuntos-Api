const Mercado = require('../models/Mercado');

module.exports = {


   async index(request, response){
     const mercados = await Mercado.find(); 
     return response.json(mercados);
   },
   

   async delete(request, response){
       const { nome } = (request.body);
       mercado = await Mercado.deleteOne({nome});
       return response.json(mercado);

   },
   

   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações } = (request.body);
        
        let mercado = await Mercado.findOne({ nome });

         
          if(!mercado){
            
                
            mercado = await Mercado.create({
                nome,
                cidade,
                contato,
                link,
                endereço, 
                informações
        
            });

          };
            
        
            return response.json(mercado);

      
        
    }
};