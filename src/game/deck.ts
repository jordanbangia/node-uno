import { Card, Action, SuitsInDeck, NumbersInSuit } from './card';

export default class Deck {
    cards: Card[];

    constructor() {
        this.cards = [];
        for (let s of SuitsInDeck()) {
            // add numbered cards
            for (let n of NumbersInSuit()) {
                this.cards.push(
                    new Card({
                        colour: s,
                        value: n,
                        action: null,
                        isWild: false,
                    })
                );
            }

            // add suited action cards
            for (let i = 0; i < 2; i++) {
                this.cards.push(
                    new Card({
                        colour: s,
                        value: null,
                        action: Action.PlusTwo,
                        isWild: false,
                    })
                );
                this.cards.push(
                    new Card({
                        colour: s,
                        value: null,
                        action: Action.Reverse,
                        isWild: false,
                    })
                );
                this.cards.push(
                    new Card({
                        colour: s,
                        value: null,
                        action: Action.Skip,
                        isWild: false,
                    })
                );
            }
        }

        // add wild cards
        for (let i = 0; i < 4; i++) {
            this.cards.push(
                new Card({
                    colour: null,
                    value: null,
                    action: null,
                    isWild: true,
                })
            );
            this.cards.push(
                new Card({
                    colour: null,
                    value: null,
                    action: Action.PlusFour,
                    isWild: true,
                })
            );
        }
    }

    size() {
        return this.cards.length;
    }
}
