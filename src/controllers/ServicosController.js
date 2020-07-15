const Servicos = require('../models/Servicos');

module.exports = {


   async index(request, response){
     const servicos = await Servicos.find(); 
     return response.json(servicos);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    servicos = await Servicos.deleteOne({nome});
    return response.json(servicos);

   },
   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações  } = (request.body);
        console.log(cidade);
        
        let servico = await Servicos.findOne({ nome });

         
          if(!servico){
            
                
            servico = await Servicos.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                 informações
        
            });

          };
            
        
            return response.json(servico);

      
        
    }
};