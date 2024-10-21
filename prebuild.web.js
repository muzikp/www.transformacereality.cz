module.exports = async function(fileName, engine) {    
    if(fileName == "project.pug") {        
        const locals = await engine.locals();        
        for(let projekt of locals.projekty) {            
            await engine.compilePug(fileName, {projekt: projekt}, `/projekty/${projekt.id}.html`);
        }
        return true; /* prevents default compile behaviour; set to false if compilation should be run anyway */
    }    
    else if(fileName == "projekty.pug") {
        const locals = await engine.locals();
        await engine.compilePug(fileName, {projekty: locals.projekty}, `/projekty/index.html`);        
        return true; /* prevents default compile behaviour; set to false if compilation should be run anyway */
    }
    else {
        return false;
    }

}