let jokers = [
  {
    name: "Golden Eye",
    text: [
    	"This joker gains {X:mult,C:white}X0.25{} Mult",
			"every time {C:money}${}",
			"is obtained during the round,",
			"resets at the end of the round",
			"{C:inactive}(Currently {X:mult,C:white}X1{}{C:inactive} Mult)"
    ],
    image_url: "img/j_golden_eye.png",
    rarity: "Uncommon"
  },
  {
    name: "Eighties Joker",
    text: [
 			"{C:attention}Jokers{} grant their",
			"{C:dark_edition}edition{} bonus when a",
			"card from the same",
			"{C:dark_edition}edition{} is scored"
    ],
    image_url: "img/j_eighties_joker.png",
    rarity: "Rare"
  },
  {
    name: "Reformatting",
    text: [
			"When {C:attention}Blind{} is selected,",
			"remove the {C:dark_edition}edition{} of",
			"the {C:attention}Joker{} to the right",
			"and gains {X:mult,C:white}X1{} Mult",
			"{C:inactive}(Currently {X:mult,C:white}X1{}{C:inactive} Mult)"
    ],
    image_url: "img/j_reformatting.png",
    rarity: "Rare"
  },
  {
    name: "Collector's Album",
    text: [
			"{C:dark_edition}Edition{} of cards",
			"{C:attention}held in hand{}",
			"counts in scoring"
    ],
    image_url: "img/j_collectors_album.png",
    rarity: "Uncommon"
  },
  {
    name: "Auralist",
    text: [
			"After {C:attention}5{} scoring",
			"{C:attention}Ace{} played,",
			"create an {C:spectral}Aura{} card",
			"{C:inactive}(Currently {C:attention}0{C:inactive}/5)",
			"{C:inactive}(Must have room)"
    ],
    image_url: "img/j_auralist.png",
    rarity: "Uncommon"
  },

  {
    name: "Ghost Joker",
    text: [
			"After selling {C:attention}1{} {C:dark_edition}Negative{} Joker",
			"sell this card to apply {C:dark_edition}Negative{} to a random Joker",
			"{C:inactive}(Currently {C:attention}0{C:inactive}/1)"
    ],
    image_url: "img/j_ghost_joker.png",
    rarity: "Rare"
  },
  {
    name: "Jailed Joker",
    text: [
			"Sell this card to",
			"apply {C:attention}Eternal{} to",
			"all other Jokers",
			"{C:inactive}(If compatible)"
    ],
    image_url: "img/j_jailed_joker.png",
    rarity: "Rare"
  },
  {
    name: "Mouse Hole",
    text: [
			"Lowest-ranked card",
			"of the played hand",
			"give {X:mult,C:white}X1.5{} Mult when scored",
			"{C:inactive}(Requires at least two different rank cards)"
    ],
    image_url: "img/j_mouse_hole.png",
    rarity: "Uncommon"
  },
  {
    name: "Acceleration",
    text: [
      "{C:attention}+1{} hand size",
			"after each hand played,",
			"resets at the end of the round",
			"{C:inactive}(Currently {C:attention}+#1#{C:inactive} hand size)"
    ],
    image_url: "img/j_acceleration.png",
    rarity: "Rare"
  },
  {
    name: "Straight to the Bed",
    text: [
      "Retrigger all cards played",
			"if played hand",
			"contains a {C:attention}Straight{},",
			"Retriggers an additional time",
			"if the played hand also",
			"contains a {C:attention}Flush{}"
    ],
    image_url: "img/j_straight_to_the_bed.png",
    rarity: "Uncommon"
  },

  {
    name: "Alizarin",
    text: [
			"Gain {C:attention}1{} charge each time a {C:red}Red Seal{} is discarded,",
			"With each hand played distributes the charges as additional {C:attention}retriggers{} on each card played",
			"{C:inactive}(Rounded down)",
			"{C:inactive}(Currently {C:attention}+0{}{C:inactive} charge)"
    ],
    image_url: "img/j_alizarin.png",
    rarity: "Uncommon"
  },
  {
    name: "Caerulean",
    text: [
      "Scored {C:blue}Blue Seals{}",
			"give {X:mult,C:white} X0.02 {} Mult per level",
			"of played {C:attention}poker hand{}",
			"{C:inactive}(1 + {X:mult,C:white}0.02{C:inactive} x {C:attention}hand level{C:inactive})"
    ],
    image_url: "img/j_caerulean.png",
    rarity: "Uncommon"
  },
  {
    name: "Gamboge",
    text: [
      "Scored {C:money}Gold Seals{}",
			"give {C:money}$3{} for each",
			"{C:attention}Gold{} card",
			"held in hand"
    ],
    image_url: "img/j_gamboge.png",
    rarity: "Uncommon"
  },
  {
    name: "Zinzolin",
    text: [
			"{C:purple}Purple Seal{} have",
			"{C:green}1 in 2{} chance to",
			"create {C:spectral}Spectral{} card"
    ],
    image_url: "img/j_zinzolin.png",
    rarity: "Uncommon"
  },
  {
    name: "Stellium",
    text: [
      "{C:planet}Planet{} cards increase",
			"hand level by the level",
			"of the weakest {C:attention}poker hand{}"
    ],
    image_url: "img/j_stellium.png",
    rarity: "Rare"
  }
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Voucher"
  // }
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}