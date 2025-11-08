(()=> {
    const fullName = (firtsName: string, lastName?: string): string => {
        return `Hola ${firtsName} ${lastName || ' - '}, Bienvenida`;
    }

    const name: string = 'Ana';
    const lastName: string = 'Sofia';

    console.log(fullName(name));
})();