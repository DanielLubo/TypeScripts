(() => {
    class User {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Hola el pepe');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Avatar extends User {
        constructor(name, realName, nose) {
            super(name, realName);
            this.nose = nose;
            console.log('Constructor del avatar  llamado xd');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(realName) {
            console.log('Se ha cambiado el nombre real');
            this.realName = realName;
        }
    }
    const daniel = new Avatar('Daniel', 'yo', true);
})();
export {};
//# sourceMappingURL=extends.js.map