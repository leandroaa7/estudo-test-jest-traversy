//https://jestjs.io/docs/en/expect#tothrowerror

module.exports = function drinkFlavor(flavor) {
    if (flavor == "octopus") {
        throw new Error('yuck, octopus flavor');
    }
    else {
        return "nice flavor";
    }
}