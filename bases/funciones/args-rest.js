(() => {
    const fullName = (firstName, ...restArgs) => {
        return `Hola ${firstName} ${restArgs.join(' ')}`;
    };
    const yo = fullName('Ana', 'Sofia', 'Salazar');
    console.log({ yo });
})();
export {};
//# sourceMappingURL=args-rest.js.map