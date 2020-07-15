const Curso = require('../models/Curso');

module.exports = {


   async index(request, response){
     const cursos = await Curso.find(); 
     return response.json(cursos);
   },
    
   async delete(request, response){
    const { nome } = (request.body);
    cursos = await Curso.deleteOne({nome});
    return response.json(cursos);

},
   

   async store(request, response){
        const { nome, cidade, contato, link,endereço, informações } = (request.body);
        
        let curso = await Curso.findOne({ nome });

         
          if(!curso){
            
                
            curso = await Curso.create({
                nome,
                cidade,
                contato,
                link,
                endereço, 
                informações
        
            });

          };
            
        
            return response.json(curso);

      
        
    }
};