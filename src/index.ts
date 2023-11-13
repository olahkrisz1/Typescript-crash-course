// basic types
let id: number = 5

let company: string = "traversy media"
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'brad', true]

// Tuple array
let employee: [number, string] []

employee = [
    [1, 'Brad'],
    [2, 'Tom'],
    [3, 'Tony'],
]

// Union

let pid: string | number
pid = '22'

//Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up='Up',
    Down= 'Down',
    Left= 'Left',
    Right='Right'
}

// console.log(Direction2.Left)

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x:number, y:number):number {
    return x+y
}
// console.log(addNum(1,4))

function log(message: string | number): void{
    console.log(message)
}

// Interfaces
interface userInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: userInterface = {
    id: 1,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x+y
const sub: MathFunc = (x:number, y:number): number => x-y

// classes

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad traversy')
const Mike = new Person(2, 'Mike Jordan')

// console.log(brad.register())

// console.log(brad, Mike)
// Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee( 3, 'Shaun', 'Developer')

// Generics

function getArray<T>(items: T[]): T[] {
   return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

numArray.push(1)
