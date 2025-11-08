var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateData = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('hol'));
export {};
//# sourceMappingURL=validation.js.map