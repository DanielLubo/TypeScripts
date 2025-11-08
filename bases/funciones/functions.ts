(()=> {
    const hero: string = 'Jhon Wick';



    /**
     * 
     * @param name {string} - nombre de la persona
     * @returns {string} 
     */
    const returnName = ( name: string): string => {
        return `Hola ${name}`;
    }

    console.log(returnName(hero));


})()