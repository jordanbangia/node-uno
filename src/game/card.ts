enum Suit {
    Blue = 'BLUE',
    Red = 'RED',
    Yellow = 'YELLOW',
    Green = 'GREEN',
}

function SuitsInDeck() {
    return [Suit.Blue, Suit.Green, Suit.Red, Suit.Yellow];
}

enum Number {
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
}

function NumbersInSuit() {
    return [
        Number.Zero,
        Number.One,
        Number.One,
        Number.Two,
        Number.Two,
        Number.Three,
        Number.Three,
        Number.Four,
        Number.Four,
        Number.Five,
        Number.Five,
        Number.Six,
        Number.Six,
        Number.Seven,
        Number.Seven,
        Number.Eight,
        Number.Eight,
        Number.Nine,
        Number.Nine,
    ];
}

enum Action {
    PlusTwo = '+2',
    PlusFour = '+4',
    Skip = 'skip',
    Reverse = 'reverse',
}

class Card {
    colour: Suit;
    value: Number;
    action: Action;
    isWild: boolean;

    constructor({
        colour,
        value,
        action,
        isWild,
    }: {
        colour: Suit;
        value: Number;
        action: Action;
        isWild: boolean;
    }) {
        this.colour = colour;
        this.value = value;
        this.action = action;
        this.isWild = isWild;
    }
}

export { Card, Suit, Number, Action, SuitsInDeck, NumbersInSuit };
