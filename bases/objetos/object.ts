(() => {
    



    let user: {name: string, age?: number, items: string[], getName?: () => string} = {
        name : 'Ana',
        age: 21,
        items: ['german Cat', 'Chinise Cat']
    }

    user = {
        name: 'Sofia',
        age: 20,
        items: ['oiiau', 'banancry'],
        getName() {
            return this.name;
        },
    }
})()