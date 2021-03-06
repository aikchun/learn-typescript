class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('Orange');

console.log(vehicle.color);

const car = new Car(4, 'black');

console.log(car.color);

car.startDrivingProcess();
