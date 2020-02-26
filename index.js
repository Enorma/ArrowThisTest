const midObj = {
    "name" : "Tania",

    "meth7" : function() {
        console.log("name: "+this.name); //SIEMPRE es Tania
    },

    "meth8" : () => {
        console.log("name: "+this.name); //SIEMPRE es undefined
    }
}

class BigObj {

    constructor() {

        this.name = "Luis",

        this.smallObj = {

            "name" : "Pedro",

            "meth1" : function() {
                console.log("name: "+this.name); //SIEMPRE es Pedro
            },

            "meth2" : () => {
                console.log("name: "+this.name); //SIEMPRE es Luis
            }
        },

        this.midObj = midObj,

        this.meth3 = function() {
            console.log("name: "+this.name); //SIEMPRE es Luis
        },

        this.meth4 = () => {
            console.log("name: "+this.name); //SIEMPRE es Luis
        }
    }
}

const b = new BigObj();

const superObj = {

    "name" : "María",

    "meth5" : function() {
        console.log("name: "+this.name); //SIEMPRE es María
    },

    "meth6" : () => {
        console.log("name: "+this.name); //SIEMPRE es undefined
    },

    "bigObj" : b,

    "midObj" : midObj
    
}

console.log("\nliteral function");
midObj.meth7();
console.log("\nliteral arrow");
midObj.meth8();

console.log("\nliteral function");
superObj.meth5();
console.log("\nliteral arrow");
superObj.meth6();

console.log("\nclass prop function");
b.midObj.meth7();
console.log("\nclass prop arrow");
b.midObj.meth8();

console.log("\nclass prop function");
b.smallObj.meth1();
console.log("\nclass prop arrow");
b.smallObj.meth2();

console.log("\nliteral prop function");
superObj.midObj.meth7();
console.log("\nliteral prop arrow");
superObj.midObj.meth8();

console.log("\nliteral > class prop function");
superObj.bigObj.midObj.meth7();
console.log("\nliteral > class prop arrow");
superObj.bigObj.midObj.meth8();

console.log("\nliteral > class prop function");
superObj.bigObj.smallObj.meth1();
console.log("\nliteral > class prop arrow");
superObj.bigObj.smallObj.meth2();

console.log("\nclass function");
b.meth3();
console.log("\nclass arrow");
b.meth4();

console.log("\nliteral > class function");
superObj.bigObj.meth3()
console.log("\nliteral > class arrow");
superObj.bigObj.meth4()
