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
        nombre: "Txikori-belarra",
        srcImg: "img/abuelo.jpg"
    },
    {
        nombre: "Huntza",
        srcImg: "img/hiedra.jpg"
    },
    {
        nombre: "Belarra",
        srcImg: "img/hierba.jpg"
    },
    {
        nombre: "Goroldioa",
        srcImg: "img/musgo.jpg"
    },
    {
        nombre: "Iratzea",
        srcImg: "img/helecho.jpg"
    },
    {
        nombre: "Asunak",
        srcImg: "img/ortiga.jpg"
    },
    {
        nombre: "Marrubia",
        srcImg: "img/fresa.jpg"
    },
    {
        nombre: "Kamamila",
        srcImg: "img/manzanilla.jpg"
    },
    {
        nombre: "Laharra",
        srcImg: "img/zarza.jpg"
    },
    {
        nombre: "Ekilorea",
        srcImg: "img/girasol.jpg"
    },
    {
        nombre: "Aloe",
        srcImg: "img/aloe-vera.jpg"
    }
];

var listaPlantas = new Vue({
    el: "#plantsApp",
    data: function() {
        return {
            listaLoreak: objLoreak,
            listaZuhaitzak: objZuhaitzak,
            menuActivo: ""
        }
    },
    created: function() {
        this.menuActivo = "loreak";
    },
    methods: {
        setMenuActivo: function(m) {
            if (this.menuActivo !== m) {
                this.menuActivo = m;
            }
        }
    }
});
