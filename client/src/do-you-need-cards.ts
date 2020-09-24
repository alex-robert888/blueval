
interface DoYouNeedCards {
    color: string;
    icon: string;
    title: string;
    text: string;
    extraStylingToIcon: string;
}

export default Array<DoYouNeedCards>(
    {
        icon: 'law.svg',
        color: "#70B8FE",
        title: "Legea 330/2003",
        text: "“Societățile comerciale care deţin bunuri ori valori sunt obligate să asigure paza și protecția obiectivelor, bunurilor şi valorilor împotriva oricăror acţiuni ilicite care lezează dreptul de proprietate, precum şi protecția persoanelor împotriva oricăror acte ostile”.",  
        extraStylingToIcon: ""
    },

    {
        icon: 'emergency.svg',
        color: "#50DCDF",
        title: "Sistem de alarmare",
        text: "Ai sau urmează să îți instalezi un sistem de alarmare împotriva efracţiei, iar proiectul acestuia trebuie avizat de structura de poliţie competentă teritorial.",
        // extraStylingToIcon: "width: calc('#{$card-ai-nevoie-de-analiza-icon-width} - 0.5vw);'"  
        extraStylingToIcon: "width: 1.3vw;"
    },

    {
        icon: 'cam.svg',
        color: "#AFC1FB",
        title: "Plan de pază",
        text: "Ai sau urmează să întocmești un Plan de pază, iar acesta trebuie avizat de structura de poliţie competentă teritorial.",
        extraStylingToIcon: "marginLeft: 0.2vw;"  
    },

    {
        icon: '3ani.svg',
        color: "#86EFBE",
        title: "3 ani de la ultima analiza",
        text: "Au trecut cel mult trei ani de la precedenta analiză de risc și este necesară corelarea acesteia cu dinamica parametrilor interni şi externi care generează şi/sau modifică riscurile de la nivelul unităţii",
        extraStylingToIcon: ""    
    },

    {
        icon: '60zile.svg',
        color: "#CAB7EB",
        title: "60 de zile de la incident",
        text: "În cel mult 60 de zile de la producerea unui incident de securitate (conf. Art.3 din Instrucțiunea M.A.I nr.9/20013)",
        extraStylingToIcon: ""  
    },

    {
        icon: '30zile.svg',
        color: "#5298D6",
        title: "30 de zile de la modificări",
        text: "În maxim 30 de zile de la modificarea caracteristicilor arhitecturale, funcţionale sau a obiectului de activitate al unităţii.",
        extraStylingToIcon: ""  
    },
)