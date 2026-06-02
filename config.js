const config = {
    event: {
        defaultEventId: "promocion-anthonyjr-2026",
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
        titulo: "Anthony Jr. Lopez | Promoción Laboral 2026",
        descripcion: "Celebración de Promoción Laboral de Anthony Jr. Lopez - 27 de Junio 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Anthony Jr. Lopez",
        fecha: "27-06-2026",
        fechaVisible: "27.06.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        recepcion: {
            titulo: "Recepción",
            lugar: "Vista Penthouse Ballroom & Catering",
            hora: "7:00 PM",
            direccion: "27-05 39th Ave, Long Island City, NY 11101, United States",
            ubicacionUrl: "https://maps.apple/p/_pXDYRpviixPmz"
        }
    },

    textos: {
        mensajeInvitado: "Tu presencia hace este logro aún más especial",
        mensajePases: "Hemos reservado para ti {pases} lugar(es)"
    },

    footer: {
        hashtag: "#MisXVanaMaria",
        instagramUrl: "https://instagram.com/thetwodesign",
        facebookUrl: "https://facebook.com/thetwodesign",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
