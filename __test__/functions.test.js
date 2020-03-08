const functions = require('../functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);

    //a negativa seria
    //expect(functions.add(2,2)).not.toBe(4);
})




/** CHECK FOR TRUTHY & FALSY VALUES
 *
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of toBeUndefined
 * toBetruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treat as false
 */

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

/* testa se o valor recebido é falso. null é um valor falso */
test('Null Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

/* testa se o valor recebido é falso. Zero é um valor falso */
test('Zero Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

/* testa se o valor recebido é falso. Undefined é um valor falso */
test('Undefined Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

/* Testa se o valor recebido é verdadeiro, utilizando o not.
Dois é um valor verdadeiro
*/
test('Two Should be truthy with not in toBeFalsy', () => {
    expect(functions.checkValue(2)).not.toBeFalsy()
});

/* a função toBe deve ser usada para tipos primitivos apenas.
Se quiser comparar um array ou um objeto use toEqual
 */
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than and greater than
/**
 * toBeLess
 * toBeLessThanOrEqual
 * 
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 */

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})


// Regex without CaseSensitive
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/)
    //expect('teamI').not.toMatch(/I/) //Fail 
});

// Regex with CaseSensitive
test('There is no I in team 2', () => {
    expect('team').not.toMatch(/I/i)
    //expect('teami').not.toMatch(/I/i) //Fail
});


// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data

//https://jestjs.io/docs/en/expect#expectassertionsnumber
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1) // garante que a promise será chamada 
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

// Async await

test('User fetched name should be Leanne Graham using await', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
})

//30:26