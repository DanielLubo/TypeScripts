(()=> {

    type userPlayer = {
        name: string,
        age?: number,
        cats: string[],
        getName?: () => string,
    };

    let myCustomVariable: (string | number | userPlayer) = 'Ana Sofia';
    console.log(typeof myCustomVariable);


    myCustomVariable = 21;

    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'el pepe',
        age: 21,
        cats: ['german cat', 'chinise cat'],
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})();