(()=> {


    class Apocalipsis{
        static instance: Apocalipsis;

        private constructor(
            public name: string,
        ){}

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy el unico, el true');
            }

            return Apocalipsis.instance;
        }

        changeName(name: string): void{
            this.name = name;
        }


    }

    const theEnd = Apocalipsis.callApocalipsis();
    const theEnd2 = Apocalipsis.callApocalipsis();
    const theEnd3 = Apocalipsis.callApocalipsis();

    theEnd.changeName('Ekisde');

    console.log(theEnd, theEnd2, theEnd3);

    // const theEnd: Apocalipsis = new Apocalipsis('aaaa');
    // console.log(theEnd);

})();