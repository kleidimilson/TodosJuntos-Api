const Artesanato = require('../models/Artesanato');

module.exports = {


   async index(request, response){
     const artesanato = await Artesanato.find(); 
     return response.json(artesanato);
   },
   
   async delete(request, response){
    const { nome } = (request.body);
    artesanato = await Artesanato.deleteOne({nome});
    return response.json(artesanato);

},

   async store(request, response){
        const {  nome, cidade, contato, link, endereço, informações } = (request.body);
        
        let artesanato = await Artesanato.findOne({nome });

         
          if(!artesanato){
            
                
            artesanato = await Artesanato.create({
                nome,
                cidade,
                contato,
                link,
                endereço,
                informações
        
            });

          };
            
        
            return response.json(artesanato);

      
        
    }
};