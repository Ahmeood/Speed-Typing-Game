let EasyLevel = [
    "liberal",
    "recording",
    "memorandum",
    "professional",
    "observation",
    "disgrace",
    "constitution",
    "champion",
    "advertising",
    "assault",
    "theater",
    "fitness",
    "eyebrow",
    "distribute",
    "atmosphere",
    "battlefield",
    "delicate",
    "foundation",
    "activity",
    "mountain",
    "overall",
    "arrange",
    "contrary",
    "descent",
    "difficulty",
    "wisecrack",
    "ostracize",
    "product",
    "skeleton",
    "discuss",
    "password",
    "trustee",
    "traffic",
    "company",
    "rainbow",
    "strength",
    "appearance",
    "censorship",
    "ecstasy",
    "consideration",
    "comment",
    "comprehensive",
    "contribution",
    "diameter",
    "disagree",
    "criminal",
    "established",
    "traction",
    "speaker",
    "confusion",
    ];

let MedimumLevel = [
        "I don’t respect anybody who can’t tell the difference between Pepsi and Coke.",
        "He poured rocks in the dungeon of his mind.",
        "She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
        "The llama couldn't resist trying the lemonade.",
        "Let me help you with your baggage.",
        "She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
        "He watched the dancing piglets with panda bear tummies in the swimming pool.",
        "A glittering gem is not enough.",
        "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.",
        "The estate agent quickly marked out his territory on the dance floor.",
        "The doll spun around in circles in hopes of coming alive.",
        "She wondered what his eyes were saying beneath his mirrored sunglasses.",
        "She found it strange that people use their cellphones to actually talk to one another.",
        "The urgent care center was flooded with patients after the news of a new deadly virus was made public.",
        "Everyone was curious about the large white blimp that appeared overnight.",
        "The view from the lighthouse excited even the most seasoned traveler.",
        "The lake is a long way from here.",
        "Writing a list of random sentences is harder than I initially thought it would be.",
        "He decided to live his life by the big beats manifesto.",
        "She had some amazing news to share but nobody to share it with.",
        "The bug was having an excellent day until he hit the windshield.",
        "He had unknowingly taken up sleepwalking as a nighttime hobby.",
        "Her fragrance of choice was fresh garlic.",
        "There were a lot of paintings of monkeys waving bamboo sticks in the gallery.",
        "She saw the brake lights, but not in time.",
        "The white water rafting trip was suddenly halted by the unexpected brick wall.",
        "The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.",
        "Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk.",
        "He found rain fascinating yet unpleasant.",
        "At that moment she realized she had a sixth sense.",
        "The efficiency with which he paired the socks in the drawer was quite admirable.",
        "It isn't difficult to do a handstand if you just stand on your hands.",
        "Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.",
        "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
        "With the high wind warning",
        "She tilted her head back and let whip cream stream into her mouth while taking a bath.",
        "They throw cabbage that turns your brain into emotional baggage.",
        "The beauty of the African sunset disguised the danger lurking nearby.",
        "Boulders lined the side of the road foretelling what could come next.",
        "He wasn't bitter that she had moved on but from the radish.",
        "The beach was crowded with snow leopards.",
        "Joe discovered that traffic cones make excellent megaphones.",
        "At last I hear that Nancy is very pretty.",
        "Normal activities took extraordinary amounts of concentration at the high altitude.",
        "I like to leave work after my eight-hour tea-break.",
        "The three-year-old girl ran down the beach as the kite flew behind her.",
        "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.",
        "She had the gift of being able to paint songs.",
        "Abstraction is often one floor above you.",
        "The best key lime pie is still up for debate.",
    ];
        
let HardLevel = [
        "gastrophilanthropist",
        
        "archididascalian",
        
        "bathythermograph",
        
        "electrodynamometer",
        
        "palaeoclimatology",
        
        "zenzizenzizenzic",
        
        "self-determinism",
        
        "penecontemporaneous",
        
        "ornithobiography",
        
        "interramification",
        
        "podobromhydrosis",
        
        "maschalephidrosis",
        
        "antilapsarianism",
        
        "spectroheliokinematograph",
        
        "lautenclavicymbel",
        
        "pneumatophilosophy",
        
        "microclimatology",
        
        "rhinotillexomania",
        
        "symptomatography",
        
        "polyphiloprogenitive",
        
        "quadragintesimal",
        
        "latitudinarianism",
        
        "pseudohermaphroditism",
        
        "lumpenintelligentsia",
        
        "eellogofusciouhipoppokunurious",
        
        "microcalorimeter",
        
        "micropalaeontology",
        
        "anopisthographic",
        
        "ichthyoacanthotoxism",
        
        "palaeotypography",
        
        "chryselephantine",
        
        "triskaidekaphobia",
        
        "hydrometeorology",
        
        "transmigrationism",
        
        "hysteron proteron",
        
        "transcendentalism",
        
        "floccinaucinihilipilification",
        
        "preterpluparenthetical",
        
        "telespectroscope",
        
        "ethnomethodology",
        
        "observationalism",
        
        "predestinarianism",
        
        "chrysoaristocracy",
        
        "brachycatalectic",
        
        "spectroheliograph",
        
        "astrometeorology",
        
        "pantochronometer",
        
        "chronosynchronicity",
        
        "chromoxylography",
        
        "precipitinogenic",
    ];

const lvls = {
    Easy: {
     level: EasyLevel,
     seconds: 10,
       },
    Medium: {
     level: MedimumLevel,
     seconds: 20,
    },
    Hard: {
     level: HardLevel,
     seconds: 20,
    },
};

let defaultLevel = "Medium";
let defaultLevelSeconds = lvls[defaultLevel].seconds;

let title = document.querySelector(".name");
let container = document.querySelector(".container");
let startButton = document.querySelector(".start");
let lvlnameSpan = document.querySelector(".lvl");
let secondsSpan = document.querySelector(".seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggle.onclick = () => {
    nav.classList.add("open");
};

close.onclick = () => {
    nav.classList.remove("open");
};

document.onkeyup = (e) => {
    if (e.key === "Escape") {
    nav.classList.remove("open");
    }
}

lvlnameSpan.innerHTML = defaultLevel;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;

if (defaultLevel == "Medium") {
    scoreTotal.innerHTML = MedimumLevel.length;
}

if (defaultLevel == "Hard") {
    scoreTotal.innerHTML = HardLevel.length;
}

if (defaultLevel == "Easy") {
    scoreTotal.innerHTML = EasyLevel.length;
}

input.onpaste = function () {
    return false;
};

startButton.addEventListener("click", function() {
    toggle.style.cssText = "display: none";
    this.remove();
    input.style.cssText = "display: block;";
    input.value = "";
    input.focus();
    genWords();
    if (theWord.innerHTML.length > 12) {
        theWord.style.cssText = "font-size: 17px;";
    } else {
        theWord.style.cssText = "font-size: 20px;";
    }
});

function genWords() {
    let randomWord = MedimumLevel[Math.trunc(Math.random() * MedimumLevel.length)];

    defaultLevel == "Medium" 
    ? randomWord = MedimumLevel[Math.trunc(Math.random() * MedimumLevel.length)]
    : defaultLevel == "Hard"
    ? randomWord = HardLevel[Math.trunc(Math.random() * HardLevel.length)]
    : defaultLevel == "Easy"
    ? randomWord = EasyLevel[Math.trunc(Math.random() * EasyLevel.length)]
    : false;
   
    let WordIndex = MedimumLevel.indexOf(randomWord);

    defaultLevel == "Medium" 
    ? WordIndex = MedimumLevel.indexOf(randomWord)
    : defaultLevel == "Hard"
    ? WordIndex = HardLevel.indexOf(randomWord)
    : defaultLevel == "Easy"
    ? WordIndex = EasyLevel.indexOf(randomWord)
    : false;

    defaultLevel == "Medium"
    ? MedimumLevel.splice(WordIndex, 1)
    : defaultLevel == "Hard"
    ? HardLevel.splice(WordIndex, 1)
    : defaultLevel == "Easy"
    ? EasyLevel.splice(WordIndex, 1)
    : false;

    theWord.innerHTML = randomWord;

    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;

    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        input.addEventListener("input", function() {

            if (theWord.innerHTML.toLowerCase().length === input.value.toLowerCase().length && input.value != "") {
                input.style.cssText = "display: none;";
                timeLeftSpan.innerHTML = "1";
            }

            if (theWord.innerHTML.slice(0, input.value.length).toLowerCase() == input.value.toLowerCase() && input.value != "") {
                input.style.color = "#009688";
             } else {
                input.style.cssText = "display: none;";
                timeLeftSpan.innerHTML = "1"
            }
        }); 

        if (timeLeftSpan.innerHTML == "0") {
            clearInterval(start);
            
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.style.cssText = "display: block;"
                
                input.focus();

                input.value = "";

                scoreGot.innerHTML++;

                if (defaultLevel == "Medium") {

                 if (MedimumLevel.length > 0) {
                    genWords()
                }};

                 if(defaultLevel == "Hard") {

                 if (HardLevel.length > 0) {
                    genWords()
                }};

                 if(defaultLevel == "Easy") {

                 if (EasyLevel.length > 0) {
                    genWords()
                } else {
                    winOrLoseDivClassName = "win";
                    winOrLoseDivinnerhtml = `<div>CONGRATULATIONS !!!!!!!</div>  <div>YOU WIN !</div>`;
                    finish();
                    

                    clearInterval(start);
                    input.style.cssText = "display: none;";
                }};


                } else {
                    winOrLoseDivClassName = "lose";
                    winOrLoseDivinnerhtml = `<div>GAME OVER !</div>  <div>YOU LOST !</div> <div>The Word: ${theWord.innerHTML}</div><span>Your Word: ${input.value}</span>`;
                    finish();
                    

                    clearInterval(start);
                    input.style.cssText = "display: none;";
            };
        };
        }, 1000);
};



let levels = document.querySelectorAll(".levels > span");

levels.forEach((level) => {
    level.onclick = function() {
        levels.forEach((level) => {
            level.classList.remove("active")
        })
        this.classList.add("active");
        defaultLevel = this.innerHTML;
        defaultLevelSeconds = lvls[defaultLevel].seconds;
        lvlnameSpan.innerHTML = defaultLevel;
        secondsSpan.innerHTML = defaultLevelSeconds;
        timeLeftSpan.innerHTML = defaultLevelSeconds;

        if (defaultLevel == "Hard") {
            scoreTotal.innerHTML = HardLevel.length
        }
        if (defaultLevel == "Easy") {
            scoreTotal.innerHTML = EasyLevel.length
        }
        if (defaultLevel == "Medium") {
            scoreTotal.innerHTML = MedimumLevel.length
        }
    }
});


let secsNumber = document.querySelectorAll(".sec-number > span");

secsNumber.forEach((sec) => {
    sec.onclick = function() {
        secsNumber.forEach((sec) => {
            sec.classList.remove("active");
        });
        this.classList.add("active");

        defaultLevelSeconds = this.innerHTML;
        secondsSpan.innerHTML = defaultLevelSeconds;
        timeLeftSpan.innerHTML = defaultLevelSeconds;
    }
});



let winOrLoseDivClassName = "";
let winOrLoseDivinnerhtml = "";

function finish() {
    let finishDiv = document.createElement("div");
    finishDiv.className = "finish";

    let winOrLoseDiv = document.createElement("div");
    winOrLoseDiv.className = winOrLoseDivClassName;
    winOrLoseDiv.innerHTML = winOrLoseDivinnerhtml;

    let replayButton = document.createElement("div");
    replayButton.className = "replay";
    replayButton.innerHTML = "REPLAY";

    replayButton.style.cssText = "background-color: #009688; cursor: pointer;";
    
    winOrLoseDiv.appendChild(replayButton);

    finishDiv.appendChild(winOrLoseDiv);
    title.insertAdjacentElement("afterend", finishDiv);

    replayButton.addEventListener("click", replay);

    function replay() {
        toggle.style.cssText = "display: flex";
        finishDiv.remove();
        input.style.cssText = "display: block";
        input.value = "";
        scoreGot.innerHTML = "0"
        timeLeftSpan.innerHTML = defaultLevelSeconds;
        
        theWord.innerHTML = "";
        input.insertAdjacentElement("afterend", startButton);

        EasyLevel = [
            "liberal",
            "recording",
            "memorandum",
            "professional",
            "observation",
            "disgrace",
            "constitution",
            "champion",
            "advertising",
            "assault",
            "theater",
            "fitness",
            "eyebrow",
            "distribute",
            "atmosphere",
            "battlefield",
            "delicate",
            "foundation",
            "activity",
            "mountain",
            "overall",
            "arrange",
            "contrary",
            "descent",
            "difficulty",
            "wisecrack",
            "ostracize",
            "product",
            "skeleton",
            "discuss",
            "password",
            "trustee",
            "traffic",
            "company",
            "rainbow",
            "strength",
            "appearance",
            "censorship",
            "ecstasy",
            "consideration",
            "comment",
            "comprehensive",
            "contribution",
            "diameter",
            "disagree",
            "criminal",
            "established",
            "traction",
            "speaker",
            "confusion",
            ];

            MedimumLevel = [
                "I don’t respect anybody who can’t tell the difference between Pepsi and Coke.",
                "He poured rocks in the dungeon of his mind.",
                "She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
                "The llama couldn't resist trying the lemonade.",
                "Let me help you with your baggage.",
                "She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.",
                "He watched the dancing piglets with panda bear tummies in the swimming pool.",
                "A glittering gem is not enough.",
                "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.",
                "The estate agent quickly marked out his territory on the dance floor.",
                "The doll spun around in circles in hopes of coming alive.",
                "She wondered what his eyes were saying beneath his mirrored sunglasses.",
                "She found it strange that people use their cellphones to actually talk to one another.",
                "The urgent care center was flooded with patients after the news of a new deadly virus was made public.",
                "Everyone was curious about the large white blimp that appeared overnight.",
                "The view from the lighthouse excited even the most seasoned traveler.",
                "The lake is a long way from here.",
                "Writing a list of random sentences is harder than I initially thought it would be.",
                "He decided to live his life by the big beats manifesto.",
                "She had some amazing news to share but nobody to share it with.",
                "The bug was having an excellent day until he hit the windshield.",
                "He had unknowingly taken up sleepwalking as a nighttime hobby.",
                "Her fragrance of choice was fresh garlic.",
                "There were a lot of paintings of monkeys waving bamboo sticks in the gallery.",
                "She saw the brake lights, but not in time.",
                "The white water rafting trip was suddenly halted by the unexpected brick wall.",
                "The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.",
                "Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk.",
                "He found rain fascinating yet unpleasant.",
                "At that moment she realized she had a sixth sense.",
                "The efficiency with which he paired the socks in the drawer was quite admirable.",
                "It isn't difficult to do a handstand if you just stand on your hands.",
                "Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.",
                "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
                "With the high wind warning",
                "She tilted her head back and let whip cream stream into her mouth while taking a bath.",
                "They throw cabbage that turns your brain into emotional baggage.",
                "The beauty of the African sunset disguised the danger lurking nearby.",
                "Boulders lined the side of the road foretelling what could come next.",
                "He wasn't bitter that she had moved on but from the radish.",
                "The beach was crowded with snow leopards.",
                "Joe discovered that traffic cones make excellent megaphones.",
                "At last I hear that Nancy is very pretty.",
                "Normal activities took extraordinary amounts of concentration at the high altitude.",
                "I like to leave work after my eight-hour tea-break.",
                "The three-year-old girl ran down the beach as the kite flew behind her.",
                "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.",
                "She had the gift of being able to paint songs.",
                "Abstraction is often one floor above you.",
                "The best key lime pie is still up for debate.",
            ];
                
        HardLevel = [
                "gastrophilanthropist",
                
                "archididascalian",
                
                "bathythermograph",
                
                "electrodynamometer",
                
                "palaeoclimatology",
                
                "zenzizenzizenzic",
                
                "self-determinism",
                
                "penecontemporaneous",
                
                "ornithobiography",
                
                "interramification",
                
                "podobromhydrosis",
                
                "maschalephidrosis",
                
                "antilapsarianism",
                
                "spectroheliokinematograph",
                
                "lautenclavicymbel",
                
                "pneumatophilosophy",
                
                "microclimatology",
                
                "rhinotillexomania",
                
                "symptomatography",
                
                "polyphiloprogenitive",
                
                "quadragintesimal",
                
                "latitudinarianism",
                
                "pseudohermaphroditism",
                
                "lumpenintelligentsia",
                
                "eellogofusciouhipoppokunurious",
                
                "microcalorimeter",
                
                "micropalaeontology",
                
                "anopisthographic",
                
                "ichthyoacanthotoxism",
                
                "palaeotypography",
                
                "chryselephantine",
                
                "triskaidekaphobia",
                
                "hydrometeorology",
                
                "transmigrationism",
                
                "hysteron proteron",
                
                "transcendentalism",
                
                "floccinaucinihilipilification",
                
                "preterpluparenthetical",
                
                "telespectroscope",
                
                "ethnomethodology",
                
                "observationalism",
                
                "predestinarianism",
                
                "chrysoaristocracy",
                
                "brachycatalectic",
                
                "spectroheliograph",
                
                "astrometeorology",
                
                "pantochronometer",
                
                "chronosynchronicity",
                
                "chromoxylography",
                
                "precipitinogenic",
            ];
        

    }
};