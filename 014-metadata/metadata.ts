import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    console.log(Reflect.getMetadata('secret', target.prototype, key));
  }
}
