(() => {
    class User {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, age) {
            this.name = name;
            this.team = team;
            this.age = age;
        }
        ;
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    User.avAge = 24;
    const daniel = new User('Daniel', 'yo', 21);
    console.log(daniel);
    console.log(daniel.bio());
    console.log(User.getAvgAge());
})();
export {};
//# sourceMappingURL=basica.js.map