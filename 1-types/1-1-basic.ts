{
    // number
    const num:number = -6;

    // string
    const str:string = "asdf";

    // boolean
    const bool:boolean = true;

    // undefined
    let name: undefined;
    let age: number | undefined;
    age = undefined;
    age = 16;

    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null;
    let person2: string | null;

    // unknown
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);
        while(true) {}
    }

    // object
    let obj: object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'})
    acceptSomeObject([1,2,3]);

}
