(() => {


    abstract class User {
        constructor(
            public name: string,
            public lastName: string,
            public age: number,
        ){}
    }

    class Avatar extends User{
        saludar(): string{
            return `Hello World("print");`
        }
    }


    const ana: Avatar = new Avatar('Ana', 'Sofia', 21);
    
    // console.log(ana);
    // console.log(ana.saludar());


    const imprimirNombre = (character: User) => {
        console.log(character.name);
    }

    imprimirNombre(ana);

})();