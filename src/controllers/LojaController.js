const Loja = require('../models/Lojas');

module.exports = {


   async index(request, response){
     const lojas = await Loja.find(); 
     return response.json(lojas);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    loja = await Loja.deleteOne({nome});
    return response.json(loja);

},

   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações } = (request.body);
        
        let loja = await Loja.findOne({ nome });

         
          if(!loja){
            
                
            loja = await Loja.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                informações
        
            });

          };
            
        
            return response.json(loja);

      
        
    }
};