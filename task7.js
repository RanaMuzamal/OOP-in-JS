class Game
{
    info()
    {
        return "I love game and sports.";
    }
}
class Cricket extends Game
{
    info()
    {
        return "I love cricket.";
    }
}
class Football extends Game
{
    info()
    {
        return "I love Football";
    }
}
const g1 = new Game();
const c1 = new Cricket();
const f1 = new Football();
console.log(g1.info());
console.log(c1.info());
console.log(f1.info());