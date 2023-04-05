/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "poe-default": "rgb(127,127,127)",
        "poe-valuedefault": "rgb(255,255,255)",
        "poe-pink": "rgb(255,192,203)",
        "poe-dodgerblue": "rgb(30,144,255)",
        "poe-fire": "rgb(150,0,0)",
        "poe-cold": "rgb(54,100,146)",
        "poe-lightning": "rgb(255,215,0)",
        "poe-chaos": "rgb(208,32,144)",
        "poe-augmented": "rgb(136,136,255)",
        "poe-crafted": "rgb(184,218,242)",
        "poe-fractured": "rgb(162,145,98)",
        "poe-enchanted": "rgb(184,218,242)",
        "poe-hellscaped": "rgb(255,110,37)",
        "poe-unmet": "rgb(210,0,0)",
        "poe-uniqueitem": "rgb(175,96,37)",
        "poe-unique": "rgb(175,96,37)",
        "poe-rareitem": "rgb(255,255,119)",
        "poe-rare": "rgb(255,255,119)",
        "poe-magicitem": "rgb(136,136,255)",
        "poe-magic": "rgb(136,136,255)",
        "poe-whiteitem": "rgb(200,200,200)",
        "poe-normal": "rgb(200,200,200)",
        "poe-gemitem": "rgb(27,162,155)",
        "poe-gem": "rgb(27,162,155)",
        "poe-currencyitem": "rgb(170,158,130)",
        "poe-currency": "rgb(170,158,130)",
        "poe-questitem": "rgb(74,230,58)",
        "poe-quest": "rgb(74,230,58)",
        "poe-nemesismod": "rgb(255,200,0)",
        "poe-nemesismodoutline": "rgb(219,34,0)",
        "poe-talismanmod": "rgb(141,241,79)",
        "poe-talismanmodoutline": "rgb(0,0,0)",
        "poe-title": "rgb(231,180,120)",
        "poe-corrupted": "rgb(210,0,0)",
        "poe-favour": "rgb(170,158,130)",
        "poe-supporterpacknewitem": "rgb(180,96,0)",
        "poe-supporterpackitem": "rgb(163,141,109)",
        "poe-bloodlinemod": "rgb(210,0,220)",
        "poe-bloodlinemodoutline": "rgb(58,0,125)",
        "poe-tormentmod": "rgb(50,230,100)",
        "poe-tormentmodoutline": "rgb(0,78,117)",
        "poe-canttradeormodify": "rgb(210,0,0)",
        "poe-lockedtoaccount": "rgb(210,0,0)",
        "poe-divination": "rgb(14,186,255)",
        "poe-prophecy": "rgb(181,75,255)",
        "poe-essencemod": "rgb(164,210,255)",
        "poe-essencemodoutline": "rgb(0,41,82)",
        "poe-premiumchat": "rgb(253,242,126)",
        "poe-premiumchatoutline": "rgb(209,46,46)",
        "poe-uniquefoil": "rgb(130,173,106)",
        "poe-legacy": "rgb(212,145,63)",
        "poe-bestiarymod": "rgb(255,255,255)",
        "poe-bestiarymodoutline": "rgb(219,34,0)",
        "poe-blightmod": "rgb(255,255,255)",
        "poe-blightmodoutline": "rgb(215,0,0)",
        "poe-afflictionmod": "rgb(22,25,28)",
        "poe-afflictionmodoutline": "rgb(151,164,181)",
        "poe-stackitemlevel": "rgb(255,255,255)",
        "poe-harvestprimary": "rgb(100,111,73)",
        "poe-harvestsecondary": "rgb(83,130,161)",
        "poe-craftingcaster": "rgb(179,248,254)",
        "poe-craftingphysical": "rgb(199,157,147)",
        "poe-craftingfire": "rgb(255,154,119)",
        "poe-craftingcold": "rgb(147,216,255)",
        "poe-craftinglightning": "rgb(248,203,118)",
        "poe-craftingchaos": "rgb(216,167,211)",
        "poe-craftingspeed": "rgb(207,238,165)",
        "poe-craftingcrit": "rgb(178,167,214)",
        "poe-craftingred": "rgb(200,103,110)",
        "poe-craftingblue": "rgb(162,207,251)",
        "poe-craftinggreen": "rgb(134,189,163)",
        "poe-craftinglife": "rgb(201,110,110)",
        "poe-craftingdefences": "rgb(168,143,103)",
        "poe-craftingattack": "rgb(218,129,77)",
        "poe-heist": "rgb(25,30,25)",
        "poe-heiststolenitem": "rgb(210,0,0)",
        "poe-atlasmaven": "rgb(182,12,169)",
        "poe-ultimatumnumber": "rgb(254,92,81)",
        "poe-incursionunreachable": "rgb(90,90,90)",
        "poe-lockedinplaceitem": "rgb(127,127,127)",
        "poe-craftaffectremove": "rgb(254,153,0)",
        "poe-craftaffectwarning": "rgb(235,200,80)",
        "poe-craftaffectreroll": "rgb(254,153,0)",
        "poe-skillpopuptitle": "rgb(249,230,202)",
        "poe-disabledstats": "rgb(150,150,167)",
        "poe-skillextrainfo": "rgb(255,192,119)",
        "poe-fakeitemcount": "rgb(200,200,200)",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
  ],  
  daisyui: {
    styled: true,
    themes: [
      "dark"
    ],

    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "daisy-",
    darkTheme: "dark",
    
  },
}
