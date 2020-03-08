//https://jestjs.io/docs/en/expect#tothrowerror

const drinkFlavor = require('../example');

test('throws on octopus', () => {

    function drinkOctopus() {
        return drinkFlavor('octopus');
    }

    //expect(drinkOctopus).toThrowError(/yuck/);
    expect(drinkOctopus).toThrowError('yuck'); //verifica se existe yuck no error

})

test('Should contains nice',()=>{
    
    const niceDrink = drinkFlavor('orange juice')
    expect(niceDrink).toMatch('nice');
})