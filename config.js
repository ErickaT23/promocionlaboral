const config = {
    event: {
        defaultEventId: "misxv-ana-maria-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Ana María Herrera Morales | Mis XV 2026",
        descripcion: "Mis Quince Años de Ana María Herrera Morales - 10 de Octubre 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Ana María & Herrera Morales",
        fecha: "10-10-2026",
        fechaVisible: "10.10.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia de La Merced",
            hora: "3:00 PM",
            direccion: "Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/n9k4w8ixKS7Rr4uz6"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Ruinas de la Recolección",
            hora: "6:00 PM",
            direccion: "Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/VdUh997QMwtf9dH56"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVanaMaria",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
