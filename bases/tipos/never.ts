(()=>{

    const msg = ( message: string):never => {
        throw new Error(message);
    };

    msg('Error en la funcion');
})();

