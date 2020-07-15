const Bebida = require('../models/Bebida');

module.exports = {


   async index(request, response){
     const bebidas = await Bebida.find(); 
     return response.json(bebidas);
   },
  
   async delete(request, response){
    const { nome } = (request.body);
    bebida = await Bebida.deleteOne({nome});
    return response.json(bebida);

    },

   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações } = (request.body);
        
        let bebida = await Bebida.findOne({ nome });

         
          if(!bebida){
            
                
            bebida = await Bebida.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                informações
        
            });

          };
            
        
            return response.json(bebida);

      
        
    }
};