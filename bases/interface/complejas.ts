(()=> {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullName?(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    
    
    const client: Client = {
        name: 'Ana Sofia',
        age: 21,
        address: {
            id: 125,
            zip: 'asdasd',
            city: 'Osaka'
        },

    }

    console.log(client);


    const client2: Client = {
        name: 'Melissa',
        age: 23,
        address:{
            id: 123,
            zip: 'ekisde',
            city: 'perulandia'
        }
    }
    



})();