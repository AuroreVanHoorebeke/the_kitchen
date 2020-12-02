// find message ONLY containing english or spanish laughing expressions.
// at least jaja & at least haha ou lmao(or more o's)

// jajajaja -> OK
// lmaooooooooo -> OK
// ja -> NOT ok
// lma -> NOT ok
// I said haha -> NOT ok

let pattern = /^((ja){2,}|(ha){2,}|(lma(o+)))$/ig
