let guess = 0
let value = randint(0, 20)
game.splash("I'm thinking of a number between 1 and 20")
info.setLife(6)
while (guess != value) {
    info.changeLifeBy(-1)
    guess = parseFloat(game.askForString("What's your guess?"))
    if (guess > value) {
        game.splash("Guess lower!", "Guesses left: " + info.life())
    }
    if (guess < value) {
        game.splash("Guess higher!", "Guesses left: " + info.life())
    }
}
game.splash("Correct!")
game.over(true)
