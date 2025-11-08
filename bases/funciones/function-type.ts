(()=> {

    const addNumber = (a:number, b:number):number => a + b;
    const read = (name:string,):string => `El pepe ${name}`;
    const saveTheWorld = (): string => `El mundo esta salvado`;


    let myFunction: (xd:number, a:number) => number;
    //? let myFunction: () => string;
    
    let ekisde;

    //! myFunction = 10;
    //! console.log(typeof(myFunction));

    myFunction = addNumber;
    console.log(myFunction(2, 3));


    ekisde = read;
    console.log(ekisde('Yo'));
})()