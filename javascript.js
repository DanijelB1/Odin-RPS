function computerPlay() {
    const rockPaperScissorsPick = ['Rock', 'Paper', 'Scissors'];
    const valueToUse = rockPaperScissorsPick[Math.floor(Math.random() * rockPaperScissorsPick.length)]
    console.log(valueToUse)
}

computerPlay()