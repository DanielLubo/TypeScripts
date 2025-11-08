(()=> {
    const fullName = (firtsName: string, lastName?: string, upper: boolean = false): string => {
        if(upper){
            return `hola ${firtsName} ${lastName || ' - '}, bienvenida`.toUpperCase();
        } else {
            return `Hola ${firtsName} ${lastName || ' - '}, Bienvenida`;
        }
    }

    const name: string = 'Ana';
    const lastName: string = 'Sofia';

    console.log(fullName(name, lastName,));
})();