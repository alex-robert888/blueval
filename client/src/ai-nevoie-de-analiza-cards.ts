
interface AiNevoieDeAnalizaCard {
    color: string;
    icon: string;
    title: string;
    text: string;
}

export default Array<AiNevoieDeAnalizaCard>(
    {
        icon: 'law.svg',
        color: "#70B8FE",
        title: "Legea 330/2003",
        text: "“Societățile comerciale care deţin bunuri ori valori sunt obligate să asigure paza și protecția obiectivelor, bunurilor şi valorilor împotriva oricăror acţiuni ilicite care lezează dreptul de proprietate, precum şi protecția persoanelor împotriva oricăror acte ostile”."  
    },

    {
        icon: 'emergency.svg',
        color: "#50DCDF",
        title: "Sistem de alarmare",
        text: "Ai sau urmează să îți instalezi un sistem de alarmare împotriva efracţiei, iar proiectul acestuia trebuie avizat de structura de poliţie competentă teritorial."  
    },

    {
        icon: 'cam.svg',
        color: "#AFC1FB",
        title: "Plan de pază",
        text: "Ai sau urmează să întocmești un Plan de pază, iar acesta trebuie avizat de structura de poliţie competentă teritorial."  
    },

    {
        icon: '3ani.svg',
        color: "#86EFBE",
        title: "3 ani de la ultima analiza",
        text: "Au trecut cel mult trei ani de la precedenta analiză de risc și este necesară corelarea acesteia cu dinamica parametrilor interni şi externi care generează şi/sau modifică riscurile de la nivelul unităţii"  
    },

    {
        icon: '30zile.svg',
        color: "#B2E4F6",
        title: "60 de zile de la incident",
        text: "În cel mult 60 de zile de la producerea unui incident de securitate (conf. Art.3 din Instrucțiunea M.A.I nr.9/20013)"  
    },

    {
        icon: '60zile.svg',
        color: "#5298D6",
        title: "30 de zile de la modificări",
        text: "În maxim 30 de zile de la modificarea caracteristicilor arhitecturale, funcţionale sau a obiectului de activitate al unităţii."  
    },
)