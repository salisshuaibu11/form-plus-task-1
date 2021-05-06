module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                bannerImage: "url('./assets/images/banner.png')",
                footerImage: "url('./assets/images/yahaya.png')",
                campaign: "url('./assets/images/campaign.png')",
                speech: "url('./assets/images/speech.png')",
                securityImage: "url('./assets/images/security.png')",
                security1: "url('./assets/images/security1.png')",
                yahaya: "url('./assets/images/yahaya.png')",
                un: "url('./assets/images/un.png')",
                flag: "url('./assets/images/flag.png')",
            }),
            backgroundOpacity: ['active'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
