class Car
{
    setName()
    {
        this.name = "";
    }
    setMake()
    {
        this.make = "";
    }
    setColor()
    {
        this.color = "";
    }
    setSpeed()
    {
        this.speed = "";
    }
    print()
    {
        
    }
}
Car.prototype.setName = function(name)
{
    this.name = name;
    return this;
}
Car.prototype.setMake = function(model)
{
    this.model = model;
    return this;
}
Car.prototype.setColor = function(color)
{
    this.color = color;
    return this;
}
Car.prototype.setSpeed = function(speed)
{
    this.speed = speed;
    return this;
}
Car.prototype.print = function()
{
    console.log(`Car name is ${this.name}. Car make is ${this.model}. Car color is ${this.color}. Car speed is ${this.speed}`);
}
const car1 = new Car();
car1.setName("Range Rover").setMake("Land Rover").setColor("Black").setSpeed("200 km").print();