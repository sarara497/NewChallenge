const express = require("express");
const router = express.Router();

let items= {
    1:[{item:'Lays' , price:1.20},{item:'Lays' , price:1.20},{item:'Lays' , price:1.20},{item:'Lays' , price:1.20},{item:'Lays' , price:1.20}],
    2:[{item:'Chips' , price:2},{item:'Chips' , price:2},{item:'Chips' , price:2},{item:'Chips' , price:2},{item:'Chips' , price:2}],
    3:[{item:'Biscuit' , price:5},{item:'Biscuit' , price:5},{item:'Biscuit' , price:5},{item:'Biscuit' , price:5},{item:'Biscuit' , price:5}],
    4:[{item:'Tuc' , price:4},{item:'Tuc' , price:4},{item:'Tuc' , price:4},{item:'Tuc' , price:4},{item:'Tuc' , price:4}],
    5:[{item:'Chocolate' , price:10},{item:'Chocolate' , price:10},{item:'Chocolate' , price:10},{item:'Chocolate' , price:10},{item:'Chocolate' , price:10},]
}

let acsspectedMoney=
{
  1:'10c',
  2:'20c',
  3:'50c',
  4:'1$',
  5:'20$',
  6:'50$'
}

router.post('/screenItem', async (req, res) => {
    console.log("iam here in screenItem")
      console.log(req.body)
    let num = req.body.numbers
    let insertednum=num.split('')
    console.log('num= ' , num , 'insertednum = ' , insertednum)
    let forcheck=[]
    for(var i=0 ; i<insertednum.length ; i++){
      forcheck[i]=parseInt(insertednum[i])
      }
    console.log(forcheck)

    for(var key in items){
        if(forcheck[0]==key){
          // console.log('here', key , items[key])
          for(var i=0;i<items[key].length ; i++){
            const item=i+1
            if(item==forcheck[1]){
                const itemdetail=items[key][item]
                res.status(200).json(itemdetail)
                 console.log('here2', item ,items[key],items[key][item])
            }
            else{console.log('there is')}
          }
          
      }
       else{console.log('there is noo=o')}
    }
    // res.status(404).json({ success: false })

  });

  router.post('/checkandmonytotal', async (req, res) => {
    console.log("iam here in monytotal")
    const val =Object.keys(req.body)[0]
    var total=0
    console.log('val=',val , 'body=', req.body)
    if(val.includes('c') || val.includes('$')){
        if(val.includes('$')){
            const n=parseFloat(val)
            for (var key in acsspectedMoney){
                if(val===acsspectedMoney[key]){
                    total=(total+parseInt(val))*100
                    console.log('total=',total)
                    res.status(200).json(total)
                }
            }
        }else{
            console.log('true')
            const n=parseFloat(val)
                for (var key in acsspectedMoney){
                    if(val===acsspectedMoney[key]){
                        total+=parseInt(val)
                        console.log('total=',total)
                        res.status(200).json(total)
                    }
                }
        }
       
        

    }
    // res.status(200).json(itemdetail)

  });


  router.post('/buyingsnack', async (req, res) => {
    console.log("iam here in SubmitSnack")
    console.log(req.body)
    let num = req.body.totalMoney
    let item =req.body.screeing
    let check=0
    if(num == item.price){
        console.log("==" ,num , item.price)
        check=1
        res.status(200).json(check)
    }else if(num > item.price){
        console.log(">" , num > item.price)
        res.status(200).json(num-item.price)
    }else{
        console.log("<" , num , item.price)
        res.status(200).json(check)}
  });

module.exports = router;