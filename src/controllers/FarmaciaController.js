const Farmacia = require('../models/Farmacia');

module.exports = {


   async index(request, response){
     const farmacias = await Farmacia.find(); 
     return response.json(farmacias);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    farmacia = await Farmacia.deleteOne({nome});
    return response.json(farmacia);

},

   async store(request, response){
        const {  nome, cidade, contato,link, endereço, informações } = (request.body);
        
        let farmacia = await Farmacia.findOne({ nome });

         
          if(!farmacia){
            
                
            farmacia = await Farmacia.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                 informações
        
            });

          };
            
        
            return response.json(farmacia);

      
        
    }
};