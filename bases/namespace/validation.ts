namespace Validations {


    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    };


    export const validateData = (date: Date): boolean => {
        return ( isNaN(date.valueOf())) ? false : true;
    };


}

console.log(Validations.validateText('hol'));