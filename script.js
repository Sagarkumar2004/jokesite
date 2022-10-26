console.log("javascript is runing")

let myjokes = [
    {
        "category": "Programming",
        "type": "single",
        "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 30,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 274,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 180,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 304,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 23,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 35,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 191,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 132,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 138,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 307,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 72,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Yo mama is so old, she knew Burger King while he was still a prince.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 306,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 304,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My husband and I were happy for 20 years. And then we met.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 273,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": true
        },
        "id": 149,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Never date a baker. They're too kneady.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 271,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My wife and I have reached the difficult decision that we do not want children.\nIf anybody does, please just send me your contact details and we can drop them off tomorrow.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 257,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 139,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "racist": false,
            "sexist": false,
            "political": false,
            "explicit": false
        },
        "id": 195,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 307,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 72,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Yo mama is so old, she knew Burger King while he was still a prince.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 306,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 304,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My husband and I were happy for 20 years. And then we met.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 273,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": true
        },
        "id": 149,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Never date a baker. They're too kneady.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 271,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My wife and I have reached the difficult decision that we do not want children.\nIf anybody does, please just send me your contact details and we can drop them off tomorrow.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 257,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 139,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "racist": false,
            "sexist": false,
            "political": false,
            "explicit": false
        },
        "id": 195,
        "safe": true,
        "lang": "en"
    }

]

let index = Math.floor(Math.random() * (myjokes.length - 1))
console.log(index)
joke.innerHTML = myjokes[index].joke

// document.getElementById(btn).addEventListener("click", ()=>{
//     window.location.reload();
// })




