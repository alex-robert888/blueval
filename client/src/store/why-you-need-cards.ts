
interface WhyYouNeedCard {
    heading: string;
    text: string;
    icon: string;
}

export default new Array<WhyYouNeedCard>(
    {
        heading: "Legea 330/2003",
        text: "“Societățile comerciale care deţin bunuri ori valori sunt obligate să asigure paza și protecția obiectivelor, bunurilor şi valorilor împotriva oricăror acţiuni ilicite", 
        icon: "law.svg"
    },

    {
        heading: "Sistem de alarmare",
        text: "Ai sau urmează să îți instalezi un sistem de alarmare împotriva efracţiei, iar proiectul acestuia trebuie avizat de structura de poliţie competentă teritorial.", 
        icon: "emergency.svg"
    },

    {
        heading: "Plan de pază",
        text: "Ai sau urmează să întocmești un plan de pază, iar acesta trebuie avizat de structura de poliţie competentă teritorial.", 
        icon: "camera.svg"
    },

    {
        heading: "3 ani de la ultima analiza",
        text: "Au trecut cel mult trei ani de la precedenta analiză de risc și este necesară corelarea acesteia cu dinamica parametrilor interni şi externi care generează şi/sau modifică", 
        icon: "3-ani.svg"
    },

    {
        heading: "60 de zile de la incident",
        text: "În cel mult 60 de zile de la producerea unui incident de securitate fizică (conf. Art.3 din Instrucțiunea M.A.I nr.9/20013).", 
        icon: "60-zile.svg"
    },
    
    {
        heading: "30 de zile de la modificări",
        text: "În maxim 30 de zile de la modificarea caracteristicilor arhitecturale, funcţionale sau a obiectului de activitate al unităţii.", 
        icon: "30-zile.svg"
    },
)