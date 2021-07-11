let people=[
    {
        name:'jay',
        like:'apple',
        gender:'m',
        age:18
    },
    {
        name:'sarah',
        like:'banana',
        gender:'f',
        age:24
    },
    {
        name:'tom',
        like:'orange',
        gender:'m',
        age:1
    },
    {
        name:'jacy',
        like:'orange',
        gender:'f',
        age:3
    }
];
people.forEach((item,index)=>{
    console.log(`${item.name} likes ${item.like}`)
})//forEach的用法

let ageThanFive=people.filter((item,index)=>{
    return item.age>=5
})//filter的用法筛选出符合条件的对象
console.log(ageThanFive)

let findAgeThanFive=people.find((item,index)=>{
    return  item.age>=5
})
console.log(findAgeThanFive)

let isUserLike=people.map((item, index)=>{
    if(item.like==='orange'){
        return (`${item.name} likes orange`)
    }else{
        return (`${item.name} doesn't like orange`)
    }
})
console.log(isUserLike)