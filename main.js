console.clear();

console.log ('1 задание')
const comparison=(a,b)=> {
  if (a>b){
    result = (a-b);
    console.log (a,'больше',b,'на',result)
    }
    else if (a<b){
      result = (b-a);
      console.log (a,'меньше',b,'на',result)
    }
    else if (a=b){
        console.log (a,'равно',b)}
  }
  comparison (7,9)
  comparison (9,3)
  comparison (8,8)

  console.log ('2 задание')
  const arr3=['Саша','Андрей','Олег','Юлия','Ксения','Артем']
  arr3.sort()
  console.log (arr3)

  console.log ('3 задание')
  const arr6=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  const arr7 = arr6.filter((i)=>{
    return i**2>20, i**2<100
  })
  console.log (arr7)

  console.log ('5 задание')
  for (let y=1; y<=25; y++){
    console.log('Я номер',y);
  }

  console.log('6 задание')
  const arr4=[10,20,30,40,50,60,70]
  arr4.reverse()
  console.log(arr4)

  console.log ('7 задание')
  const name =("Саша")
  console.log(name.split(''))

  console.log ('8 задание')
  const arr5=[1,2,3,4]
  const resultarr5 = arr5.reduce((sum,current)=>sum+current,0)
  console.log(resultarr5)

  console.log ('9 задание')
  let str='Hello'
  console.log(str.length)

  console.log ('10 задание')
  let s= "cucumber"
  for (let i=5;i>0;i--){
    console.log(s)
  }
