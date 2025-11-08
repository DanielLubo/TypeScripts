(()=> {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `Hola ${firstName} ${restArgs.join(' ')}`;
    }

    const yo = fullName('Ana', 'Sofia', 'Salazar');
    console.log({yo});
})()