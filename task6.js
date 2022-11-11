class Employee
{
    setInfo(salary, hoursPerDay)
    {
        this.salary = salary;
        this.hoursPerDay = hoursPerDay;
    }
    addSal()
    {
        this.salary = this.salary + 10;   
    }
    addWork()
    {
        
        this.salary = this.salary + 5;
    }
    getInfo()
    {
        if(this.salary < 500)
        {
            this.addSal();
        }
        if(this.hoursPerDay > 6)
        {
            this.addWork();
        }   
        console.log(`Salary = ${this.salary} and Number of hours per day for Employee = ${this.hoursPerDay}`);
    }
}
const emp1 = new Employee();
emp1.setInfo(400, 8);
emp1.getInfo();