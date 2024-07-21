const sentences = []

const words = ["adwaita", "cricket", "love", "sports", "vit", "friends", "computer", "gym"]
let n = 1000

for (var i = 0; i < n; i++) {
    let sentence = ""

    for (var j = 0; j < words.length; j++) {
        sentence += words[(Math.floor(Math.random() * words.length))];
        sentence += " "

    }
    sentences.push(sentence)

}
export default sentences