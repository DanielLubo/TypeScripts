(() => {

    interface Human {
        name: string;
        realName: string;
        mutantPower(id: number): string;

    }


    interface User{
        age: number;
    }

    // class Mutant implements Human, User{
    //     public age: number;
    //     public name: string;
    //     public realName: string;

    //     constructor(){
    //         this.age;

    //     }

    //     mutantPower(id: number): string {
    //         return `${this.name}`;
    //     }
    // }

})();