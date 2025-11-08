(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const elPepe: string = `El Pepe`;

    const abc: number = 123;

    console.log(batman);
    console.log(elPepe);

    console.log(`I'm: ${elPepe} _ ${abc.toString()}`);

    console.log(batman[10]?.toUpperCase() || 'No esta disponible xd');
})();