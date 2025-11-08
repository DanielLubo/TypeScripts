(()=> {
    type User ={ 
        name: string,
        nickName: string,
        age: number,
        cats?: string[],
        boliviano: false,
    }

    const sofia: User = {
        name: 'Ana Sofia',
        nickName: 'SofiTs',
        age: 21,
        boliviano: false,
    }

    const { age, nickName } = sofia;

    console.log(age.toFixed(2), nickName.toUpperCase());


    const printUser = ({nickName, boliviano}:User): void => {
        return console.log(`Hola ${nickName}, eres boliviana? ${boliviano}`);
    }

    
    printUser(sofia);



    const cats = ['German Cat', 'Chinise Cat'];
    const [, chinise, ] = cats;
    console.log({chinise});


    const tupla: [string, boolean, number] = ['El pepe', true, 21];
    const [ nombre, pregunta, numero] = tupla;
    console.log({nombre, numero});


})();