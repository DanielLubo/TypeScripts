(()=> {

    type car = {
        carroceria: string,
        modelo: string,
        antibalas: boolean,
        pasajeros: number,
        disparar?: () => void,
    }

    // Objetos
    const batimovil: car = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros:4
    };

    const bumblebee: car = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros:4,
        disparar(){ // El metodo disparar es opcional
            console.log("Disparando");
        }
    };


    type villians = {
        nombre: string,
        edad: number | undefined,
        mutante: boolean,
    }


    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos: villians[] = [
        {
            nombre:"Lex Luthor",
            edad: 54,
            mutante:false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        }
    ];


    type charls = {
        poder: string,
        estatura: number,
    }

    // Multiples tipos
    // cree dos tipos, uno para charles y otro para apocalipsis
    const charles: charls = {
        poder:"psiquico",
        estatura: 1.78
    };


    type end = {
        lider: boolean,
        miembros: string[],
    }

    const apocalipsis: end = {
        lider:true,
        miembros: ["Magneto","Tormenta","Psylocke","Angel"]
    }



    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique: (charls | end);

    mystique = charles;
    mystique = apocalipsis;

    console.log('Hoila');


})();