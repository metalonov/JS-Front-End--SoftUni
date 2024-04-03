function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputTextElement = document.querySelector('#inputs textarea').value;
      const outputBestRestaurantElement = document.querySelector('#bestRestaurant p');
      const outputWorkersElement = document.querySelector('#workers p');

      const json = JSON.parse(inputTextElement);
      let restaurants = [];


      json.forEach(restaurant => {
         const [restaurantName, employeeData] = restaurant.split(" - ");
         const employees = employeeData
            .split(", ")
            .map(employee => {
               const [name, salary] = employee.split(" ");
               return { name, salary: parseInt(salary) };
            });

         const existingRestaurantIndex = restaurants.findIndex(restaurant => restaurant.name === restaurantName);
         if (!existingRestaurantIndex) {
            restaurants[existingRestaurantIndex].employees.push(...employees);
         } else {
            restaurants.push({ name: restaurantName, employees });
         }

      });

      //another loop because there might be new employees which might trip things up
      for (const restaurant of restaurants) {
         const avgSalary = 'avgSalary';
         restaurant[avgSalary] = Number(calculateAverageSalary(restaurant));
         const hightestSalary = 'hightestSalary';
         restaurant[hightestSalary] = Number(Math.max.apply(Math, restaurant.employees.map(employee => employee.salary)));
      }

      const sortedRestaurants = restaurants.sort((a, b) => b.avgSalary - a.avgSalary);
      const bestRestaurant = sortedRestaurants[0];

      outputBestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.hightestSalary.toFixed(2)}`


      const workersOutput = bestRestaurant.employees
         .reduce((result, employee) => {
            result.push(`Name: ${employee.name} With Salary: ${employee.salary}`);
            return result;
         }, []);

      outputWorkersElement.textContent = workersOutput.join(' ');
   }

   function calculateAverageSalary(restaurant) {
      let totalSalary = 0;
      let totalEmployees = 0;


      restaurant.employees.forEach(employee => {
         totalSalary += employee.salary;
         totalEmployees++;
      });

      return (totalSalary / totalEmployees).toFixed(2);
   }
}


// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]

// ["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]