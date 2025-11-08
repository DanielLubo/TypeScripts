(()=> {

    class User {
        name;
        age;
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }

    class newUser extends User{
        pro;
        constructor(name, age, pro = true){
            super(name, age);
            this.pro = pro;
        }
    }

    const ana = new User('Ana Sofia', 21);
    console.log(ana);

    const sara = new newUser('Sara Maria', 22, false);
    console.log(sara);
    console.log(sara.name);

})();   