import Deck from '../../src/game/deck';

test('Deck has the right cards', () => {
    let deck = new Deck();
    expect(deck.size()).toBe(108);

    let cards = deck.cards;
    let numberCards = cards.filter((card, _index, _array) => {
        return card.value != null;
    });
    expect(numberCards.length).toBe(76);
    let actionCards = cards.filter((card, _index, _array) => {
        return card.action != null && !card.isWild;
    });
    expect(actionCards.length).toBe(24);
    let wildCards = cards.filter((card, _index, _array) => {
        return card.isWild;
    });
    expect(wildCards.length).toBe(8);
});
