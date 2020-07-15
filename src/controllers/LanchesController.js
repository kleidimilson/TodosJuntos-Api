const Lanches = require('../models/Lanches');

module.exports = {


   async index(request, response){
     const lanches = await Lanches.find(); 
     return response.json(lanches);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    lanche = await Lanches.deleteOne({nome});
    return response.json(lanche);

},

   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações } = (request.body);
        
        let lanche = await Lanches.findOne({ nome });

         
          if(!lanche){
            
                
            lanche = await Lanches.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                informações
        
            });

          };
            
        
            return response.json(lanche);

      
        
    }
};