(()=> {
    interface userPlayer {
        name: string,
        age?: number,
        cats: string[],
        getName?: () => string,
    };

    let user: userPlayer = {
        name : 'Ana',
        age: 21,
        cats: ['german Cat', 'Chinise Cat'],
    };


    
})();