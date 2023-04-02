export interface PathOfProfitRecipe {
  name: string;
  cost: number;
  revenue: number;
  profit: number;
  costItems: PathOfProfitRecipeItem[];
  revenueItems: PathOfProfitRecipeItem[];
  roi: number;
  runs: number;
  info?:string;
}
export interface PathOfProfitRecipeItem{
  name: string;
  value: number;
  links?: number;
  mapTier?: number;
  detailsId?: string;
  count: number;
  total: number;
  variant?: string;
}

export const Bestiary: PathOfProfitRecipe[] = [
  {
    "name": "Farrul, First of the Plains",
    "cost": 117.84,
    "revenue": 171.19580000000002,
    "profit": 53.355800000000016,
    "costItems": [
      {
        "name": "Farric Tiger Alpha",
        "value": 117.84,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-tiger-alpha",
        "count": 1,
        "total": 117.84
      }
    ],
    "revenueItems": [
      {
        "name": "Farrul's Fur",
        "value": 455,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farruls-fur-triumphant-lamellar",
        "count": 12,
        "total": 5460
      },
      {
        "name": "Farrul's Chase",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farruls-chase-slink-boots",
        "count": 27,
        "total": 135
      },
      {
        "name": "Farrul's Bite",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farruls-bite-harlequin-mask",
        "count": 38,
        "total": 380
      },
      {
        "name": "Farrul's Pounce",
        "value": 4.46,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farruls-pounce-hydrascale-gauntlets",
        "count": 23,
        "total": 102.58
      },
      {
        "name": "Farrul, First of the Plains",
        "value": 110.42,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farrul-first-of-the-plains",
        "count": 100,
        "total": 11042
      }
    ],
    "roi": 45.278173794976254,
    "runs": 100
  },
  {
    "name": "Craiceann, First of the Deep",
    "cost": 130,
    "revenue": 54.1624,
    "profit": -75.83760000000001,
    "costItems": [
      {
        "name": "Craicic Spider Crab",
        "value": 130,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craicic-spider-crab",
        "count": 1,
        "total": 130
      }
    ],
    "revenueItems": [
      {
        "name": "Craiceann's Carapace",
        "value": 28.66,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craiceanns-carapace-golden-plate",
        "count": 24,
        "total": 687.84
      },
      {
        "name": "Craiceann's Chitin",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craiceanns-chitin-magistrate-crown",
        "count": 27,
        "total": 270
      },
      {
        "name": "Craiceann's Pincers",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craiceanns-pincers-titan-gauntlets",
        "count": 29,
        "total": 290
      },
      {
        "name": "Craiceann's Tracks",
        "value": 10.92,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craiceanns-tracks-goliath-greaves",
        "count": 20,
        "total": 218.4
      },
      {
        "name": "Craiceann, First of the Deep",
        "value": 39.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craiceann-first-of-the-deep",
        "count": 100,
        "total": 3950
      }
    ],
    "roi": -58.336615384615385,
    "runs": 100
  },
  {
    "name": "Saqawal, First of the Sky",
    "cost": 64.97,
    "revenue": 60.109899999999996,
    "profit": -4.860100000000003,
    "costItems": [
      {
        "name": "Saqawine Rhex",
        "value": 64.97,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawine-rhex",
        "count": 1,
        "total": 64.97
      }
    ],
    "revenueItems": [
      {
        "name": "Saqawal's Winds",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawals-winds-soldier-gloves",
        "count": 24,
        "total": 120
      },
      {
        "name": "Saqawal's Flock",
        "value": 9.16,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawals-flock-silken-hood",
        "count": 13,
        "total": 119.08
      },
      {
        "name": "Saqawal's Nest",
        "value": 99.61,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawals-nest-blood-raiment",
        "count": 31,
        "total": 3087.91
      },
      {
        "name": "Saqawal's Talons",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawals-talons-hydrascale-boots",
        "count": 32,
        "total": 96
      },
      {
        "name": "Saqawal, First of the Sky",
        "value": 25.88,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawal-first-of-the-sky",
        "count": 100,
        "total": 2588
      }
    ],
    "roi": -7.480529475142378,
    "runs": 100
  },
  {
    "name": "Fenumus, First of the Night",
    "cost": 65.53,
    "revenue": 105.63,
    "profit": 40.099999999999994,
    "costItems": [
      {
        "name": "Fenumal Hybrid Arachnid",
        "value": 65.53,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumal-hybrid-arachnid",
        "count": 1,
        "total": 65.53
      }
    ],
    "revenueItems": [
      {
        "name": "Fenumus' Shroud",
        "value": 13.65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumus-shroud-widowsilk-robe",
        "count": 14,
        "total": 191.1
      },
      {
        "name": "Fenumus' Spinnerets",
        "value": 17.72,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumus-spinnerets-assassins-boots",
        "count": 23,
        "total": 407.55999999999995
      },
      {
        "name": "Fenumus' Toxins",
        "value": 6.02,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumus-toxins-necromancer-circlet",
        "count": 27,
        "total": 162.54
      },
      {
        "name": "Fenumus' Weave",
        "value": 20.55,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumus-weave-carnal-mitts",
        "count": 36,
        "total": 739.8000000000001
      },
      {
        "name": "Fenumus, First of the Night",
        "value": 90.62,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumus-first-of-the-night",
        "count": 100,
        "total": 9062
      }
    ],
    "roi": 61.19334655882801,
    "runs": 100
  }
]

export const BestiaryFlips: PathOfProfitRecipe[]=[
  {
    "name": "Xoph's Pure Breachstone",
    "cost": 9,
    "revenue": 50,
    "profit": 41,
    "costItems": [
      {
        "name": "Xoph's Breachstone",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-breachstone",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Xoph's Pure Breachstone",
        "value": 50,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-pure-breachstone",
        "count": 1,
        "total": 50
      }
    ],
    "roi": 455.55555555555554,
    "runs": 1
  },
  {
    "name": "Tul's Pure Breachstone",
    "cost": 9,
    "revenue": 50,
    "profit": 41,
    "costItems": [
      {
        "name": "Tul's Breachstone",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tuls-breachstone",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Tul's Pure Breachstone",
        "value": 50,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tuls-pure-breachstone",
        "count": 1,
        "total": 50
      }
    ],
    "roi": 455.55555555555554,
    "runs": 1
  },
  {
    "name": "Esh's Pure Breachstone",
    "cost": 8,
    "revenue": 50,
    "profit": 42,
    "costItems": [
      {
        "name": "Esh's Breachstone",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-breachstone",
        "count": 1,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Esh's Pure Breachstone",
        "value": 50,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-pure-breachstone",
        "count": 1,
        "total": 50
      }
    ],
    "roi": 525,
    "runs": 1
  },
  {
    "name": "Uul-Netol's Pure Breachstone",
    "cost": 20,
    "revenue": 75,
    "profit": 55,
    "costItems": [
      {
        "name": "Uul-Netol's Breachstone",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-breachstone",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Uul-Netol's Pure Breachstone",
        "value": 75,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-pure-breachstone",
        "count": 1,
        "total": 75
      }
    ],
    "roi": 275,
    "runs": 1
  },
  {
    "name": "Chayula's Pure Breachstone",
    "cost": 47.8421052631579,
    "revenue": 118.9090909090909,
    "profit": 71.06698564593302,
    "costItems": [
      {
        "name": "Chayula's Breachstone",
        "value": 47.8421052631579,
        "links": 0,
        "mapTier": 0,
        "detailsId": "chayulas-breachstone",
        "count": 1,
        "total": 47.8421052631579
      }
    ],
    "revenueItems": [
      {
        "name": "Chayula's Pure Breachstone",
        "value": 118.9090909090909,
        "links": 0,
        "mapTier": 0,
        "detailsId": "chayulas-pure-breachstone",
        "count": 1,
        "total": 118.9090909090909
      }
    ],
    "roi": 148.54485448544855,
    "runs": 1
  }
]

export const BlessingFlips: PathOfProfitRecipe[] = [
  {
    "name": "Xoph's Nurture",
    "cost": 10,
    "revenue": 5,
    "profit": -5,
    "costItems": [
      {
        "name": "Xoph's Inception",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-inception-bone-bow",
        "count": 1,
        "total": 1
      },
      {
        "name": "Blessing of Xoph",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-xoph",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Xoph's Nurture",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-nurture-citadel-bow",
        "count": 1,
        "total": 5
      }
    ],
    "roi": -50,
    "runs": 1
  },
  {
    "name": "The Formless Inferno",
    "cost": 11,
    "revenue": 7,
    "profit": -4,
    "costItems": [
      {
        "name": "The Formless Flame",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-formless-flame-siege-helmet",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Xoph",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-xoph",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "The Formless Inferno",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-formless-inferno-royal-burgonet",
        "count": 1,
        "total": 7
      }
    ],
    "roi": -36.36363636363637,
    "runs": 1
  },
  {
    "name": "Xoph's Blood",
    "cost": 13,
    "revenue": 25,
    "profit": 12,
    "costItems": [
      {
        "name": "Xoph's Heart",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-heart-amber-amulet",
        "count": 1,
        "total": 4
      },
      {
        "name": "Blessing of Xoph",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-xoph",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Xoph's Blood",
        "value": 25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-blood-amber-amulet",
        "count": 1,
        "total": 25
      }
    ],
    "roi": 92.3076923076923,
    "runs": 1
  },
  {
    "name": "Tulfall",
    "cost": 11,
    "revenue": 4,
    "profit": -7,
    "costItems": [
      {
        "name": "Tulborn",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tulborn-spiraled-wand",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Tul",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-tul",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Tulfall",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tulfall-tornado-wand",
        "count": 1,
        "total": 4
      }
    ],
    "roi": -63.63636363636363,
    "runs": 1
  },
  {
    "name": "The Perfect Form",
    "cost": 11,
    "revenue": 8,
    "profit": -3,
    "costItems": [
      {
        "name": "The Snowblind Grace",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-snowblind-grace-coronal-leather",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Tul",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-tul",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "The Perfect Form",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-perfect-form-zodiac-leather",
        "count": 1,
        "total": 8
      }
    ],
    "roi": -27.27272727272727,
    "runs": 1
  },
  {
    "name": "The Pandemonius",
    "cost": 12,
    "revenue": 18,
    "profit": 6,
    "costItems": [
      {
        "name": "The Halcyon",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-halcyon-jade-amulet",
        "count": 1,
        "total": 3
      },
      {
        "name": "Blessing of Tul",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-tul",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "The Pandemonius",
        "value": 18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-pandemonius-jade-amulet",
        "count": 1,
        "total": 18
      }
    ],
    "roi": 50,
    "runs": 1
  },
  {
    "name": "Hand of Wisdom and Action",
    "cost": 9,
    "revenue": 10,
    "profit": 1,
    "costItems": [
      {
        "name": "Hand of Thought and Motion",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hand-of-thought-and-motion-blinder",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Esh",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-esh",
        "count": 1,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Hand of Wisdom and Action",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hand-of-wisdom-and-action-imperial-claw",
        "count": 1,
        "total": 10
      }
    ],
    "roi": 11.11111111111111,
    "runs": 1
  },
  {
    "name": "Esh's Visage",
    "cost": 10,
    "revenue": 8,
    "profit": -2,
    "costItems": [
      {
        "name": "Esh's Mirror",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-mirror-thorium-spirit-shield",
        "count": 1,
        "total": 3
      },
      {
        "name": "Blessing of Esh",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-esh",
        "count": 1,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Esh's Visage",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-visage-vaal-spirit-shield",
        "count": 1,
        "total": 8
      }
    ],
    "roi": -20,
    "runs": 1
  },
  {
    "name": "Choir of the Storm",
    "cost": 9,
    "revenue": 20,
    "profit": 11,
    "costItems": [
      {
        "name": "Voice of the Storm",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voice-of-the-storm-lapis-amulet",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Esh",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-esh",
        "count": 1,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Choir of the Storm",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "choir-of-the-storm-lapis-amulet",
        "count": 1,
        "total": 20
      }
    ],
    "roi": 122.22222222222223,
    "runs": 1
  },
  {
    "name": "Uul-Netol's Embrace",
    "cost": 21,
    "revenue": 10,
    "profit": -11,
    "costItems": [
      {
        "name": "Uul-Netol's Kiss",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-kiss-labrys",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Uul-Netol",
        "value": 19,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-uul-netol",
        "count": 1,
        "total": 19
      }
    ],
    "revenueItems": [
      {
        "name": "Uul-Netol's Embrace",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-embrace-vaal-axe",
        "count": 1,
        "total": 10
      }
    ],
    "roi": -52.38095238095239,
    "runs": 1
  },
  {
    "name": "The Red Trail",
    "cost": 21,
    "revenue": 10,
    "profit": -11,
    "costItems": [
      {
        "name": "The Infinite Pursuit",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-infinite-pursuit-goliath-greaves",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Uul-Netol",
        "value": 19,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-uul-netol",
        "count": 1,
        "total": 19
      }
    ],
    "revenueItems": [
      {
        "name": "The Red Trail",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-red-trail-titan-greaves",
        "count": 1,
        "total": 10
      }
    ],
    "roi": -52.38095238095239,
    "runs": 1
  },
  {
    "name": "The Surrender",
    "cost": 39,
    "revenue": 69.71,
    "profit": 30.709999999999994,
    "costItems": [
      {
        "name": "The Anticipation",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-anticipation-ezomyte-tower-shield",
        "count": 1,
        "total": 20
      },
      {
        "name": "Blessing of Uul-Netol",
        "value": 19,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-uul-netol",
        "count": 1,
        "total": 19
      }
    ],
    "revenueItems": [
      {
        "name": "The Surrender",
        "value": 69.71,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-surrender-ezomyte-tower-shield",
        "count": 1,
        "total": 69.71
      }
    ],
    "roi": 78.74358974358972,
    "runs": 1
  },
  {
    "name": "United in Dream",
    "cost": 22.28,
    "revenue": 24,
    "profit": 1.7199999999999989,
    "costItems": [
      {
        "name": "Severed in Sleep",
        "value": 2.28,
        "links": 0,
        "mapTier": 0,
        "detailsId": "severed-in-sleep-cutlass",
        "count": 1,
        "total": 2.28
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "United in Dream",
        "value": 24,
        "links": 0,
        "mapTier": 0,
        "detailsId": "united-in-dream-cutlass",
        "count": 1,
        "total": 24
      }
    ],
    "roi": 7.719928186714537,
    "runs": 1
  },
  {
    "name": "Skin of the Lords",
    "cost": 20,
    "revenue": 0,
    "profit": -20,
    "costItems": [
      {
        "name": "Skin of the Loyal",
        "value": 0,
        "count": 1,
        "total": 0
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Skin of the Lords",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": -100,
    "runs": 1
  },
  {
    "name": "Presence of Chayula",
    "cost": 22,
    "revenue": 35,
    "profit": 13,
    "costItems": [
      {
        "name": "Eye of Chayula",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eye-of-chayula-onyx-amulet",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Presence of Chayula",
        "value": 35,
        "links": 0,
        "mapTier": 0,
        "detailsId": "presence-of-chayula-onyx-amulet",
        "count": 1,
        "total": 35
      }
    ],
    "roi": 59.09090909090909,
    "runs": 1
  },
  {
    "name": "The Red Nightmare",
    "cost": 24,
    "revenue": 31.55,
    "profit": 7.550000000000001,
    "costItems": [
      {
        "name": "The Red Dream",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-red-dream-crimson-jewel",
        "count": 1,
        "total": 4
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "The Red Nightmare",
        "value": 31.55,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-red-nightmare-crimson-jewel",
        "count": 1,
        "total": 31.55
      }
    ],
    "roi": 31.45833333333334,
    "runs": 1
  },
  {
    "name": "The Green Nightmare",
    "cost": 23,
    "revenue": 20,
    "profit": -3,
    "costItems": [
      {
        "name": "The Green Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-green-dream-viridian-jewel",
        "count": 1,
        "total": 3
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "The Green Nightmare",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-green-nightmare-viridian-jewel",
        "count": 1,
        "total": 20
      }
    ],
    "roi": -13.043478260869565,
    "runs": 1
  },
  {
    "name": "The Blue Nightmare",
    "cost": 23,
    "revenue": 20,
    "profit": -3,
    "costItems": [
      {
        "name": "The Blue Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-blue-dream-cobalt-jewel",
        "count": 1,
        "total": 3
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "The Blue Nightmare",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-blue-nightmare-cobalt-jewel",
        "count": 1,
        "total": 20
      }
    ],
    "roi": -13.043478260869565,
    "runs": 1
  }
]

export const Branch: PathOfProfitRecipe[]  = [
  {
    "name": "Tul's Breachstone",
    "cost": 9,
    "revenue": 8.73,
    "profit": -0.2699999999999996,
    "costItems": [
      {
        "name": "Tul's Breachstone",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tuls-breachstone",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Blessing of Tul",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-tul",
        "count": 51,
        "total": 459
      },
      {
        "name": "Tulborn",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tulborn-spiraled-wand",
        "count": 33,
        "total": 66
      },
      {
        "name": "The Halcyon",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-halcyon-jade-amulet",
        "count": 3,
        "total": 9
      },
      {
        "name": "The Snowblind Grace",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-snowblind-grace-coronal-leather",
        "count": 17,
        "total": 34
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 3,
        "total": 9
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 21,
        "total": 168
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 2,
        "total": 80
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 1,
        "total": 48
      }
    ],
    "roi": -2.9999999999999956,
    "runs": 100
  },
  {
    "name": "Esh's Breachstone",
    "cost": 8,
    "revenue": 8.08,
    "profit": 0.08000000000000007,
    "costItems": [
      {
        "name": "Esh's Breachstone",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-breachstone",
        "count": 1,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Blessing of Esh",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-esh",
        "count": 55,
        "total": 385
      },
      {
        "name": "Hand of Thought and Motion",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hand-of-thought-and-motion-blinder",
        "count": 29,
        "total": 58
      },
      {
        "name": "Esh's Mirror",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eshs-mirror-thorium-spirit-shield",
        "count": 14,
        "total": 42
      },
      {
        "name": "Voice of the Storm",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voice-of-the-storm-lapis-amulet",
        "count": 9,
        "total": 18
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 3,
        "total": 9
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 21,
        "total": 168
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 2,
        "total": 80
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 1,
        "total": 48
      }
    ],
    "roi": 1.0000000000000009,
    "runs": 100
  },
  {
    "name": "Xoph's Breachstone",
    "cost": 9,
    "revenue": 8.22,
    "profit": -0.7799999999999994,
    "costItems": [
      {
        "name": "Xoph's Breachstone",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-breachstone",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Blessing of Xoph",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-xoph",
        "count": 49,
        "total": 441
      },
      {
        "name": "Xoph's Inception",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-inception-bone-bow",
        "count": 33,
        "total": 33
      },
      {
        "name": "The Formless Flame",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-formless-flame-siege-helmet",
        "count": 11,
        "total": 22
      },
      {
        "name": "Xoph's Heart",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-heart-amber-amulet",
        "count": 3,
        "total": 12
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 6,
        "total": 18
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 21,
        "total": 168
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 2,
        "total": 80
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 1,
        "total": 48
      }
    ],
    "roi": -8.66666666666666,
    "runs": 100
  },
  {
    "name": "Uul-Netol's Breachstone",
    "cost": 20,
    "revenue": 14.02,
    "profit": -5.98,
    "costItems": [
      {
        "name": "Uul-Netol's Breachstone",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-breachstone",
        "count": 1,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Blessing of Uul-Netol",
        "value": 19,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-uul-netol",
        "count": 45,
        "total": 855
      },
      {
        "name": "Uul-Netol's Kiss",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "uul-netols-kiss-labrys",
        "count": 10,
        "total": 20
      },
      {
        "name": "The Infinite Pursuit",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-infinite-pursuit-goliath-greaves",
        "count": 41,
        "total": 82
      },
      {
        "name": "The Anticipation",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-anticipation-ezomyte-tower-shield",
        "count": 7,
        "total": 140
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 3,
        "total": 9
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 21,
        "total": 168
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 2,
        "total": 80
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 1,
        "total": 48
      }
    ],
    "roi": -29.900000000000006,
    "runs": 100
  },
  {
    "name": "Chayula's Breachstone",
    "cost": 47.8421052631579,
    "revenue": 17.293918128654973,
    "profit": -30.548187134502925,
    "costItems": [
      {
        "name": "Chayula's Breachstone",
        "value": 47.8421052631579,
        "links": 0,
        "mapTier": 0,
        "detailsId": "chayulas-breachstone",
        "count": 1,
        "total": 47.8421052631579
      }
    ],
    "revenueItems": [
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 171,
        "total": 3420
      },
      {
        "name": "Skin of the Loyal",
        "value": 13.36,
        "links": 6,
        "mapTier": 0,
        "detailsId": "skin-of-the-loyal-simple-robe-6l",
        "count": 154,
        "total": 2057.44
      },
      {
        "name": "Severed in Sleep",
        "value": 2.28,
        "links": 0,
        "mapTier": 0,
        "detailsId": "severed-in-sleep-cutlass",
        "count": 86,
        "total": 196.07999999999998
      },
      {
        "name": "The Red Dream",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-red-dream-crimson-jewel",
        "count": 22,
        "total": 88
      },
      {
        "name": "The Green Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-green-dream-viridian-jewel",
        "count": 16,
        "total": 48
      },
      {
        "name": "The Blue Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-blue-dream-cobalt-jewel",
        "count": 26,
        "total": 78
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 9,
        "total": 27
      }
    ],
    "roi": -63.85209632074318,
    "runs": 342
  }
];

export const DivinationFlips: PathOfProfitRecipe[] = [
  {
    "name": "The Doctor",
    "cost": 15729.6,
    "revenue": 15951.13,
    "profit": 221.52999999999884,
    "costItems": [
      {
        "name": "The Doctor",
        "value": 1966.2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-doctor",
        "count": 8,
        "total": 15729.6
      }
    ],
    "revenueItems": [
      {
        "name": "Headhunter",
        "value": 15951.13,
        "links": 0,
        "mapTier": 0,
        "detailsId": "headhunter-leather-belt",
        "count": 1,
        "total": 15951.13
      }
    ],
    "roi": 1.4083638490489194,
    "runs": 1
  },
  {
    "name": "The Fiend",
    "cost": 14515.599999999999,
    "revenue": 15951.13,
    "profit": 1435.5300000000007,
    "costItems": [
      {
        "name": "The Fiend",
        "value": 1319.6,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-fiend",
        "count": 11,
        "total": 14515.599999999999
      }
    ],
    "revenueItems": [
      {
        "name": "Headhunter",
        "value": 15951.13,
        "links": 0,
        "mapTier": 0,
        "detailsId": "headhunter-leather-belt",
        "count": 1,
        "total": 15951.13
      }
    ],
    "roi": 9.889567086444934,
    "runs": 1
  },
  {
    "name": "Beauty Through Death",
    "cost": 50,
    "revenue": 0,
    "profit": -50,
    "costItems": [
      {
        "name": "Beauty Through Death",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "beauty-through-death",
        "count": 5,
        "total": 50
      }
    ],
    "revenueItems": [
      {
        "name": "The Queen's Sacrifice",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": -100,
    "runs": 1
  },
  {
    "name": "Succor of the Sinless",
    "cost": 950.0999999999999,
    "revenue": 1055.68,
    "profit": 105.58000000000015,
    "costItems": [
      {
        "name": "Succor of the Sinless",
        "value": 158.35,
        "links": 0,
        "mapTier": 0,
        "detailsId": "succor-of-the-sinless",
        "count": 6,
        "total": 950.0999999999999
      }
    ],
    "revenueItems": [
      {
        "name": "Bottled Faith",
        "value": 1055.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bottled-faith",
        "count": 1,
        "total": 1055.68
      }
    ],
    "roi": 11.112514472160843,
    "runs": 1
  },
  {
    "name": "The Immortal",
    "cost": 5146.4,
    "revenue": 5410.36,
    "profit": 263.96000000000004,
    "costItems": [
      {
        "name": "The Immortal",
        "value": 514.64,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-immortal",
        "count": 10,
        "total": 5146.4
      }
    ],
    "revenueItems": [
      {
        "name": "House of Mirrors",
        "value": 5410.36,
        "links": 0,
        "mapTier": 0,
        "detailsId": "house-of-mirrors",
        "count": 1,
        "total": 5410.36
      }
    ],
    "roi": 5.129022229131045,
    "runs": 1
  },
  {
    "name": "The Craving",
    "cost": 4.44,
    "revenue": 3,
    "profit": -1.4400000000000004,
    "costItems": [
      {
        "name": "The Craving",
        "value": 1.11,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-craving",
        "count": 4,
        "total": 4.44
      }
    ],
    "revenueItems": [
      {
        "name": "Unending Hunger",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "unending-hunger-cobalt-jewel",
        "count": 1,
        "total": 3
      }
    ],
    "roi": -32.43243243243244,
    "runs": 1
  },
  {
    "name": "The Iron Bard",
    "cost": 0,
    "revenue": 0,
    "profit": 0,
    "costItems": [
      {
        "name": "The Iron Bard",
        "value": 0,
        "count": 9,
        "total": 0
      }
    ],
    "revenueItems": [
      {
        "name": "Trash to Treasure",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": 0,
    "runs": 1
  },
  {
    "name": "Immortal Resolve",
    "cost": 12,
    "revenue": 0,
    "profit": -12,
    "costItems": [
      {
        "name": "Immortal Resolve",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "immortal-resolve",
        "count": 6,
        "total": 12
      }
    ],
    "revenueItems": [
      {
        "name": "Fated Connections",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": -100,
    "runs": 1
  },
  {
    "name": "Pride of the First Ones",
    "cost": 175,
    "revenue": 263.92,
    "profit": 88.92000000000002,
    "costItems": [
      {
        "name": "Pride of the First Ones",
        "value": 25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "pride-of-the-first-ones",
        "count": 7,
        "total": 175
      }
    ],
    "revenueItems": [
      {
        "name": "Farrul's Fur",
        "value": 263.92,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farruls-fur-triumphant-lamellar",
        "count": 1,
        "total": 263.92
      }
    ],
    "roi": 50.811428571428586,
    "runs": 1
  },
  {
    "name": "Seven Years Bad Luck",
    "cost": 2230.15,
    "revenue": 2308.90625,
    "profit": 78.75624999999991,
    "costItems": [
      {
        "name": "Seven Years Bad Luck",
        "value": 171.55,
        "links": 0,
        "mapTier": 0,
        "detailsId": "seven-years-bad-luck",
        "count": 13,
        "total": 2230.15
      }
    ],
    "revenueItems": [
      {
        "name": "Mirror Shard",
        "value": 2308.90625,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mirror-shard",
        "count": 1,
        "total": 2308.90625
      }
    ],
    "roi": 3.5314328632603145,
    "runs": 1
  },
  {
    "name": "The World Eater",
    "cost": 32,
    "revenue": 3,
    "profit": -29,
    "costItems": [
      {
        "name": "The World Eater",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-world-eater",
        "count": 16,
        "total": 32
      }
    ],
    "revenueItems": [
      {
        "name": "Starforge",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "starforge-infernal-sword",
        "count": 1,
        "total": 3
      }
    ],
    "roi": -90.625,
    "runs": 1
  },
  {
    "name": "The Brittle Emperor",
    "cost": 16,
    "revenue": 5,
    "profit": -11,
    "costItems": [
      {
        "name": "The Brittle Emperor",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-brittle-emperor",
        "count": 8,
        "total": 16
      }
    ],
    "revenueItems": [
      {
        "name": "Voll's Devotion",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "volls-devotion-agate-amulet",
        "count": 1,
        "total": 5
      }
    ],
    "roi": -68.75,
    "runs": 1
  },
  {
    "name": "The Life Thief",
    "cost": 12,
    "revenue": 10,
    "profit": -2,
    "costItems": [
      {
        "name": "The Life Thief",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-life-thief",
        "count": 6,
        "total": 12
      }
    ],
    "revenueItems": [
      {
        "name": "Zerphi's Heart",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "zerphis-heart-paua-amulet",
        "count": 1,
        "total": 10
      }
    ],
    "roi": -16.666666666666664,
    "runs": 1
  },
  {
    "name": "The Nurse",
    "cost": 1900.24,
    "revenue": 1966.2,
    "profit": 65.96000000000004,
    "costItems": [
      {
        "name": "The Nurse",
        "value": 237.53,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-nurse",
        "count": 8,
        "total": 1900.24
      }
    ],
    "revenueItems": [
      {
        "name": "The Doctor",
        "value": 1966.2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-doctor",
        "count": 1,
        "total": 1966.2
      }
    ],
    "roi": 3.471140487517368,
    "runs": 1
  },
  {
    "name": "The Queen",
    "cost": 32,
    "revenue": 21,
    "profit": -11,
    "costItems": [
      {
        "name": "The Queen",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-queen",
        "count": 16,
        "total": 32
      }
    ],
    "revenueItems": [
      {
        "name": "Atziri's Acuity",
        "value": 21,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-acuity-vaal-gauntlets",
        "count": 1,
        "total": 21
      }
    ],
    "roi": -34.375,
    "runs": 1
  },
  {
    "name": "The Spark and the Flame",
    "cost": 6,
    "revenue": 5,
    "profit": -1,
    "costItems": [
      {
        "name": "The Spark and the Flame",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-spark-and-the-flame",
        "count": 2,
        "total": 6
      }
    ],
    "revenueItems": [
      {
        "name": "Berek's Respite",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bereks-respite-two-stone-ring",
        "count": 1,
        "total": 5
      }
    ],
    "roi": -16.666666666666664,
    "runs": 1
  },
  {
    "name": "The Damned",
    "cost": 90,
    "revenue": 193.31,
    "profit": 103.31,
    "costItems": [
      {
        "name": "The Damned",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-damned",
        "count": 6,
        "total": 90
      }
    ],
    "revenueItems": [
      {
        "name": "Soul Ripper",
        "value": 193.31,
        "links": 0,
        "mapTier": 0,
        "detailsId": "soul-ripper",
        "count": 1,
        "total": 193.31
      }
    ],
    "roi": 114.78888888888889,
    "runs": 1
  },
  {
    "name": "The Escape",
    "cost": 15,
    "revenue": 25,
    "profit": 10,
    "costItems": [
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 5,
        "total": 15
      }
    ],
    "revenueItems": [
      {
        "name": "Seven-League Step",
        "value": 25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "seven-league-step-rawhide-boots",
        "count": 1,
        "total": 25
      }
    ],
    "roi": 66.66666666666666,
    "runs": 1
  },
  {
    "name": "The Wolven King's Bite",
    "cost": 16,
    "revenue": 4,
    "profit": -12,
    "costItems": [
      {
        "name": "The Wolven King's Bite",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-wolven-kings-bite",
        "count": 8,
        "total": 16
      }
    ],
    "revenueItems": [
      {
        "name": "Rigwald's Quills",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rigwalds-quills-two-point-arrow-quiver",
        "count": 1,
        "total": 4
      }
    ],
    "roi": -75,
    "runs": 1
  },
  {
    "name": "Hunter's Reward",
    "cost": 12,
    "revenue": 18,
    "profit": 6,
    "costItems": [
      {
        "name": "Hunter's Reward",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hunters-reward",
        "count": 3,
        "total": 12
      }
    ],
    "revenueItems": [
      {
        "name": "The Taming",
        "value": 18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-taming-prismatic-ring",
        "count": 1,
        "total": 18
      }
    ],
    "roi": 50,
    "runs": 1
  },
  {
    "name": "The Last One Standing",
    "cost": 30,
    "revenue": 3,
    "profit": -27,
    "costItems": [
      {
        "name": "The Last One Standing",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-last-one-standing",
        "count": 10,
        "total": 30
      }
    ],
    "revenueItems": [
      {
        "name": "Atziri's Disfavour",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-disfavour-vaal-axe",
        "count": 1,
        "total": 3
      }
    ],
    "roi": -90,
    "runs": 1
  },
  {
    "name": "Burning Blood",
    "cost": 18,
    "revenue": 25,
    "profit": 7,
    "costItems": [
      {
        "name": "Burning Blood",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "burning-blood",
        "count": 6,
        "total": 18
      }
    ],
    "revenueItems": [
      {
        "name": "Xoph's Blood",
        "value": 25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-blood-amber-amulet",
        "count": 1,
        "total": 25
      }
    ],
    "roi": 38.88888888888889,
    "runs": 1
  },
  {
    "name": "The Polymath",
    "cost": 6,
    "revenue": 14,
    "profit": 8,
    "costItems": [
      {
        "name": "The Polymath",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-polymath",
        "count": 3,
        "total": 6
      }
    ],
    "revenueItems": [
      {
        "name": "Astramentis",
        "value": 14,
        "links": 0,
        "mapTier": 0,
        "detailsId": "astramentis-onyx-amulet",
        "count": 1,
        "total": 14
      }
    ],
    "roi": 133.33333333333331,
    "runs": 1
  },
  {
    "name": "The Soul",
    "cost": 27,
    "revenue": 30,
    "profit": 3,
    "costItems": [
      {
        "name": "The Soul",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-soul",
        "count": 9,
        "total": 27
      }
    ],
    "revenueItems": [
      {
        "name": "Soul Taker",
        "value": 30,
        "links": 0,
        "mapTier": 0,
        "detailsId": "soul-taker-siege-axe",
        "count": 1,
        "total": 30
      }
    ],
    "roi": 11.11111111111111,
    "runs": 1
  },
  {
    "name": "The Mad King",
    "cost": 7,
    "revenue": 0,
    "profit": -7,
    "costItems": [
      {
        "name": "The Mad King",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-mad-king",
        "count": 7,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "The King's Path",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": -100,
    "runs": 1
  },
  {
    "name": "The Hunger",
    "cost": 18,
    "revenue": 14,
    "profit": -4,
    "costItems": [
      {
        "name": "The Hunger",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-hunger",
        "count": 9,
        "total": 18
      }
    ],
    "revenueItems": [
      {
        "name": "Taste of Hate",
        "value": 14,
        "links": 0,
        "mapTier": 0,
        "detailsId": "taste-of-hate",
        "count": 1,
        "total": 14
      }
    ],
    "roi": -22.22222222222222,
    "runs": 1
  },
  {
    "name": "The King's Heart",
    "cost": 8,
    "revenue": 6,
    "profit": -2,
    "costItems": [
      {
        "name": "The King's Heart",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-kings-heart",
        "count": 8,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Kaom's Heart",
        "value": 6,
        "links": 0,
        "mapTier": 0,
        "detailsId": "kaoms-heart-glorious-plate",
        "count": 1,
        "total": 6
      }
    ],
    "roi": -25,
    "runs": 1
  },
  {
    "name": "The Eye of Terror",
    "cost": 80,
    "revenue": 118.9090909090909,
    "profit": 38.90909090909091,
    "costItems": [
      {
        "name": "The Eye of Terror",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-eye-of-terror",
        "count": 8,
        "total": 80
      }
    ],
    "revenueItems": [
      {
        "name": "Chayula's Pure Breachstone",
        "value": 118.9090909090909,
        "links": 0,
        "mapTier": 0,
        "detailsId": "chayulas-pure-breachstone",
        "count": 1,
        "total": 118.9090909090909
      }
    ],
    "roi": 48.63636363636363,
    "runs": 1
  },
  {
    "name": "The Hoarder",
    "cost": 120,
    "revenue": 131.9375,
    "profit": 11.9375,
    "costItems": [
      {
        "name": "The Hoarder",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-hoarder",
        "count": 12,
        "total": 120
      }
    ],
    "revenueItems": [
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 1,
        "total": 131.9375
      }
    ],
    "roi": 9.947916666666666,
    "runs": 1
  },
  {
    "name": "Last Hope",
    "cost": 3,
    "revenue": 4,
    "profit": 1,
    "costItems": [
      {
        "name": "Last Hope",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "last-hope",
        "count": 3,
        "total": 3
      }
    ],
    "revenueItems": [
      {
        "name": "Mortal Hope",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-hope",
        "count": 1,
        "total": 4
      }
    ],
    "roi": 33.33333333333333,
    "runs": 1
  },
  {
    "name": "The Journey",
    "cost": 3,
    "revenue": 0.9238106666666667,
    "profit": -2.076189333333333,
    "costItems": [
      {
        "name": "The Journey",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-journey",
        "count": 3,
        "total": 3
      }
    ],
    "revenueItems": [
      {
        "name": "Harbinger's Orb",
        "value": 0.9238106666666667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "harbingers-orb",
        "count": 1,
        "total": 0.9238106666666667
      }
    ],
    "roi": -69.2063111111111,
    "runs": 1
  },
  {
    "name": "The Deep Ones",
    "cost": 10,
    "revenue": 2,
    "profit": -8,
    "costItems": [
      {
        "name": "The Deep Ones",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-deep-ones",
        "count": 5,
        "total": 10
      }
    ],
    "revenueItems": [
      {
        "name": "Tidebreaker",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tidebreaker-imperial-maul",
        "count": 1,
        "total": 2
      }
    ],
    "roi": -80,
    "runs": 1
  },
  {
    "name": "The Valley of Steel Boxes",
    "cost": 0,
    "revenue": 0,
    "profit": 0,
    "costItems": [
      {
        "name": "The Valley of Steel Boxes",
        "value": 0,
        "count": 9,
        "total": 0
      }
    ],
    "revenueItems": [
      {
        "name": "Monstrous Treasure",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": 0,
    "runs": 1
  },
  {
    "name": "The Thaumaturgist",
    "cost": 16,
    "revenue": 2,
    "profit": -14,
    "costItems": [
      {
        "name": "The Thaumaturgist",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-thaumaturgist",
        "count": 8,
        "total": 16
      }
    ],
    "revenueItems": [
      {
        "name": "Shavronne's Revelation",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shavronnes-revelation-moonstone-ring",
        "count": 1,
        "total": 2
      }
    ],
    "roi": -87.5,
    "runs": 1
  },
  {
    "name": "Pride Before the Fall",
    "cost": 16,
    "revenue": 6,
    "profit": -10,
    "costItems": [
      {
        "name": "Pride Before the Fall",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "pride-before-the-fall",
        "count": 8,
        "total": 16
      }
    ],
    "revenueItems": [
      {
        "name": "Kaom's Heart",
        "value": 6,
        "links": 0,
        "mapTier": 0,
        "detailsId": "kaoms-heart-glorious-plate",
        "count": 1,
        "total": 6
      }
    ],
    "roi": -62.5,
    "runs": 1
  },
  {
    "name": "Demigod's Wager",
    "cost": 7,
    "revenue": 2,
    "profit": -5,
    "costItems": [
      {
        "name": "Demigod's Wager",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "demigods-wager",
        "count": 7,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Orb of Annulment",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-annulment",
        "count": 1,
        "total": 2
      }
    ],
    "roi": -71.42857142857143,
    "runs": 1
  },
  {
    "name": "The Wind",
    "cost": 7,
    "revenue": 3,
    "profit": -4,
    "costItems": [
      {
        "name": "The Wind",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-wind",
        "count": 7,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Windripper",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "windripper-imperial-bow",
        "count": 1,
        "total": 3
      }
    ],
    "roi": -57.14285714285714,
    "runs": 1
  },
  {
    "name": "The Seeker",
    "cost": 13.41,
    "revenue": 6,
    "profit": -7.41,
    "costItems": [
      {
        "name": "The Seeker",
        "value": 1.49,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-seeker",
        "count": 9,
        "total": 13.41
      }
    ],
    "revenueItems": [
      {
        "name": "Orb of Annulment",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-annulment",
        "count": 3,
        "total": 6
      }
    ],
    "roi": -55.257270693512304,
    "runs": 1
  },
  {
    "name": "The Union",
    "cost": 9.17,
    "revenue": 4.9281500000000005,
    "profit": -4.2418499999999995,
    "costItems": [
      {
        "name": "The Union",
        "value": 1.31,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-union",
        "count": 7,
        "total": 9.17
      }
    ],
    "revenueItems": [
      {
        "name": "Gemcutter's Prism",
        "value": 0.492815,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gemcutters-prism",
        "count": 10,
        "total": 4.9281500000000005
      }
    ],
    "roi": -46.25790621592148,
    "runs": 1
  },
  {
    "name": "Underground Forest",
    "cost": 20,
    "revenue": 29.776904934210528,
    "profit": 9.776904934210528,
    "costItems": [
      {
        "name": "Underground Forest",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "underground-forest",
        "count": 4,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Awakened Sextant",
        "value": 2.977690493421053,
        "links": 0,
        "mapTier": 0,
        "detailsId": "awakened-sextant",
        "count": 10,
        "total": 29.776904934210528
      }
    ],
    "roi": 48.88452467105264,
    "runs": 1
  },
  {
    "name": "The Innocent",
    "cost": 20,
    "revenue": 29.998075,
    "profit": 9.998075,
    "costItems": [
      {
        "name": "The Innocent",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-innocent",
        "count": 10,
        "total": 20
      }
    ],
    "revenueItems": [
      {
        "name": "Orb of Regret",
        "value": 0.749951875,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-regret",
        "count": 40,
        "total": 29.998075
      }
    ],
    "roi": 49.990375,
    "runs": 1
  },
  {
    "name": "The Mayor",
    "cost": 0,
    "revenue": 0,
    "profit": 0,
    "costItems": [
      {
        "name": "The Mayor",
        "value": 0,
        "count": 5,
        "total": 0
      }
    ],
    "revenueItems": [
      {
        "name": "The Perandus Manor",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": 0,
    "runs": 1
  },
  {
    "name": "The Saint's Treasure",
    "cost": 240,
    "revenue": 263.875,
    "profit": 23.875,
    "costItems": [
      {
        "name": "The Saint's Treasure",
        "value": 24,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-saints-treasure",
        "count": 10,
        "total": 240
      }
    ],
    "revenueItems": [
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 2,
        "total": 263.875
      }
    ],
    "roi": 9.947916666666666,
    "runs": 1
  },
  {
    "name": "Squandered Prosperity",
    "cost": 0,
    "revenue": 0,
    "profit": 0,
    "costItems": [
      {
        "name": "Squandered Prosperity",
        "value": 0,
        "count": 5,
        "total": 0
      }
    ],
    "revenueItems": [
      {
        "name": "The Perandus Manor",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "roi": 0,
    "runs": 1
  },
  {
    "name": "Abandoned Wealth",
    "cost": 375,
    "revenue": 395.8125,
    "profit": 20.8125,
    "costItems": [
      {
        "name": "Abandoned Wealth",
        "value": 75,
        "links": 0,
        "mapTier": 0,
        "detailsId": "abandoned-wealth",
        "count": 5,
        "total": 375
      }
    ],
    "revenueItems": [
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 3,
        "total": 395.8125
      }
    ],
    "roi": 5.55,
    "runs": 1
  },
  {
    "name": "The Demon",
    "cost": 17666.1,
    "revenue": 15951.13,
    "profit": -1714.9699999999993,
    "costItems": [
      {
        "name": "The Demon",
        "value": 1766.61,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-demon",
        "count": 10,
        "total": 17666.1
      }
    ],
    "revenueItems": [
      {
        "name": "Headhunter",
        "value": 15951.13,
        "links": 0,
        "mapTier": 0,
        "detailsId": "headhunter-leather-belt",
        "count": 1,
        "total": 15951.13
      }
    ],
    "roi": -9.707688737185908,
    "runs": 1
  },
  {
    "name": "House of Mirrors",
    "cost": 48693.24,
    "revenue": 44462.9375,
    "profit": -4230.302499999998,
    "costItems": [
      {
        "name": "House of Mirrors",
        "value": 5410.36,
        "links": 0,
        "mapTier": 0,
        "detailsId": "house-of-mirrors",
        "count": 9,
        "total": 48693.24
      }
    ],
    "revenueItems": [
      {
        "name": "Mirror of Kalandra",
        "value": 44462.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mirror-of-kalandra",
        "count": 1,
        "total": 44462.9375
      }
    ],
    "roi": -8.687658697593339,
    "runs": 1
  },
  {
    "name": "Alluring Bounty",
    "cost": 1293.18,
    "revenue": 1319.375,
    "profit": 26.194999999999936,
    "costItems": [
      {
        "name": "Alluring Bounty",
        "value": 184.74,
        "links": 0,
        "mapTier": 0,
        "detailsId": "alluring-bounty",
        "count": 7,
        "total": 1293.18
      }
    ],
    "revenueItems": [
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 10,
        "total": 1319.375
      }
    ],
    "roi": 2.0256267495630875,
    "runs": 1
  }
]

export const Incubators: PathOfProfitRecipe[] = [
  {
    "name": "Fossilised Incubator",
    "cost": 3.56,
    "revenue": 1.7786868686868686,
    "profit": -1.7813131313131314,
    "costItems": [
      {
        "name": "Fossilised Incubator",
        "value": 3.56,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fossilised-incubator",
        "count": 1,
        "total": 3.56
      }
    ],
    "revenueItems": [
      {
        "name": "Scorched Fossil",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "scorched-fossil",
        "count": 7,
        "total": 3.5
      },
      {
        "name": "Metallic Fossil",
        "value": 0.32,
        "links": 0,
        "mapTier": 0,
        "detailsId": "metallic-fossil",
        "count": 7,
        "total": 2.24
      },
      {
        "name": "Frigid Fossil",
        "value": 0.36,
        "links": 0,
        "mapTier": 0,
        "detailsId": "frigid-fossil",
        "count": 8,
        "total": 2.88
      },
      {
        "name": "Aberrant Fossil",
        "value": 0.28,
        "links": 0,
        "mapTier": 0,
        "detailsId": "aberrant-fossil",
        "count": 7,
        "total": 1.9600000000000002
      },
      {
        "name": "Pristine Fossil",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "pristine-fossil",
        "count": 6,
        "total": 3
      },
      {
        "name": "Lucent Fossil",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "lucent-fossil",
        "count": 2,
        "total": 1
      },
      {
        "name": "Jagged Fossil",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "jagged-fossil",
        "count": 5,
        "total": 2.5
      },
      {
        "name": "Encrusted Fossil",
        "value": 0,
        "count": 2,
        "total": 0
      },
      {
        "name": "Dense Fossil",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "dense-fossil",
        "count": 20,
        "total": 10
      },
      {
        "name": "Prismatic Fossil",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "prismatic-fossil",
        "count": 2,
        "total": 4
      },
      {
        "name": "Aetheric Fossil",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "aetheric-fossil",
        "count": 5,
        "total": 5
      },
      {
        "name": "Serrated Fossil",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "serrated-fossil",
        "count": 3,
        "total": 6
      },
      {
        "name": "Shuddering Fossil",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shuddering-fossil",
        "count": 2,
        "total": 10
      },
      {
        "name": "Gilded Fossil",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-fossil",
        "count": 6,
        "total": 24
      },
      {
        "name": "Bound Fossil",
        "value": 5.57,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bound-fossil",
        "count": 3,
        "total": 16.71
      },
      {
        "name": "Enchanted Fossil",
        "value": 0,
        "count": 2,
        "total": 0
      },
      {
        "name": "Perfect Fossil",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfect-fossil",
        "count": 1,
        "total": 4
      },
      {
        "name": "Corroded Fossil",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "corroded-fossil",
        "count": 5,
        "total": 25
      },
      {
        "name": "Sanctified Fossil",
        "value": 9.05,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sanctified-fossil",
        "count": 6,
        "total": 54.300000000000004
      }
    ],
    "roi": -50.03688571104301,
    "runs": 99
  },
  {
    "name": "Ornate Incubator",
    "cost": 5,
    "revenue": 2.1415464799486497,
    "profit": -2.8584535200513503,
    "costItems": [
      {
        "name": "Ornate Incubator",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "ornate-incubator",
        "count": 1,
        "total": 5
      }
    ],
    "revenueItems": [
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 2,
        "total": 263.875
      },
      {
        "name": "Divine Orb",
        "value": 6.94,
        "links": 0,
        "mapTier": 0,
        "detailsId": "divine-orb",
        "count": 5,
        "total": 34.7
      },
      {
        "name": "Orb of Annulment",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-annulment",
        "count": 11,
        "total": 22
      },
      {
        "name": "Regal Orb",
        "value": 0.33333,
        "links": 0,
        "mapTier": 0,
        "detailsId": "regal-orb",
        "count": 3,
        "total": 0.99999
      },
      {
        "name": "Vaal Orb",
        "value": 0.66469,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vaal-orb",
        "count": 5,
        "total": 3.3234500000000002
      },
      {
        "name": "Chaos Orb",
        "value": 1,
        "count": 8,
        "total": 8
      },
      {
        "name": "Blessed Orb",
        "value": 0.7651326315789474,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessed-orb",
        "count": 13,
        "total": 9.946724210526316
      },
      {
        "name": "Orb of Scouring",
        "value": 0.44444,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-scouring",
        "count": 16,
        "total": 7.11104
      },
      {
        "name": "Jeweller's Orb",
        "value": 0.07143,
        "links": 0,
        "mapTier": 0,
        "detailsId": "jewellers-orb",
        "count": 15,
        "total": 1.07145
      },
      {
        "name": "Orb of Chance",
        "value": 0.07692,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-chance",
        "count": 14,
        "total": 1.07688
      },
      {
        "name": "Orb of Regret",
        "value": 0.749951875,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-regret",
        "count": 21,
        "total": 15.748989375
      },
      {
        "name": "Orb of Fusing",
        "value": 0.299498125,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-fusing",
        "count": 22,
        "total": 6.58895875
      },
      {
        "name": "Chromatic Orb",
        "value": 0.11111,
        "links": 0,
        "mapTier": 0,
        "detailsId": "chromatic-orb",
        "count": 21,
        "total": 2.33331
      },
      {
        "name": "Orb of Alchemy",
        "value": 0.10847307692307692,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-alchemy",
        "count": 21,
        "total": 2.2779346153846154
      }
    ],
    "roi": -57.169070401027014,
    "runs": 177
  },
  {
    "name": "Diviner's Incubator",
    "cost": 5,
    "revenue": 3.090909090909091,
    "profit": -1.9090909090909092,
    "costItems": [
      {
        "name": "Diviner's Incubator",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "diviners-incubator",
        "count": 1,
        "total": 5
      }
    ],
    "revenueItems": [
      {
        "name": "Stacked Deck",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "stacked-deck",
        "count": 204,
        "total": 204
      }
    ],
    "roi": -38.18181818181819,
    "runs": 66
  },
  {
    "name": "Fragmented Incubator",
    "cost": 4.68,
    "revenue": 0.3337614912146677,
    "profit": -4.346238508785332,
    "costItems": [
      {
        "name": "Fragmented Incubator",
        "value": 4.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragmented-incubator",
        "count": 1,
        "total": 4.68
      }
    ],
    "revenueItems": [
      {
        "name": "Inya's Key",
        "value": 0,
        "count": 3,
        "total": 0
      },
      {
        "name": "Eber's Key",
        "value": 0,
        "count": 1,
        "total": 0
      },
      {
        "name": "Sacrifice at Dusk",
        "value": 0.12356857142857143,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-dusk",
        "count": 40,
        "total": 4.942742857142857
      },
      {
        "name": "Sacrifice at Dawn",
        "value": 0.16216,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-dawn",
        "count": 34,
        "total": 5.51344
      },
      {
        "name": "Sacrifice at Noon",
        "value": 0.28571,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-noon",
        "count": 23,
        "total": 6.571330000000001
      },
      {
        "name": "Sacrifice at Midnight",
        "value": 0.33333,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-midnight",
        "count": 7,
        "total": 2.33331
      },
      {
        "name": "Mortal Ignorance",
        "value": 10.352941176470589,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-ignorance",
        "count": 1,
        "total": 10.352941176470589
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 1,
        "total": 7
      }
    ],
    "roi": -92.86834420481479,
    "runs": 110
  },
  {
    "name": "Infused Incubator",
    "cost": 4.41,
    "revenue": 2.7070909090909088,
    "profit": -1.7029090909090914,
    "costItems": [
      {
        "name": "Infused Incubator",
        "value": 4.41,
        "links": 0,
        "mapTier": 0,
        "detailsId": "infused-incubator",
        "count": 1,
        "total": 4.41
      }
    ],
    "revenueItems": [
      {
        "name": "Remnant of Corruption",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "remnant-of-corruption",
        "count": 14,
        "total": 14
      },
      {
        "name": "Essence of Horror",
        "value": 26,
        "links": 0,
        "mapTier": 8,
        "detailsId": "essence-of-horror",
        "count": 2,
        "total": 52
      },
      {
        "name": "Essence of Hysteria",
        "value": 11,
        "links": 0,
        "mapTier": 8,
        "detailsId": "essence-of-hysteria",
        "count": 2,
        "total": 22
      },
      {
        "name": "Essence of Insanity",
        "value": 11,
        "links": 0,
        "mapTier": 8,
        "detailsId": "essence-of-insanity",
        "count": 1,
        "total": 11
      },
      {
        "name": "Essence of Delirium",
        "value": 11,
        "links": 0,
        "mapTier": 8,
        "detailsId": "essence-of-delirium",
        "count": 1,
        "total": 11
      },
      {
        "name": "Shrieking Essence of Zeal",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-zeal",
        "count": 0,
        "total": 0
      },
      {
        "name": "Shrieking Essence of Spite",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-spite",
        "count": 1,
        "total": 1
      },
      {
        "name": "Shrieking Essence of Woe",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-woe",
        "count": 2,
        "total": 2
      },
      {
        "name": "Shrieking Essence of Contempt",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-contempt",
        "count": 0,
        "total": 0
      },
      {
        "name": "Shrieking Essence of Envy",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-envy",
        "count": 0,
        "total": 0
      },
      {
        "name": "Shrieking Essence of Greed",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-greed",
        "count": 0,
        "total": 0
      },
      {
        "name": "Shrieking Essence of Loathing",
        "value": 1.38,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-loathing",
        "count": 2,
        "total": 2.76
      },
      {
        "name": "Shrieking Essence of Rage",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-rage",
        "count": 1,
        "total": 1
      },
      {
        "name": "Shrieking Essence of Scorn",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-scorn",
        "count": 4,
        "total": 4
      },
      {
        "name": "Shrieking Essence of Sorrow",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-sorrow",
        "count": 4,
        "total": 4
      },
      {
        "name": "Shrieking Essence of Misery",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-misery",
        "count": 1,
        "total": 1
      },
      {
        "name": "Shrieking Essence of Wrath",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-wrath",
        "count": 2,
        "total": 2
      },
      {
        "name": "Shrieking Essence of Fear",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-fear",
        "count": 1,
        "total": 1
      },
      {
        "name": "Shrieking Essence of Anger",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-anger",
        "count": 3,
        "total": 3
      },
      {
        "name": "Shrieking Essence of Dread",
        "value": 2.49,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-dread",
        "count": 3,
        "total": 7.470000000000001
      },
      {
        "name": "Shrieking Essence of Hatred",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-hatred",
        "count": 3,
        "total": 3
      },
      {
        "name": "Shrieking Essence of Suffering",
        "value": 0.5,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-suffering",
        "count": 2,
        "total": 1
      },
      {
        "name": "Shrieking Essence of Torment",
        "value": 0.83,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-torment",
        "count": 2,
        "total": 1.66
      },
      {
        "name": "Shrieking Essence of Anguish",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-anguish",
        "count": 3,
        "total": 3
      },
      {
        "name": "Shrieking Essence of Doubt",
        "value": 1,
        "links": 0,
        "mapTier": 6,
        "detailsId": "shrieking-essence-of-doubt",
        "count": 1,
        "total": 1
      }
    ],
    "roi": -38.614718614718626,
    "runs": 55
  },
  {
    "name": "Foreboding Incubator",
    "cost": 4.65,
    "revenue": 7.013033728348909,
    "profit": 2.363033728348909,
    "costItems": [
      {
        "name": "Foreboding Incubator",
        "value": 4.65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "foreboding-incubator",
        "count": 1,
        "total": 4.65
      }
    ],
    "revenueItems": [
      {
        "name": "Ancient Orb",
        "value": 11,
        "links": 0,
        "mapTier": 0,
        "detailsId": "ancient-orb",
        "count": 21.1,
        "total": 232.10000000000002
      },
      {
        "name": "Exalted Orb",
        "value": 131.9375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "exalted-orb",
        "count": 3.5,
        "total": 461.78125
      },
      {
        "name": "Harbinger's Orb",
        "value": 0.9238106666666667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "harbingers-orb",
        "count": 22.4,
        "total": 20.693358933333332
      },
      {
        "name": "Orb of Annulment",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-annulment",
        "count": 3.7,
        "total": 7.4
      },
      {
        "name": "The Beachhead",
        "value": 14.21,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-beachhead-t15",
        "count": 2,
        "total": 28.42
      }
    ],
    "roi": 50.817929641912016,
    "runs": 107
  },
  {
    "name": "Skittering Incubator",
    "cost": 7,
    "revenue": 1.3277777777777777,
    "profit": -5.6722222222222225,
    "costItems": [
      {
        "name": "Skittering Incubator",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "skittering-incubator",
        "count": 1,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Rusted Sulphite Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-sulphite-scarab",
        "count": 3,
        "total": 1.5
      },
      {
        "name": "Rusted Legion Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-legion-scarab",
        "count": 5,
        "total": 2.5
      },
      {
        "name": "Rusted Ambush Scarab",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-ambush-scarab",
        "count": 9,
        "total": 27
      },
      {
        "name": "Rusted Bestiary Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-bestiary-scarab",
        "count": 2,
        "total": 1
      },
      {
        "name": "Rusted Breach Scarab",
        "value": 0.41,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-breach-scarab",
        "count": 1,
        "total": 0.41
      },
      {
        "name": "Rusted Elder Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-elder-scarab",
        "count": 1,
        "total": 0.5
      },
      {
        "name": "Rusted Harbinger Scarab",
        "value": 2.98,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-harbinger-scarab",
        "count": 4,
        "total": 11.92
      },
      {
        "name": "Rusted Metamorph Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-metamorph-scarab",
        "count": 1,
        "total": 0.5
      },
      {
        "name": "Rusted Divination Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-divination-scarab",
        "count": 7,
        "total": 3.5
      },
      {
        "name": "Rusted Cartography Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-cartography-scarab",
        "count": 10,
        "total": 10
      },
      {
        "name": "Rusted Perandus Scarab",
        "value": 0,
        "count": 6,
        "total": 0
      },
      {
        "name": "Rusted Reliquary Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-reliquary-scarab",
        "count": 5,
        "total": 2.5
      },
      {
        "name": "Rusted Shaper Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-shaper-scarab",
        "count": 3,
        "total": 1.5
      },
      {
        "name": "Rusted Torment Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-torment-scarab",
        "count": 3,
        "total": 1.5
      },
      {
        "name": "Polished Sulphite Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-sulphite-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Polished Legion Scarab",
        "value": 1.56,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-legion-scarab",
        "count": 2,
        "total": 3.12
      },
      {
        "name": "Polished Ambush Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-ambush-scarab",
        "count": 2,
        "total": 8
      },
      {
        "name": "Polished Bestiary Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-bestiary-scarab",
        "count": 2,
        "total": 1
      },
      {
        "name": "Polished Breach Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-breach-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Polished Elder Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-elder-scarab",
        "count": 4,
        "total": 2
      },
      {
        "name": "Polished Harbinger Scarab",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-harbinger-scarab",
        "count": 1,
        "total": 5
      },
      {
        "name": "Polished Metamorph Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-metamorph-scarab",
        "count": 6,
        "total": 6
      },
      {
        "name": "Polished Divination Scarab",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-divination-scarab",
        "count": 1,
        "total": 3
      },
      {
        "name": "Polished Cartography Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-cartography-scarab",
        "count": 2,
        "total": 2
      },
      {
        "name": "Polished Perandus Scarab",
        "value": 0,
        "count": 2,
        "total": 0
      },
      {
        "name": "Polished Reliquary Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-reliquary-scarab",
        "count": 1,
        "total": 0.5
      },
      {
        "name": "Polished Shaper Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-shaper-scarab",
        "count": 3,
        "total": 1.5
      },
      {
        "name": "Polished Torment Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-torment-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Sulphite Scarab",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-sulphite-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Legion Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-legion-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Ambush Scarab",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-ambush-scarab",
        "count": 1,
        "total": 7
      },
      {
        "name": "Gilded Bestiary Scarab",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-bestiary-scarab",
        "count": 2,
        "total": 4
      },
      {
        "name": "Gilded Breach Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-breach-scarab",
        "count": 2,
        "total": 8
      },
      {
        "name": "Gilded Elder Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-elder-scarab",
        "count": 1,
        "total": 1
      },
      {
        "name": "Gilded Harbinger Scarab",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-harbinger-scarab",
        "count": 1,
        "total": 10
      },
      {
        "name": "Gilded Metamorph Scarab",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-metamorph-scarab",
        "count": 1,
        "total": 2
      },
      {
        "name": "Gilded Divination Scarab",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-divination-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Cartography Scarab",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-cartography-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Perandus Scarab",
        "value": 0,
        "count": 1,
        "total": 0
      },
      {
        "name": "Gilded Reliquary Scarab",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-reliquary-scarab",
        "count": 1,
        "total": 2
      },
      {
        "name": "Gilded Shaper Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-shaper-scarab",
        "count": 0,
        "total": 0
      },
      {
        "name": "Gilded Torment Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-torment-scarab",
        "count": 1,
        "total": 1
      }
    ],
    "roi": -81.03174603174604,
    "runs": 99
  }
]

export const IncursionFlips: PathOfProfitRecipe[] = [
  {
    "name": "Apep's Supremacy",
    "cost": 44,
    "revenue": 14,
    "profit": -30,
    "costItems": [
      {
        "name": "Apep's Slumber",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "apeps-slumber-vaal-spirit-shield",
        "count": 1,
        "total": 4
      },
      {
        "name": "Vial of Awakening",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-awakening",
        "count": 1,
        "total": 40
      }
    ],
    "revenueItems": [
      {
        "name": "Apep's Supremacy",
        "value": 14,
        "links": 0,
        "mapTier": 0,
        "detailsId": "apeps-supremacy-vaal-spirit-shield",
        "count": 1,
        "total": 14
      }
    ],
    "roi": -68.18181818181817,
    "runs": 1
  },
  {
    "name": "Coward's Legacy",
    "cost": 40,
    "revenue": 39,
    "profit": -1,
    "costItems": [
      {
        "name": "Coward's Chains",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "cowards-chains-chain-belt",
        "count": 1,
        "total": 15
      },
      {
        "name": "Vial of Consequence",
        "value": 25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-consequence",
        "count": 1,
        "total": 25
      }
    ],
    "revenueItems": [
      {
        "name": "Coward's Legacy",
        "value": 39,
        "links": 0,
        "mapTier": 0,
        "detailsId": "cowards-legacy-chain-belt",
        "count": 1,
        "total": 39
      }
    ],
    "roi": -2.5,
    "runs": 1
  },
  {
    "name": "Slavedriver's Hand",
    "cost": 42,
    "revenue": 20,
    "profit": -22,
    "costItems": [
      {
        "name": "Architect's Hand",
        "value": 30,
        "links": 0,
        "mapTier": 0,
        "detailsId": "architects-hand-ambush-mitts",
        "count": 1,
        "total": 30
      },
      {
        "name": "Vial of Dominance",
        "value": 12,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-dominance",
        "count": 1,
        "total": 12
      }
    ],
    "revenueItems": [
      {
        "name": "Slavedriver's Hand",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "slavedrivers-hand-ambush-mitts",
        "count": 1,
        "total": 20
      }
    ],
    "roi": -52.38095238095239,
    "runs": 1
  },
  {
    "name": "Fate of the Vaal",
    "cost": 46,
    "revenue": 8,
    "profit": -38,
    "costItems": [
      {
        "name": "Story of the Vaal",
        "value": 38,
        "links": 0,
        "mapTier": 0,
        "detailsId": "story-of-the-vaal-gemstone-sword",
        "count": 1,
        "total": 38
      },
      {
        "name": "Vial of Fate",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-fate",
        "count": 1,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Fate of the Vaal",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fate-of-the-vaal-gemstone-sword",
        "count": 1,
        "total": 8
      }
    ],
    "roi": -82.6086956521739,
    "runs": 1
  },
  {
    "name": "Mask of the Stitched Demon",
    "cost": 285.85,
    "revenue": 316.7,
    "profit": 30.849999999999966,
    "costItems": [
      {
        "name": "Mask of the Spirit Drinker",
        "value": 246.03,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mask-of-the-spirit-drinker-magistrate-crown",
        "count": 1,
        "total": 246.03
      },
      {
        "name": "Vial of Summoning",
        "value": 39.82,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-summoning",
        "count": 1,
        "total": 39.82
      }
    ],
    "revenueItems": [
      {
        "name": "Mask of the Stitched Demon",
        "value": 316.7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mask-of-the-stitched-demon-magistrate-crown",
        "count": 1,
        "total": 316.7
      }
    ],
    "roi": 10.792373622529286,
    "runs": 1
  },
  {
    "name": "Omeyocan",
    "cost": 48,
    "revenue": 4,
    "profit": -44,
    "costItems": [
      {
        "name": "Dance of the Offered",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "dance-of-the-offered-carnal-boots",
        "count": 1,
        "total": 40
      },
      {
        "name": "Vial of the Ritual",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-the-ritual",
        "count": 1,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Omeyocan",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "omeyocan-carnal-boots",
        "count": 1,
        "total": 4
      }
    ],
    "roi": -91.66666666666666,
    "runs": 1
  },
  {
    "name": "Transcendent Flesh",
    "cost": 69,
    "revenue": 80,
    "profit": 11,
    "costItems": [
      {
        "name": "Tempered Flesh",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tempered-flesh-crimson-jewel",
        "count": 1,
        "total": 4
      },
      {
        "name": "Vial of Transcendence",
        "value": 65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-transcendence",
        "count": 1,
        "total": 65
      }
    ],
    "revenueItems": [
      {
        "name": "Transcendent Flesh",
        "value": 80,
        "links": 0,
        "mapTier": 0,
        "detailsId": "transcendent-flesh-crimson-jewel",
        "count": 1,
        "total": 80
      }
    ],
    "roi": 15.942028985507244,
    "runs": 1
  },
  {
    "name": "Transcendent Spirit",
    "cost": 70,
    "revenue": 90,
    "profit": 20,
    "costItems": [
      {
        "name": "Tempered Spirit",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tempered-spirit-viridian-jewel",
        "count": 1,
        "total": 5
      },
      {
        "name": "Vial of Transcendence",
        "value": 65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-transcendence",
        "count": 1,
        "total": 65
      }
    ],
    "revenueItems": [
      {
        "name": "Transcendent Spirit",
        "value": 90,
        "links": 0,
        "mapTier": 0,
        "detailsId": "transcendent-spirit-viridian-jewel",
        "count": 1,
        "total": 90
      }
    ],
    "roi": 28.57142857142857,
    "runs": 1
  },
  {
    "name": "Transcendent Mind",
    "cost": 68,
    "revenue": 90,
    "profit": 22,
    "costItems": [
      {
        "name": "Tempered Mind",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tempered-mind-cobalt-jewel",
        "count": 1,
        "total": 3
      },
      {
        "name": "Vial of Transcendence",
        "value": 65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-transcendence",
        "count": 1,
        "total": 65
      }
    ],
    "revenueItems": [
      {
        "name": "Transcendent Mind",
        "value": 90,
        "links": 0,
        "mapTier": 0,
        "detailsId": "transcendent-mind-cobalt-jewel",
        "count": 1,
        "total": 90
      }
    ],
    "roi": 32.35294117647059,
    "runs": 1
  },
  {
    "name": "Soul Ripper",
    "cost": 264.92,
    "revenue": 193.31,
    "profit": -71.61000000000001,
    "costItems": [
      {
        "name": "Soul Catcher",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "soul-catcher",
        "count": 1,
        "total": 1
      },
      {
        "name": "Vial of the Ghost",
        "value": 263.92,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-the-ghost",
        "count": 1,
        "total": 263.92
      }
    ],
    "revenueItems": [
      {
        "name": "Soul Ripper",
        "value": 193.31,
        "links": 0,
        "mapTier": 0,
        "detailsId": "soul-ripper",
        "count": 1,
        "total": 193.31
      }
    ],
    "roi": -27.030801751472143,
    "runs": 1
  },
  {
    "name": "Zerphi's Heart",
    "cost": 97.33,
    "revenue": 10,
    "profit": -87.33,
    "costItems": [
      {
        "name": "Sacrificial Heart",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrificial-heart-paua-amulet",
        "count": 1,
        "total": 3
      },
      {
        "name": "Vial of Sacrifice",
        "value": 94.33,
        "links": 0,
        "mapTier": 0,
        "detailsId": "vial-of-sacrifice",
        "count": 1,
        "total": 94.33
      }
    ],
    "revenueItems": [
      {
        "name": "Zerphi's Heart",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "zerphis-heart-paua-amulet",
        "count": 1,
        "total": 10
      }
    ],
    "roi": -89.72567553683345,
    "runs": 1
  }
]

export const IndividualInvitations: PathOfProfitRecipe[] = [
  {
    "name": "Invitation: The Formed",
    "cost": 48,
    "revenue": 57.43458986666668,
    "profit": 9.434589866666677,
    "costItems": [
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 1,
        "total": 48
      }
    ],
    "revenueItems": [
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 12,
        "total": 83.57575333333334
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 11,
        "total": 77
      },
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 5,
        "total": 35
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 6,
        "total": 42
      },
      {
        "name": "Orb of Unmaking",
        "value": 1.71786,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-unmaking",
        "count": 59,
        "total": 101.35374
      },
      {
        "name": "The Maven's Writ",
        "value": 97.16666666666667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-mavens-writ",
        "count": 24.6,
        "total": 2390.3
      },
      {
        "name": "Rusted Shaper Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-shaper-scarab",
        "count": 22,
        "total": 11
      },
      {
        "name": "Polished Shaper Scarab",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-shaper-scarab",
        "count": 15,
        "total": 7.5
      },
      {
        "name": "Gilded Shaper Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-shaper-scarab",
        "count": 12,
        "total": 12
      },
      {
        "name": "Obscurantis",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscurantis-lion-pelt",
        "count": 8,
        "total": 16
      },
      {
        "name": "The Scourge",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-scourge-terror-claw",
        "count": 5,
        "total": 5
      },
      {
        "name": "Razor of the Seventh Sun",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "razor-of-the-seventh-sun-midnight-blade",
        "count": 4,
        "total": 4
      },
      {
        "name": "The Brass Dome",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-brass-dome-gladiator-plate",
        "count": 3,
        "total": 60
      },
      {
        "name": "Brain Rattler",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "brain-rattler-meatgrinder",
        "count": 3,
        "total": 3
      },
      {
        "name": "Slivertongue",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "slivertongue-harbinger-bow",
        "count": 1,
        "total": 1
      },
      {
        "name": "Snakepit",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "snakepit-sapphire-ring",
        "count": 1,
        "total": 1
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 3,
        "total": 6
      },
      {
        "name": "Eye of Innocence",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eye-of-innocence-citrine-amulet",
        "count": 4,
        "total": 16
      }
    ],
    "roi": 19.65539555555558,
    "runs": 50,
    "info": "Loot from invitations rolled with 70% quantity and higher"
  },
  {
    "name": "Invitation: The Feared",
    "cost": 4,
    "revenue": 274.7288801309942,
    "profit": 270.7288801309942,
    "costItems": [
      {
        "name": "Maven's Invitation: The Feared",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-feared",
        "count": 1,
        "total": 4
      }
    ],
    "revenueItems": [
      {
        "name": "Orb of Unmaking",
        "value": 1.71786,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-unmaking",
        "count": 114,
        "total": 195.83604
      },
      {
        "name": "The Maven's Writ",
        "value": 97.16666666666667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-mavens-writ",
        "count": 49.1,
        "total": 4770.883333333334
      },
      {
        "name": "Rusted Breach Scarab",
        "value": 0.41,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-breach-scarab",
        "count": 27,
        "total": 11.069999999999999
      },
      {
        "name": "Polished Breach Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-breach-scarab",
        "count": 13,
        "total": 13
      },
      {
        "name": "Gilded Breach Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-breach-scarab",
        "count": 9,
        "total": 36
      },
      {
        "name": "Impresence, Chaos",
        "value": 6.81,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-chaos-onyx-amulet",
        "variant": "Chaos",
        "count": 1,
        "total": 6.81
      },
      {
        "name": "Impresence, Physical",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-physical-onyx-amulet",
        "variant": "Physical",
        "count": 0,
        "total": 0
      },
      {
        "name": "Impresence, Fire",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-fire-onyx-amulet",
        "variant": "Fire",
        "count": 1,
        "total": 3
      },
      {
        "name": "Impresence, Lightning",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-lightning-onyx-amulet",
        "variant": "Lightning",
        "count": 0,
        "total": 0
      },
      {
        "name": "Impresence, Cold",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-cold-onyx-amulet",
        "variant": "Cold",
        "count": 1,
        "total": 2
      },
      {
        "name": "Watcher's Eye",
        "value": 30,
        "links": 0,
        "mapTier": 0,
        "detailsId": "watchers-eye-prismatic-jewel",
        "count": 12,
        "total": 360
      },
      {
        "name": "Hopeshredder",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hopeshredder-ranger-bow",
        "count": 3,
        "total": 6
      },
      {
        "name": "Shimmeron",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shimmeron-tornado-wand",
        "count": 3,
        "total": 6
      },
      {
        "name": "Fragment of Emptiness",
        "value": 23.93888888888889,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-emptiness",
        "count": 8,
        "total": 191.51111111111112
      },
      {
        "name": "Fragment of Terror",
        "value": 23.989473684210527,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-terror",
        "count": 6,
        "total": 143.93684210526317
      },
      {
        "name": "Cyclopean Coil",
        "value": 4.43,
        "links": 0,
        "mapTier": 0,
        "detailsId": "cyclopean-coil-leather-belt",
        "count": 8,
        "total": 35.44
      },
      {
        "name": "Nebuloch",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "nebuloch-nightmare-mace",
        "count": 4,
        "total": 8
      },
      {
        "name": "Fragment of Shape",
        "value": 61.875,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-shape",
        "count": 12,
        "total": 742.5
      },
      {
        "name": "Fragment of Knowledge",
        "value": 0.01667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-knowledge",
        "count": 4,
        "total": 0.06668
      },
      {
        "name": "Shaper's Touch",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shapers-touch-crusader-gloves",
        "count": 10,
        "total": 20
      },
      {
        "name": "Voidwalker",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voidwalker-murder-boots",
        "count": 8,
        "total": 16
      },
      {
        "name": "Dying Sun",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "dying-sun",
        "count": 6,
        "total": 60
      },
      {
        "name": "Solstice Vigil",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "solstice-vigil-onyx-amulet",
        "count": 2,
        "total": 10
      },
      {
        "name": "The Red Dream",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-red-dream-crimson-jewel",
        "count": 1,
        "total": 4
      },
      {
        "name": "The Green Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-green-dream-viridian-jewel",
        "count": 1,
        "total": 3
      },
      {
        "name": "The Blue Dream",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-blue-dream-cobalt-jewel",
        "count": 1,
        "total": 3
      },
      {
        "name": "Severed in Sleep",
        "value": 2.28,
        "links": 0,
        "mapTier": 0,
        "detailsId": "severed-in-sleep-cutlass",
        "count": 9,
        "total": 20.52
      },
      {
        "name": "Skin of the Loyal",
        "value": 13.36,
        "links": 6,
        "mapTier": 0,
        "detailsId": "skin-of-the-loyal-simple-robe-6l",
        "count": 19,
        "total": 253.83999999999997
      },
      {
        "name": "Blessing of Chayula",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-chayula",
        "count": 8,
        "total": 160
      },
      {
        "name": "Bottled Faith",
        "value": 1055.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bottled-faith",
        "count": 6,
        "total": 6334.08
      },
      {
        "name": "Offering to the Serpent",
        "value": 5.18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "offering-to-the-serpent-legion-gloves",
        "count": 12,
        "total": 62.16
      },
      {
        "name": "Nebulis",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "nebulis-void-sceptre",
        "count": 10,
        "total": 100
      },
      {
        "name": "Garb of the Ephemeral",
        "value": 80,
        "links": 0,
        "mapTier": 0,
        "detailsId": "garb-of-the-ephemeral-savants-robe",
        "count": 1,
        "total": 80
      },
      {
        "name": "Atziri's Disfavour",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-disfavour-vaal-axe",
        "count": 3,
        "total": 9
      },
      {
        "name": "Atziri's Splendour",
        "value": 4.97,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-splendour-es-sacrificial-garb",
        "variant": "ES",
        "count": 7,
        "total": 34.79
      },
      {
        "name": "The Vertex",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-vertex-vaal-mask",
        "count": 17,
        "total": 34
      }
    ],
    "roi": 6768.222003274855,
    "runs": 50,
    "info": "Loot from invitations rolled with 70% quantity and higher"
  },
  {
    "name": "Invitation: The Hidden",
    "cost": 8,
    "revenue": 57.84358298850575,
    "profit": 49.84358298850575,
    "costItems": [
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 1,
        "total": 8
      }
    ],
    "revenueItems": [
      {
        "name": "Orb of Unmaking",
        "value": 1.71786,
        "links": 0,
        "mapTier": 0,
        "detailsId": "orb-of-unmaking",
        "count": 34,
        "total": 58.40724
      },
      {
        "name": "The Maven's Writ",
        "value": 97.16666666666667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-mavens-writ",
        "count": 14.5,
        "total": 1408.9166666666667
      },
      {
        "name": "Rusted Breach Scarab",
        "value": 0.41,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-breach-scarab",
        "count": 54,
        "total": 22.139999999999997
      },
      {
        "name": "Polished Breach Scarab",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "polished-breach-scarab",
        "count": 17,
        "total": 17
      },
      {
        "name": "Gilded Breach Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-breach-scarab",
        "count": 16,
        "total": 64
      },
      {
        "name": "The Infinite Pursuit",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-infinite-pursuit-goliath-greaves",
        "count": 4,
        "total": 8
      },
      {
        "name": "Voice of the Storm",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voice-of-the-storm-lapis-amulet",
        "count": 1,
        "total": 2
      },
      {
        "name": "Blessing of Esh",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-esh",
        "count": 3,
        "total": 21
      },
      {
        "name": "Blessing of Xoph",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-xoph",
        "count": 4,
        "total": 36
      },
      {
        "name": "Blesing of Tul",
        "value": 0,
        "count": 6,
        "total": 0
      },
      {
        "name": "Blessing of Uul-Netol",
        "value": 19,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blessing-of-uul-netol",
        "count": 1,
        "total": 19
      },
      {
        "name": "The Snowblind Grace",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-snowblind-grace-coronal-leather",
        "count": 1,
        "total": 2
      },
      {
        "name": "Hand of Thought and Motion",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hand-of-thought-and-motion-blinder",
        "count": 3,
        "total": 6
      },
      {
        "name": "Tulborn",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tulborn-spiraled-wand",
        "count": 4,
        "total": 8
      },
      {
        "name": "The Escape",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-escape",
        "count": 1,
        "total": 3
      },
      {
        "name": "The Formles Flame",
        "value": 0,
        "count": 3,
        "total": 0
      },
      {
        "name": "Xoph's Inception",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "xophs-inception-bone-bow",
        "count": 2,
        "total": 2
      }
    ],
    "roi": 623.0447873563219,
    "runs": 29,
    "info": "Loot from invitations rolled with 70% quantity and higher"
  }
]

export const Legion: PathOfProfitRecipe[] = [
  {
    "name": "5 Emblem Domain",
    "cost": 337.5,
    "revenue": 117.51369565217394,
    "profit": -219.98630434782606,
    "costItems": [
      {
        "name": "Timeless Eternal Emblem",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-eternal-emblem",
        "count": 1,
        "total": 10
      },
      {
        "name": "Timeless Vaal Emblem",
        "value": 18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-vaal-emblem",
        "count": 1,
        "total": 18
      },
      {
        "name": "Timeless Karui Emblem",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-karui-emblem",
        "count": 1,
        "total": 10
      },
      {
        "name": "Timeless Templar Emblem",
        "value": 145,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-templar-emblem",
        "count": 1,
        "total": 145
      },
      {
        "name": "Timeless Maraketh Emblem",
        "value": 154.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-maraketh-emblem",
        "count": 1,
        "total": 154.5
      }
    ],
    "revenueItems": [
      {
        "name": "Militant Faith",
        "value": 20.53,
        "links": 0,
        "mapTier": 0,
        "detailsId": "militant-faith-timeless-jewel",
        "count": 63,
        "total": 1293.39
      },
      {
        "name": "Glorious Vanity",
        "value": 27.92,
        "links": 0,
        "mapTier": 0,
        "detailsId": "glorious-vanity-timeless-jewel",
        "count": 64,
        "total": 1786.88
      },
      {
        "name": "Lethal Pride",
        "value": 16.55,
        "links": 0,
        "mapTier": 0,
        "detailsId": "lethal-pride-timeless-jewel",
        "count": 65,
        "total": 1075.75
      },
      {
        "name": "Brutal Restraint",
        "value": 29.23,
        "links": 0,
        "mapTier": 0,
        "detailsId": "brutal-restraint-timeless-jewel",
        "count": 64,
        "total": 1870.72
      },
      {
        "name": "Elegant Hubris",
        "value": 12.02,
        "links": 0,
        "mapTier": 0,
        "detailsId": "elegant-hubris-timeless-jewel",
        "count": 62,
        "total": 745.24
      },
      {
        "name": "Geomancer's Incubator",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "geomancers-incubator",
        "count": 33,
        "total": 297
      },
      {
        "name": "Thaumaturge's Incubator",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "thaumaturges-incubator",
        "count": 37,
        "total": 148
      },
      {
        "name": "Fragmented Incubator",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragmented-incubator",
        "count": 195,
        "total": 195
      },
      {
        "name": "Time-Lost Incubator",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "time-lost-incubator",
        "count": 31,
        "total": 155
      },
      {
        "name": "Fossilised Incubator",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fossilised-incubator",
        "count": 168,
        "total": 336
      },
      {
        "name": "Ornate Incubator",
        "value": 4.11,
        "links": 0,
        "mapTier": 0,
        "detailsId": "ornate-incubator",
        "count": 164,
        "total": 674.0400000000001
      },
      {
        "name": "Skittering Incubator",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "skittering-incubator",
        "count": 182,
        "total": 546
      },
      {
        "name": "Diviner's Incubator",
        "value": 3.36,
        "links": 0,
        "mapTier": 0,
        "detailsId": "diviners-incubator",
        "count": 192,
        "total": 645.12
      },
      {
        "name": "Foreboding Incubator",
        "value": 4.36,
        "links": 0,
        "mapTier": 0,
        "detailsId": "foreboding-incubator",
        "count": 122,
        "total": 531.9200000000001
      },
      {
        "name": "Otherworldly Incubator",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "otherworldly-incubator",
        "count": 68,
        "total": 136
      },
      {
        "name": "Obscured Incubator",
        "value": 2.8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscured-incubator",
        "count": 134,
        "total": 375.2
      }
    ],
    "roi": -65.18112721417069,
    "runs": 92
  }
]

export const NormalBosses: PathOfProfitRecipe[] = [
  {
    "name": "Atziri",
    "cost": 1.8069083088235296,
    "revenue": 4.264222802923976,
    "profit": 2.457314494100447,
    "costItems": [
      {
        "name": "Sacrifice at Dusk",
        "value": 0.28375,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-dusk",
        "count": 1,
        "total": 0.28375
      },
      {
        "name": "Sacrifice at Dawn",
        "value": 0.33333,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-dawn",
        "count": 1,
        "total": 0.33333
      },
      {
        "name": "Sacrifice at Noon",
        "value": 0.48692705882352944,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-noon",
        "count": 1,
        "total": 0.48692705882352944
      },
      {
        "name": "Sacrifice at Midnight",
        "value": 0.70290125,
        "links": 0,
        "mapTier": 0,
        "detailsId": "sacrifice-at-midnight",
        "count": 1,
        "total": 0.70290125
      }
    ],
    "revenueItems": [
      {
        "name": "Atziri's Promise",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-promise",
        "count": 66,
        "total": 66
      },
      {
        "name": "Doryani's Catalyst",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "doryanis-catalyst-vaal-sceptre",
        "count": 8,
        "total": 40
      },
      {
        "name": "Atziri's Step",
        "value": 2.27,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-step-slink-boots",
        "count": 12,
        "total": 27.240000000000002
      },
      {
        "name": "Doryani's Invitation",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "doryanis-invitation-physical-heavy-belt",
        "variant": "Physical",
        "count": 14,
        "total": 70
      },
      {
        "name": "Mortal Hope",
        "value": 4.975308888888889,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-hope",
        "count": 4,
        "total": 19.901235555555555
      },
      {
        "name": "Mortal Grief",
        "value": 4.631945,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-grief",
        "count": 14,
        "total": 64.84723
      },
      {
        "name": "Mortal Rage",
        "value": 6.7770905263157895,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-rage",
        "count": 9,
        "total": 60.993814736842104
      },
      {
        "name": "Mortal Ignorance",
        "value": 9.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-ignorance",
        "count": 8,
        "total": 77.44
      }
    ],
    "roi": 135.99552794687153,
    "runs": 100
  },
  {
    "name": "Uber Atziri",
    "cost": 26.064344415204676,
    "revenue": 11.818308457711442,
    "profit": -14.246035957493234,
    "costItems": [
      {
        "name": "Mortal Hope",
        "value": 4.975308888888889,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-hope",
        "count": 1,
        "total": 4.975308888888889
      },
      {
        "name": "Mortal Grief",
        "value": 4.631945,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-grief",
        "count": 1,
        "total": 4.631945
      },
      {
        "name": "Mortal Rage",
        "value": 6.7770905263157895,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-rage",
        "count": 1,
        "total": 6.7770905263157895
      },
      {
        "name": "Mortal Ignorance",
        "value": 9.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mortal-ignorance",
        "count": 1,
        "total": 9.68
      }
    ],
    "revenueItems": [
      {
        "name": "Atziri's Acuity",
        "value": 47.14,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-acuity-vaal-gauntlets",
        "count": 14,
        "total": 659.96
      },
      {
        "name": "Atziri's Disfavour",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-disfavour-vaal-axe",
        "count": 49,
        "total": 490
      },
      {
        "name": "The Vertex",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-vertex-vaal-mask",
        "count": 187,
        "total": 561
      },
      {
        "name": "Atziri's Splendour",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "atziris-splendour-es-sacrificial-garb",
        "variant": "ES",
        "count": 152,
        "total": 3040
      }
    ],
    "roi": -54.6571812072234,
    "runs": 402
  },
  {
    "name": "Cortex",
    "cost": 370.35,
    "revenue": 221.08694444444444,
    "profit": -149.26305555555558,
    "costItems": [
      {
        "name": "Cortex",
        "value": 370.35,
        "links": 0,
        "mapTier": 12,
        "detailsId": "cortex-t12",
        "count": 1,
        "total": 370.35
      }
    ],
    "revenueItems": [
      {
        "name": "Nebulis",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "nebulis-void-sceptre",
        "count": 50,
        "total": 500
      },
      {
        "name": "Offering to the Serpent",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "offering-to-the-serpent-legion-gloves",
        "count": 55,
        "total": 275
      },
      {
        "name": "Bottled Faith",
        "value": 964.4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bottled-faith",
        "count": 27,
        "total": 26038.8
      },
      {
        "name": "Garb of the Ephemeral",
        "value": 418.56,
        "links": 0,
        "mapTier": 0,
        "detailsId": "garb-of-the-ephemeral-savants-robe",
        "count": 12,
        "total": 5022.72
      }
    ],
    "roi": -40.30324167829231,
    "runs": 144
  },
  {
    "name": "Synthesised Memories",
    "cost": 40,
    "revenue": 8.3,
    "profit": -31.7,
    "costItems": [
      {
        "name": "Twisted Distant Memory",
        "value": 40,
        "links": 0,
        "mapTier": 16,
        "detailsId": "twisted-distant-memory-t16",
        "count": 1,
        "total": 40
      }
    ],
    "revenueItems": [
      {
        "name": "Circle of Fear",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "circle-of-fear-sapphire-ring",
        "count": 12,
        "total": 120
      },
      {
        "name": "Circle of Guilt",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "circle-of-guilt-iron-ring",
        "count": 5,
        "total": 50
      },
      {
        "name": "Circle of Anguish",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "circle-of-anguish-ruby-ring",
        "count": 16,
        "total": 160
      },
      {
        "name": "Circle of Nostalgia",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "circle-of-nostalgia-amethyst-ring",
        "count": 14,
        "total": 140
      },
      {
        "name": "Circle of Regret",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "circle-of-regret-topaz-ring",
        "count": 13,
        "total": 65
      },
      {
        "name": "Perepiteia",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perepiteia-ezomyte-spiked-shield",
        "count": 12,
        "total": 60
      },
      {
        "name": "Mask of the Tribunal",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mask-of-the-tribunal-magistrate-crown",
        "count": 13,
        "total": 65
      },
      {
        "name": "Storm's Gift",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "storms-gift-assassins-mitts",
        "count": 17,
        "total": 170
      }
    ],
    "roi": -79.25,
    "runs": 100
  },
  {
    "name": "Elder",
    "cost": 41.38461538461539,
    "revenue": 32.08441245535714,
    "profit": -9.300202929258248,
    "costItems": [
      {
        "name": "Fragment of Enslavement",
        "value": 10.384615384615385,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-enslavement",
        "count": 1,
        "total": 10.384615384615385
      },
      {
        "name": "Fragment of Eradication",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-eradication",
        "count": 1,
        "total": 10
      },
      {
        "name": "Fragment of Purification",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-purification",
        "count": 1,
        "total": 10
      },
      {
        "name": "Fragment of Constriction",
        "value": 11,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-constriction",
        "count": 1,
        "total": 11
      }
    ],
    "revenueItems": [
      {
        "name": "Impresence, Chaos",
        "value": 14.38,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-chaos-onyx-amulet",
        "variant": "Chaos",
        "count": 2,
        "total": 28.76
      },
      {
        "name": "Impresence, Physical",
        "value": 5.98,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-physical-onyx-amulet",
        "variant": "Physical",
        "count": 2,
        "total": 11.96
      },
      {
        "name": "Impresence, Fire",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-fire-onyx-amulet",
        "variant": "Fire",
        "count": 3,
        "total": 15
      },
      {
        "name": "Impresence, Lightning",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-lightning-onyx-amulet",
        "variant": "Lightning",
        "count": 5,
        "total": 15
      },
      {
        "name": "Impresence, Cold",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "impresence-cold-onyx-amulet",
        "variant": "Cold",
        "count": 5,
        "total": 15
      },
      {
        "name": "Cyclopean Coil",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "cyclopean-coil-leather-belt",
        "count": 23,
        "total": 46
      },
      {
        "name": "Nebuloch",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "nebuloch-nightmare-mace",
        "count": 10,
        "total": 40
      },
      {
        "name": "Blasphemer's Grasp",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "blasphemers-grasp-assassins-mitts",
        "count": 32,
        "total": 96
      },
      {
        "name": "Watcher's Eye",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "watchers-eye-prismatic-jewel",
        "count": 28,
        "total": 1120
      },
      {
        "name": "Hopeshredder",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "hopeshredder-ranger-bow",
        "count": 9,
        "total": 27
      },
      {
        "name": "Shimmeron",
        "value": 3.23,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shimmeron-tornado-wand",
        "count": 10,
        "total": 32.3
      },
      {
        "name": "Fragment of Terror",
        "value": 17.942710625,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-terror",
        "count": 50,
        "total": 897.13553125
      },
      {
        "name": "Fragment of Emptiness",
        "value": 17.285714285714285,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-emptiness",
        "count": 50,
        "total": 864.2857142857142
      }
    ],
    "roi": -22.472609308616583,
    "runs": 100
  },
  {
    "name": "Uber Elder",
    "cost": 148.9506471329365,
    "revenue": 22.925357142857138,
    "profit": -126.02528999007936,
    "costItems": [
      {
        "name": "Fragment of Shape",
        "value": 59.72222222222222,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-shape",
        "count": 1,
        "total": 59.72222222222222
      },
      {
        "name": "Fragment of Knowledge",
        "value": 54,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-knowledge",
        "count": 1,
        "total": 54
      },
      {
        "name": "Fragment of Emptiness",
        "value": 17.285714285714285,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-emptiness",
        "count": 1,
        "total": 17.285714285714285
      },
      {
        "name": "Fragment of Terror",
        "value": 17.942710625,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-terror",
        "count": 1,
        "total": 17.942710625
      }
    ],
    "revenueItems": [
      {
        "name": "Watcher's Eye",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "watchers-eye-prismatic-jewel",
        "count": 26,
        "total": 1040
      },
      {
        "name": "Disintegrator",
        "value": 10.79,
        "links": 0,
        "mapTier": 0,
        "detailsId": "disintegrator-maelstrom-staff",
        "count": 7,
        "total": 75.53
      },
      {
        "name": "Voidfletcher",
        "value": 30,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voidfletcher-penetrating-arrow-quiver",
        "count": 16,
        "total": 480
      },
      {
        "name": "Mark of the Elder",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mark-of-the-elder-steel-ring",
        "count": 30,
        "total": 150
      },
      {
        "name": "Mark of the Shaper",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mark-of-the-shaper-opal-ring",
        "count": 34,
        "total": 170
      },
      {
        "name": "Indigon",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "indigon-hubris-circlet",
        "count": 13,
        "total": 195
      },
      {
        "name": "Voidforge",
        "value": 24.58,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voidforge-infernal-sword",
        "count": 9,
        "total": 221.21999999999997
      },
      {
        "name": "Maven's Invitation: The Feared",
        "value": 2.12,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-feared",
        "count": 14,
        "total": 29.68
      },
      {
        "name": "The Gulf",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-gulf",
        "count": 6,
        "total": 60
      },
      {
        "name": "Void of the Elements",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "void-of-the-elements",
        "count": 1,
        "total": 5
      },
      {
        "name": "The Eternity Shroud",
        "value": 47.07,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-eternity-shroud-blood-raiment",
        "count": 3,
        "total": 141.21
      }
    ],
    "roi": -84.6087562664991,
    "runs": 112
  },
  {
    "name": "Shaper",
    "cost": 30.94523557142857,
    "revenue": 62.13391111111111,
    "profit": 31.188675539682542,
    "costItems": [
      {
        "name": "Fragment of the Chimera",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 1,
        "total": 8
      },
      {
        "name": "Fragment of the Hydra",
        "value": 7.966666,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 1,
        "total": 7.966666
      },
      {
        "name": "Fragment of the Phoenix",
        "value": 7.907141,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 1,
        "total": 7.907141
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7.071428571428571,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 1,
        "total": 7.071428571428571
      }
    ],
    "revenueItems": [
      {
        "name": "Shaper's Touch",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "shapers-touch-crusader-gloves",
        "count": 43,
        "total": 86
      },
      {
        "name": "Dying Sun",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "dying-sun",
        "count": 20,
        "total": 300
      },
      {
        "name": "Starforge",
        "value": 23.15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "starforge-infernal-sword",
        "count": 3,
        "total": 69.44999999999999
      },
      {
        "name": "Voidwalker",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "voidwalker-murder-boots",
        "count": 33,
        "total": 66
      },
      {
        "name": "Solstice Vigil",
        "value": 5.83,
        "links": 0,
        "mapTier": 0,
        "detailsId": "solstice-vigil-onyx-amulet",
        "count": 1,
        "total": 5.83
      },
      {
        "name": "Fragment of Shape",
        "value": 59.72222222222222,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-shape",
        "count": 50,
        "total": 2986.111111111111
      },
      {
        "name": "Fragment of Knowledge",
        "value": 54,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-knowledge",
        "count": 50,
        "total": 2700
      }
    ],
    "roi": 100.78667996464937,
    "runs": 100
  },
  {
    "name": "Maven",
    "cost": 104.2,
    "revenue": 134.7110447761194,
    "profit": 30.51104477611939,
    "costItems": [
      {
        "name": "The Maven's Writ",
        "value": 104.2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-mavens-writ",
        "count": 1,
        "total": 104.2
      }
    ],
    "revenueItems": [
      {
        "name": "Elevated Sextant",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "elevated-sextant",
        "count": 57,
        "total": 1140
      },
      {
        "name": "Maven's Orb",
        "value": 521,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-orb",
        "count": 30,
        "total": 15630
      },
      {
        "name": "Restless Cycles",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "restless-cycles-platinum-valdos-rest-watchstone-15",
        "variant": "15",
        "count": 5,
        "total": 50
      },
      {
        "name": "The Walls",
        "value": 15,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-walls-platinum-haewark-hamlet-watchstone-15",
        "variant": "15",
        "count": 1,
        "total": 15
      },
      {
        "name": "The Closest Peak",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-closest-peak-platinum-lex-proxima-watchstone-15",
        "variant": "15",
        "count": 5,
        "total": 50
      },
      {
        "name": "The Vast Horizon",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-vast-horizon-platinum-new-vastir-watchstone-15",
        "variant": "15",
        "count": 8,
        "total": 80
      },
      {
        "name": "The Claim",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-claim-platinum-tirns-end-watchstone-15",
        "variant": "15",
        "count": 8,
        "total": 80
      },
      {
        "name": "Atop the Atlas",
        "value": 13.76,
        "links": 0,
        "mapTier": 15,
        "detailsId": "atop-the-atlas-platinum-lex-ejoris-watchstone-15",
        "variant": "15",
        "count": 3,
        "total": 41.28
      },
      {
        "name": "The False Hope",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-false-hope-platinum-lira-arthain-watchstone-15",
        "variant": "15",
        "count": 5,
        "total": 50
      },
      {
        "name": "The Builder",
        "value": 10,
        "links": 0,
        "mapTier": 15,
        "detailsId": "the-builder-platinum-glennach-cairns-watchstone-15",
        "variant": "15",
        "count": 5,
        "total": 50
      },
      {
        "name": "Doppelgänger Guise",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "doppelgänger-guise-sadist-garb",
        "count": 5,
        "total": 200
      },
      {
        "name": "Arn's Anguish",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "arns-anguish-cloth-belt",
        "count": 12,
        "total": 60
      },
      {
        "name": "Olesya's Delight",
        "value": 5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "olesyas-delight-cloth-belt",
        "count": 13,
        "total": 65
      },
      {
        "name": "Legacy of Fury",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "legacy-of-fury-wyrmscale-boots",
        "count": 50,
        "total": 150
      },
      {
        "name": "Viridi's Veil",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "viridis-veil-praetor-crown",
        "count": 29,
        "total": 290
      },
      {
        "name": "Graven's Secret",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gravens-secret-cloth-belt",
        "count": 25,
        "total": 100
      }
    ],
    "roi": 29.281232990517648,
    "runs": 134
  },
  {
    "name": "Catarina The Mastermind",
    "cost": 0,
    "revenue": 12.381290322580647,
    "profit": 12.381290322580647,
    "costItems": [
      {
        "name": "",
        "value": 0,
        "count": 1,
        "total": 0
      }
    ],
    "revenueItems": [
      {
        "name": "The Queen's Hunger",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-queens-hunger-vaal-regalia",
        "count": 4,
        "total": 40
      },
      {
        "name": "Cinderswallow Urn",
        "value": 19.91,
        "links": 0,
        "mapTier": 0,
        "detailsId": "cinderswallow-urn",
        "count": 10,
        "total": 199.1
      },
      {
        "name": "The Devouring Diadem",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-devouring-diadem-necromancer-circlet",
        "count": 13,
        "total": 130
      },
      {
        "name": "Bitterbind Point",
        "value": 3.68,
        "links": 0,
        "mapTier": 0,
        "detailsId": "bitterbind-point-titanium-spirit-shield",
        "count": 4,
        "total": 14.72
      }
    ],
    "roi": 1238.1290322580646,
    "runs": 31
  }
]

export const NormalGuardians: PathOfProfitRecipe[] = [
  {
    "name": "Guardian Of Hydra",
    "cost": 6.41,
    "revenue": 17.664052051705173,
    "profit": 11.254052051705173,
    "costItems": [
      {
        "name": "Lair of the Hydra Map",
        "value": 6.41,
        "links": 0,
        "mapTier": 16,
        "detailsId": "lair-of-the-hydra-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 6.41
      }
    ],
    "revenueItems": [
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 101,
        "total": 703.4292572222223
      },
      {
        "name": "Snakepit",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "snakepit-sapphire-ring",
        "count": 1,
        "total": 1
      },
      {
        "name": "Slivertongue",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "slivertongue-harbinger-bow",
        "count": 3,
        "total": 3
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 1,
        "total": 2
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 1.01,
        "total": 8.08
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 1.01,
        "total": 8.08
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 1.01,
        "total": 40.4
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 21.21,
        "total": 1018.08
      }
    ],
    "roi": 175.57023481599333,
    "runs": 101
  },
  {
    "name": "Guardian Of Minotaur",
    "cost": 3,
    "revenue": 18.782857142857143,
    "profit": 15.782857142857143,
    "costItems": [
      {
        "name": "Maze of the Minotaur Map",
        "value": 3,
        "links": 0,
        "mapTier": 16,
        "detailsId": "maze-of-the-minotaur-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 3
      }
    ],
    "revenueItems": [
      {
        "name": "The Brass Dome",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-brass-dome-gladiator-plate",
        "count": 4,
        "total": 80
      },
      {
        "name": "Brain Rattler",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "brain-rattler-meatgrinder",
        "count": 4,
        "total": 4
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 77,
        "total": 539
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 2,
        "total": 4
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 0.77,
        "total": 6.16
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 0.77,
        "total": 6.16
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 0.77,
        "total": 30.8
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 16.17,
        "total": 776.1600000000001
      }
    ],
    "roi": 526.0952380952381,
    "runs": 77
  },
  {
    "name": "Guardian Of Chimera",
    "cost": 7.17,
    "revenue": 17.990000000000002,
    "profit": 10.820000000000002,
    "costItems": [
      {
        "name": "Pit of the Chimera Map",
        "value": 7.17,
        "links": 0,
        "mapTier": 16,
        "detailsId": "pit-of-the-chimera-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 7.17
      }
    ],
    "revenueItems": [
      {
        "name": "The Scourge",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-scourge-terror-claw",
        "count": 3,
        "total": 3
      },
      {
        "name": "Obscurantis",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscurantis-lion-pelt",
        "count": 1,
        "total": 2
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 20,
        "total": 140
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 1,
        "total": 2
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 0.2,
        "total": 1.6
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 0.2,
        "total": 1.6
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 0.2,
        "total": 8
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 4.2,
        "total": 201.60000000000002
      }
    ],
    "roi": 150.90655509065553,
    "runs": 20
  },
  {
    "name": "Guardian Of Phoenix",
    "cost": 4,
    "revenue": 17.83230769230769,
    "profit": 13.83230769230769,
    "costItems": [
      {
        "name": "Forge of the Phoenix Map",
        "value": 4,
        "links": 0,
        "mapTier": 16,
        "detailsId": "forge-of-the-phoenix-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 4
      }
    ],
    "revenueItems": [
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 104,
        "total": 728
      },
      {
        "name": "Razor of the Seventh Sun",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "razor-of-the-seventh-sun-midnight-blade",
        "count": 4,
        "total": 4
      },
      {
        "name": "Eye of Innocence",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eye-of-innocence-citrine-amulet",
        "count": 3,
        "total": 12
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 2,
        "total": 4
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 1.04,
        "total": 8.32
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 1.04,
        "total": 8.32
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 1.04,
        "total": 41.6
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 21.84,
        "total": 1048.32
      }
    ],
    "roi": 345.80769230769226,
    "runs": 104
  }
]

export const Scrab: PathOfProfitRecipe[] = [
  {
    "name": "Rusted Legion Scarab",
    "cost": 7,
    "revenue": 5.340205,
    "profit": -1.659795,
    "costItems": [
      {
        "name": "Rusted Legion Scarab",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-legion-scarab",
        "count": 1,
        "total": 7
      }
    ],
    "revenueItems": [
      {
        "name": "Timeless Maraketh Emblem",
        "value": 51.25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-maraketh-emblem",
        "count": 0.93,
        "total": 47.6625
      },
      {
        "name": "Timeless Templar Emblem",
        "value": 46.2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-templar-emblem",
        "count": 1.29,
        "total": 59.598000000000006
      },
      {
        "name": "Timeless Vaal Emblem",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-vaal-emblem",
        "count": 2.82,
        "total": 42.3
      },
      {
        "name": "Timeless Karui Emblem",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-karui-emblem",
        "count": 3.58,
        "total": 53.7
      },
      {
        "name": "Timeless Eternal Emblem",
        "value": 16,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-eternal-emblem",
        "count": 4.07,
        "total": 65.12
      },
      {
        "name": "Geomancer's Incubator",
        "value": 11.44,
        "links": 0,
        "mapTier": 0,
        "detailsId": "geomancers-incubator",
        "count": 4,
        "total": 45.76
      },
      {
        "name": "Thaumaturge's Incubator",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "thaumaturges-incubator",
        "count": 1,
        "total": 3
      },
      {
        "name": "Time-Lost Incubator",
        "value": 12.88,
        "links": 0,
        "mapTier": 0,
        "detailsId": "time-lost-incubator",
        "count": 3,
        "total": 38.64
      },
      {
        "name": "Fossilised Incubator",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fossilised-incubator",
        "count": 8,
        "total": 16
      },
      {
        "name": "Ornate Incubator",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "ornate-incubator",
        "count": 14,
        "total": 42
      },
      {
        "name": "Skittering Incubator",
        "value": 3.78,
        "links": 0,
        "mapTier": 0,
        "detailsId": "skittering-incubator",
        "count": 12,
        "total": 45.36
      },
      {
        "name": "Diviner's Incubator",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "diviners-incubator",
        "count": 7,
        "total": 28
      },
      {
        "name": "Foreboding Incubator",
        "value": 6,
        "links": 0,
        "mapTier": 0,
        "detailsId": "foreboding-incubator",
        "count": 3,
        "total": 18
      },
      {
        "name": "Mysterious Incubator",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mysterious-incubator",
        "count": 11,
        "total": 11
      },
      {
        "name": "Obscured Incubator",
        "value": 2.98,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscured-incubator",
        "count": 6,
        "total": 17.88
      }
    ],
    "roi": -23.711357142857143,
    "runs": 100
  },
  {
    "name": "Gilded Legion Scarab",
    "cost": 16.4,
    "revenue": 14.138329999999998,
    "profit": -2.2616700000000005,
    "costItems": [
      {
        "name": "Gilded Legion Scarab",
        "value": 16.4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-legion-scarab",
        "count": 1,
        "total": 16.4
      }
    ],
    "revenueItems": [
      {
        "name": "Timeless Maraketh Emblem",
        "value": 51.25,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-maraketh-emblem",
        "count": 4.94,
        "total": 253.175
      },
      {
        "name": "Timeless Templar Emblem",
        "value": 46.2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-templar-emblem",
        "count": 5.34,
        "total": 246.708
      },
      {
        "name": "Timeless Vaal Emblem",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-vaal-emblem",
        "count": 9.26,
        "total": 138.9
      },
      {
        "name": "Timeless Karui Emblem",
        "value": 15,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-karui-emblem",
        "count": 11.79,
        "total": 176.85
      },
      {
        "name": "Timeless Eternal Emblem",
        "value": 16,
        "links": 0,
        "mapTier": 0,
        "detailsId": "timeless-eternal-emblem",
        "count": 11.72,
        "total": 187.52
      },
      {
        "name": "Geomancer's Incubator",
        "value": 11.44,
        "links": 0,
        "mapTier": 0,
        "detailsId": "geomancers-incubator",
        "count": 3,
        "total": 34.32
      },
      {
        "name": "Thaumaturge's Incubator",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "thaumaturges-incubator",
        "count": 3,
        "total": 9
      },
      {
        "name": "Time-Lost Incubator",
        "value": 12.88,
        "links": 0,
        "mapTier": 0,
        "detailsId": "time-lost-incubator",
        "count": 6,
        "total": 77.28
      },
      {
        "name": "Fossilised Incubator",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fossilised-incubator",
        "count": 19,
        "total": 38
      },
      {
        "name": "Ornate Incubator",
        "value": 3,
        "links": 0,
        "mapTier": 0,
        "detailsId": "ornate-incubator",
        "count": 11,
        "total": 33
      },
      {
        "name": "Skittering Incubator",
        "value": 3.78,
        "links": 0,
        "mapTier": 0,
        "detailsId": "skittering-incubator",
        "count": 17,
        "total": 64.25999999999999
      },
      {
        "name": "Diviner's Incubator",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "diviners-incubator",
        "count": 15,
        "total": 60
      },
      {
        "name": "Foreboding Incubator",
        "value": 6,
        "links": 0,
        "mapTier": 0,
        "detailsId": "foreboding-incubator",
        "count": 9,
        "total": 54
      },
      {
        "name": "Mysterious Incubator",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mysterious-incubator",
        "count": 14,
        "total": 14
      },
      {
        "name": "Obscured Incubator",
        "value": 2.98,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscured-incubator",
        "count": 9,
        "total": 26.82
      }
    ],
    "roi": -13.790670731707323,
    "runs": 100
  },
  {
    "name": "Gilded Bestiary Scarab",
    "cost": 9,
    "revenue": 6.0355,
    "profit": -2.9645,
    "costItems": [
      {
        "name": "Gilded Bestiary Scarab",
        "value": 9,
        "links": 0,
        "mapTier": 0,
        "detailsId": "gilded-bestiary-scarab",
        "count": 1,
        "total": 9
      }
    ],
    "revenueItems": [
      {
        "name": "Farric Tiger Alpha",
        "value": 65,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-tiger-alpha",
        "count": 0,
        "total": 0
      },
      {
        "name": "Craicic Spider Crab",
        "value": 13.51,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craicic-spider-crab",
        "count": 2,
        "total": 27.02
      },
      {
        "name": "Fenumal Hybrid Arachnid",
        "value": 22,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumal-hybrid-arachnid",
        "count": 1,
        "total": 22
      },
      {
        "name": "Saqawine Rhex",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawine-rhex",
        "count": 4,
        "total": 40
      },
      {
        "name": "Farric Frost Hellion Alpha",
        "value": 4.18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-frost-hellion-alpha",
        "count": 12,
        "total": 50.16
      },
      {
        "name": "Farric Lynx Alpha",
        "value": 14,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-lynx-alpha",
        "count": 7,
        "total": 98
      },
      {
        "name": "Farric Wolf Alpha",
        "value": 13,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-wolf-alpha",
        "count": 4,
        "total": 52
      },
      {
        "name": "Craicic Chimeral",
        "value": 68.79,
        "links": 0,
        "mapTier": 0,
        "detailsId": "craicic-chimeral",
        "count": 3,
        "total": 206.37
      },
      {
        "name": "Fenumal Plagued Arachnid",
        "value": 18,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fenumal-plagued-arachnid",
        "count": 4,
        "total": 72
      },
      {
        "name": "Farric Ape",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "farric-ape",
        "count": 4,
        "total": 16
      },
      {
        "name": "Saqawine Vulture",
        "value": 10,
        "links": 0,
        "mapTier": 0,
        "detailsId": "saqawine-vulture",
        "count": 2,
        "total": 20
      }
    ],
    "roi": -32.93888888888889,
    "runs": 100
  },
  {
    "name": "Rusted Metamorph Scarab",
    "cost": 4,
    "revenue": 6.438651225,
    "profit": 2.438651225,
    "costItems": [
      {
        "name": "Rusted Metamorph Scarab",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "rusted-metamorph-scarab",
        "count": 1,
        "total": 4
      }
    ],
    "revenueItems": [
      {
        "name": "Fertile Catalyst",
        "value": 13,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fertile-catalyst",
        "count": 12,
        "total": 156
      },
      {
        "name": "Prismatic Catalyst",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "prismatic-catalyst",
        "count": 21,
        "total": 168
      },
      {
        "name": "Tempering Catalyst",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "tempering-catalyst",
        "count": 21,
        "total": 84
      },
      {
        "name": "Turbulent Catalyst",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "turbulent-catalyst",
        "count": 70,
        "total": 70
      },
      {
        "name": "Abrasive Catalyst",
        "value": 0.5,
        "links": 0,
        "mapTier": 0,
        "detailsId": "abrasive-catalyst",
        "count": 81,
        "total": 40.5
      },
      {
        "name": "Intrinsic Catalyst",
        "value": 0.6901975,
        "links": 0,
        "mapTier": 0,
        "detailsId": "intrinsic-catalyst",
        "count": 143,
        "total": 98.6982425
      },
      {
        "name": "Imbued Catalyst",
        "value": 0.41667,
        "links": 0,
        "mapTier": 0,
        "detailsId": "imbued-catalyst",
        "count": 64,
        "total": 26.66688
      }
    ],
    "roi": 60.966280625,
    "runs": 100
  }
]

export const TalentedGuardians: PathOfProfitRecipe[] = [
  {
    "name": "Allied Guardian Of Hydra",
    "cost": 6.41,
    "revenue": 21.16335898239824,
    "profit": 14.75335898239824,
    "costItems": [
      {
        "name": "Lair of the Hydra Map",
        "value": 6.41,
        "links": 0,
        "mapTier": 16,
        "detailsId": "lair-of-the-hydra-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 6.41
      }
    ],
    "revenueItems": [
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 101,
        "total": 703.4292572222223
      },
      {
        "name": "Snakepit",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "snakepit-sapphire-ring",
        "count": 1,
        "total": 1
      },
      {
        "name": "Slivertongue",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "slivertongue-harbinger-bow",
        "count": 3,
        "total": 3
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 16.83,
        "total": 117.80999999999999
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 16.83,
        "total": 117.80999999999999
      },
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 16.83,
        "total": 117.80999999999999
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 1,
        "total": 2
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 1.01,
        "total": 8.08
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 1.01,
        "total": 8.08
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 1.01,
        "total": 40.4
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 21.21,
        "total": 1018.08
      }
    ],
    "roi": 230.1616065896761,
    "runs": 101
  },
  {
    "name": "Allied Guardian Of Minotaur",
    "cost": 3,
    "revenue": 22.276057267604617,
    "profit": 19.276057267604617,
    "costItems": [
      {
        "name": "Maze of the Minotaur Map",
        "value": 3,
        "links": 0,
        "mapTier": 16,
        "detailsId": "maze-of-the-minotaur-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 3
      }
    ],
    "revenueItems": [
      {
        "name": "The Brass Dome",
        "value": 20,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-brass-dome-gladiator-plate",
        "count": 4,
        "total": 80
      },
      {
        "name": "Brain Rattler",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "brain-rattler-meatgrinder",
        "count": 4,
        "total": 4
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 77,
        "total": 539
      },
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 12.83,
        "total": 89.35640960555556
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 12.83,
        "total": 89.81
      },
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 12.83,
        "total": 89.81
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 2,
        "total": 4
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 0.77,
        "total": 6.16
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 0.77,
        "total": 6.16
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 0.77,
        "total": 30.8
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 16.17,
        "total": 776.1600000000001
      }
    ],
    "roi": 642.5352422534872,
    "runs": 77
  },
  {
    "name": "Allied Guardian Of Chimera",
    "cost": 7.17,
    "revenue": 21.4806135775,
    "profit": 14.310613577500002,
    "costItems": [
      {
        "name": "Pit of the Chimera Map",
        "value": 7.17,
        "links": 0,
        "mapTier": 16,
        "detailsId": "pit-of-the-chimera-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 7.17
      }
    ],
    "revenueItems": [
      {
        "name": "The Scourge",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "the-scourge-terror-claw",
        "count": 3,
        "total": 3
      },
      {
        "name": "Obscurantis",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "obscurantis-lion-pelt",
        "count": 1,
        "total": 2
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 20,
        "total": 140
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 3.33,
        "total": 23.310000000000002
      },
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 3.33,
        "total": 23.19227155
      },
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 3.33,
        "total": 23.310000000000002
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 1,
        "total": 2
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 0.2,
        "total": 1.6
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 0.2,
        "total": 1.6
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 0.2,
        "total": 8
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 4.2,
        "total": 201.60000000000002
      }
    ],
    "roi": 199.59014752440726,
    "runs": 20
  },
  {
    "name": "Allied Guardian Of Phoenix",
    "cost": 4,
    "revenue": 21.325743433707263,
    "profit": 17.325743433707263,
    "costItems": [
      {
        "name": "Forge of the Phoenix Map",
        "value": 4,
        "links": 0,
        "mapTier": 16,
        "detailsId": "forge-of-the-phoenix-map-t16-gen-13",
        "variant": ", Gen-13",
        "count": 1,
        "total": 4
      }
    ],
    "revenueItems": [
      {
        "name": "Fragment of the Phoenix",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-phoenix",
        "count": 104,
        "total": 728
      },
      {
        "name": "Fragment of the Minotaur",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-minotaur",
        "count": 17.33,
        "total": 121.30999999999999
      },
      {
        "name": "Fragment of the Hydra",
        "value": 6.9646461111111115,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-hydra",
        "count": 17.33,
        "total": 120.69731710555556
      },
      {
        "name": "Fragment of the Chimera",
        "value": 7,
        "links": 0,
        "mapTier": 0,
        "detailsId": "fragment-of-the-chimera",
        "count": 17.33,
        "total": 121.30999999999999
      },
      {
        "name": "Razor of the Seventh Sun",
        "value": 1,
        "links": 0,
        "mapTier": 0,
        "detailsId": "razor-of-the-seventh-sun-midnight-blade",
        "count": 4,
        "total": 4
      },
      {
        "name": "Eye of Innocence",
        "value": 4,
        "links": 0,
        "mapTier": 0,
        "detailsId": "eye-of-innocence-citrine-amulet",
        "count": 3,
        "total": 12
      },
      {
        "name": "Perfection",
        "value": 2,
        "links": 0,
        "mapTier": 0,
        "detailsId": "perfection",
        "count": 2,
        "total": 4
      },
      {
        "name": "Maven's Invitation: The Forgotten",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-forgotten",
        "count": 1.04,
        "total": 8.32
      },
      {
        "name": "Maven's Invitation: The Hidden",
        "value": 8,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-hidden",
        "count": 1.04,
        "total": 8.32
      },
      {
        "name": "Maven's Invitation: The Twisted",
        "value": 40,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-twisted",
        "count": 1.04,
        "total": 41.6
      },
      {
        "name": "Maven's Invitation: The Formed",
        "value": 48,
        "links": 0,
        "mapTier": 0,
        "detailsId": "mavens-invitation:-the-formed",
        "count": 21.84,
        "total": 1048.32
      }
    ],
    "roi": 433.1435858426816,
    "runs": 104
  }
]