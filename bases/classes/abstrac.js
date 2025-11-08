(() => {
    class User {
        constructor(name, lastName, age) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
        }
    }
    class Avatar extends User {
        saludar() {
            return `Hello World("print");`;
        }
    }
    const ana = new Avatar('Ana', 'Sofia', 21);
    const imprimirNombre = (character) => {
        console.log(character.name);
    };
    imprimirNombre(ana);
})();
export {};
//# sourceMappingURL=abstrac.js.map