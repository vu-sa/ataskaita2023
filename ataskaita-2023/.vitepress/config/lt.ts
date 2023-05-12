import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ltConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "Ataskaita 2023",
    description: "VU Studentų atstovybės metų veiklos ataskaita už 2022-2023 m. kadenciją.",
    themeConfig: {
        darkModeSwitchLabel: 'Tamsus režimas',
        langMenuLabel: 'Kalba',
        docFooter: {
            prev: 'Ankstesnis',
            next: 'Kitas',
        },
        returnToTopLabel: 'Grįžti į viršų',
        sidebarMenuLabel: 'Turinys',
        outline: {
            label: 'Šiame puslapyje...',
        },
        logo: {
            light: '/img/logos/vusa.RGB.b.png',
            dark: '/img/logos/vusa.RGB.w.png',
        },
        nav: [
        //     { text: 'Sveikinimai', link: '/sveikinimai' },
            { text: 'Struktūros', link: '/vu-sa/strategija' },
            { text: 'Tikslai', link: '/mvp/strateginiai' },
            { text: 'Strateginės kryptys', items: [
                { text: 'Kokybiškos studijos ir joms pritaikyta aplinka', link: '/kokybiskos-studijos/nacionalinis' },
                { text: 'Stipri organizacija', link: '/stipri-organizacija/projektai' },
                { text: 'Darni universitetinė bendruomenė', link: '/darni-bendruomene/integracija' },
            ] },
            { text: 'Bendruomenė', link: '/bendruomene' },
        //     { text: 'Padėka', link: '/padeka' },

        ],

        sidebar: [
            
            {
                text: 'VU SA struktūros',
                items: [
                    { text: 'Parlamentas', link: '/vu-sa/parlamentas' },
                    { text: 'Taryba', link: '/vu-sa/taryba' },
                    { text: 'Institucinio stiprinimo fondas', link: '/vu-sa/isf' },
                    { text: 'Revizijos komisija', link: '/vu-sa/revizijos-komisija' },
                ]
            },
            {
                text: 'Metų veiklos plano įgyvendinimas 📝',
                items: [
                    { text: 'Strateginiai tikslai', link: '/mvp/strateginiai' },
                    { text: 'Padalinių tikslai', link: '/mvp/tikslai-padaliniuose' },
                ]
            },
            {
                text: 'Strateginių krypčių įgyvendinimas 🎯',
                items: [
                    {
                        text: 'Kokybiškos studijos ir joms pritaikyta aplinka',
                        collapsed: true,
                        items: [
                            { text: 'Nacionalinis ir miesto savivaldoje atstovavimas', link: '/kokybiskos-studijos/nacionalinis' },
                            { text: 'Atstovavimas VU', link: '/kokybiskos-studijos/vu' },
                            { text: 'Bendradarbiavimas', link: '/kokybiskos-studijos/bendradarbiavimas' },
                            { text: 'Tarptautinis bendradarbiavimas', link: '/kokybiskos-studijos/tarptautinis' },
                            { text: 'Raštai', link: '/kokybiskos-studijos/rastai' },
                        ]
                    },
                    {
                        text: 'Stipri organizacija',
                        collapsed: true,
                        items: [
                            { text: 'Projektai', link: '/stipri-organizacija/projektai' },
                            { text: 'Tyrimai ir analizės', link: '/stipri-organizacija/tyrimai' },
                            { text: 'Procesų atnaujinimas', link: '/stipri-organizacija/procesu-atnaujinimas' },
                            { text: 'Institucinio stiprinimo fondas', link: '/stipri-organizacija/isf' },
                        ]
                    },
                    {
                        text: 'Darni universitetinė bendruomenė',
                        collapsed: true,
                        items: [
                            { text: 'Renginiai', link: '/darni-bendruomene/renginiai' },
                            { text: 'Studentų (-čių) integracija', link: '/darni-bendruomene/integracija' },
                            { text: 'Programos, klubai ir projektai', link: '/darni-bendruomene/pkp' },
                        ]
                    },
                ]
            },
            {
                text: 'Dėkojame 💪',
                items: [
                    { text: 'VU SA bendruomenė', link: '/bendruomene' },
                    { text: 'Draugai ir ataskaitos projekto rengėjai', link: '/padeka' },
                ]
            }
        ],
    }
}

export default ltConfig
