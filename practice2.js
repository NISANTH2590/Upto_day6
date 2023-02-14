// // let arr = ["nisanth","nishanth","nishanth1"];
// // let obj = {name:"nisanth",name1:"nishanth",name2:"nishanth1"};
// // let res = Object.entries(obj);
// // for(let i of res)
// // console.log(i);

// let a = 10;
// // exports = {a};
// let str = "a=20";
// // eval(str);
// // console.log(a);
// module.exports = {a,st};

let obj ={
    firstname:"Nishanth",
    lastname:"Periyasamy",
    age : 20
};

// obj.age = 26;
// console.log(obj.age);

let proxy = new Proxy(obj,{
    get: function(target,prop,receiver){
    console.log(prop+" is being accessed");
    return target[prop];
    },
    set:function(target,prop,value){
        if(prop=='age' && value>20)
        {
            console.log(prop+" is being updated");
            return target[prop] = value;
        }
        else{
            console.log("Age cannot be updated ");
        }

    }
    })

// console.log(proxy.firstname);
proxy.age = 11;
console.log(proxy.age);