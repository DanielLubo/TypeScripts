(()=> {
    
    type User = {
        name: string,
        nickName: string,
    }

    const ana: User = {
        name: 'Ana sofia',
        nickName: 'Sofi Ts',
    }

    const angela: User = {
        name: 'Angela Maria',
        nickName: 'Ange',
    }

    const sara: User = {
        name: 'Sara',
        nickName: 'Sara Sofia',
    }


    const listaUser: User[] = [ana, angela, sara];


    for (const user of listaUser) {
        console.log(user.name, user.nickName);
    }
})();   