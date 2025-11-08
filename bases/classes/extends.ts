(()=> {

    class User {
        constructor(
            public name: string,
            public realName: string,
        ){  
            console.log('Hola el pepe');
        }

        private getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Avatar extends User{
        constructor(
            name: string,
            realName: string,
            public nose: boolean,
        ){
            super(name, realName);
            console.log('Constructor del avatar  llamado xd');
        }

        get fullName(): string{
            return `${this.name} - ${this.realName}`;
        }

        set fullName(realName: string){
            
            console.log('Se ha cambiado el nombre real');
            this.realName = realName;
        }
    }


    const daniel = new Avatar('Daniel', 'yo', true );
    // console.log(daniel);

    // console.log(daniel.fullName);
    // daniel.fullName = 'mi cara cuando';
    // console.log(daniel.fullName);

    



})();