objZuhaitzak = [
    {
        nombre: "Gaztainondoa",
        srcImg: "img/castanho.jpg"
    },
    {
        nombre: "Haritza",
        srcImg: "img/roble.jpg"
    },
    {
        nombre: "Pagoa",
        srcImg: "img/haya.jpg"
    },
    {
        nombre: "Makala",
        srcImg: "img/cipres.jpg"
    },
    {
        nombre: "Zume Negartia",
        srcImg: "img/sauce-lloron.jpg"
    },
    {
        nombre: "Urkia",
        srcImg: "img/abedul.jpg"
    },
    {
        nombre: "Urritza",
        srcImg: "img/avellano.jpg"
    },
    {
        nombre: "Intxaurrondoa",
        srcImg: "img/nogal.jpg"
    },
    {
        nombre: "Pinua",
        srcImg: "img/pino.jpg"
    },
    {
        nombre: "Astigarra",
        srcImg: "img/arce.jpg"
    },
    {
        nombre: "Sekuoia",
        srcImg: "img/sequoia.jpg"
    }
];

objLoreak = [
    {
        nombre: "Castaño",
        srcImg: "img/castanho.jpg"
    },
    {
        nombre: "Roble",
        srcImg: "img/roble.jpg"
    },
    {
        nombre: "Haya",
        srcImg: "img/haya.jpg"
    },
    {
        nombre: "Ciprés",
        srcImg: "img/cipres.jpg"
    },
    {
        nombre: "Sauce llorón",
        srcImg: "img/sauce-lloron.jpg"
    },
    {
        nombre: "Abedul",
        srcImg: "img/abedul.jpg"
    },
    {
        nombre: "Avellano",
        srcImg: "img/avellano.jpg"
    },
    {
        nombre: "Nogal",
        srcImg: "img/nogal.jpg"
    },
    {
        nombre: "Pino",
        srcImg: "img/pino.jpg"
    }
];

var listaPlantas = new Vue({
    el: "#plantsApp",
    data() {
        return {
            listaLoreak: objLoreak,
            listaZuhaitzak: objZuhaitzak,
            menuActivo: ""
        }
    },
    created() {
        this.menuActivo = "zuhaitzak";
    },
    methods: {
        setMenuActivo: function(m) {
            if (this.menuActivo !== m) {
                this.menuActivo = m;
            }
        }
    }
});
