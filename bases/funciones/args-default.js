(() => {
    const fullName = (firtsName, lastName, upper = false) => {
        if (upper) {
            return `hola ${firtsName} ${lastName || ' - '}, bienvenida`.toUpperCase();
        }
        else {
            return `Hola ${firtsName} ${lastName || ' - '}, Bienvenida`;
        }
    };
    const name = 'Ana';
    const lastName = 'Sofia';
    console.log(fullName(name, lastName));
})();
export {};
//# sourceMappingURL=args-default.js.map