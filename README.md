# simon

Thanks for checking this out.

This is the Simon Game, written with love in Javascript, HTML and CSS.

Rules: I play a pattern, and you repeat. Simple right?
[Live Game](https://misterhaywood.github.io/simon)


# Technologies
I was able to code this game in HTML, JS and CSS. After researching how Simon works, I set out split up the game as follows:

Rounds: The computer and player both take turns until 10 rounds of gameplay has happened, or the player does not successfully memorize the round.

The most time consuming part of writing this was lighting up the pads on the Computers' turn. After learning how to use Javascript's setTimeout function, flashing the colors was made much easier.

functions:
resetGame

animatePad

turnBanner 
- whose turn is it?
- what round is it?

nextMove - give me the next move

handleClick - what happens when the player clicks a pad?