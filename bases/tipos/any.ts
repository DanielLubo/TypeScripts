(()=>{
    let avenger: number = 123;

    let exists: any = 456;


    console.log(avenger);
    console.log(exists);

    exists = `Hola`;
    console.log( (exists as string).charAt(2) );
})();