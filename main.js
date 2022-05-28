let str = 'ulrdr';
let [x,y] = [0,0];

for(let i=0;i<str.length;i++){
    if(str[i] == 'u'){
        x+=1
    }else if(str[i]=='d'){
        x-=1
    }else if(str[i]=='r'){
        y+=1
    }else if(str[i]=='l'){
        y-=1
    }
}
console.log(x,y);