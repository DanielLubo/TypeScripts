(()=> {
    
    class User {
        // private name: string;
        // public team?: string;
        // public age: number;
        static avAge: number = 24;
        static getAvgAge(){
            return this.name;
        }


        constructor( 
            private name: string, 
            public team: string, 
            public age?: number,
        ) { };


        public bio(){
            return `${this.name} (${this.team})`
        }


    }

    const daniel = new User('Daniel', 'yo', 21);
    console.log(daniel);

    console.log(daniel.bio());
    console.log(User.getAvgAge());

})();