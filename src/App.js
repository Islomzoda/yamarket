import React from 'react'
import Recomedatioan from './components/Ymarket/Recomedatioan'


export default function App() {
  
  const products = [

    {imgUrl:"https://avatars.mds.yandex.net/get-mpic/1926093/img_id8929824454640850899.jpeg/6hq", price:2019 , discountImg:"https://lh3.googleusercontent.com/iZJpvnrTpUFGWtpVCu-swsJljvbAtw4RAadXmzfOYovAnYP8tB2bpjM2PtSHRZjyym4GLA=s42", discount:2770, money:"₽", productName:"Ирригатор B.Well WI-911", productLink: "https://market.yandex.ru/product--irrigator-b-well-wi-911/12764174?show-uid=15799414692543240898216001&nid=54921&glfilter=12742712%3A13983625&glfilter=7893318%3A7309090&context=search"},
    {imgUrl:"https://avatars.mds.yandex.net/get-mpic/1545401/img_id8012300520411194688.png/6hq", price:350 ,   productName:"Расческа для бороды", productLink: "https://market.yandex.ru/product--rascheska-dlia-borody-borodist-klenovaia/560195061?show-uid=15800150428986772635016001&nid=16736310&context=search"},
    {imgUrl:"https://avatars.mds.yandex.net/get-mpic/2017233/img_id2876123970420993573.jpeg/6hq", price:2689 ,  productName:"Ирригатор B.Well WI-911", productLink: "market.yandex.ru/product--irrigator-b-well-wi-911-s-uvelichennoi-emkostiu-dlia-vody/449583000?show-uid=15800151542716554041316002&nid=54921&glfilter=12742712%3A13983625&glfilter=7893318%3A7309090&context=search"},
    {imgUrl:"https://avatars.mds.yandex.net/get-mpic/1525355/img_id2857087755165942916.jpeg/6hq", price:5700 , discount:7690,discountImg:"https://lh3.googleusercontent.com/iZJpvnrTpUFGWtpVCu-swsJljvbAtw4RAadXmzfOYovAnYP8tB2bpjM2PtSHRZjyym4GLA=s42", money:"₽", productName:"Конструктор LEGO Hidden Side...", productLink: "https://market.yandex.ru/product--konstruktor-lego-hidden-side-70425-shkola-s-privideniiami-niuberi/520730011?show-uid=15800152660900641815116001&nid=59749&glfilter=7893318%3A3732937&glfilter=12782797%3A17401035&context=search"},

  ]
  return (
    <div>

  <div className = "conteyner"><h1>Приглядитесь к этим предложениям</h1></div>
    <div className="flex">
      <Recomedatioan  imgUrl = { products[0].imgUrl } price = {products[0].price} discountImg = {products[0].discountImg} discount = {products[0].discount} money = {products[0].money} productName ={products[0].productName} productLink = {products[0].productLink} />
      <Recomedatioan  imgUrl = { products[1].imgUrl } price = {products[1].price} productName ={products[1].productName} productLink = {products[1].productLink} />
      <Recomedatioan  imgUrl = { products[2].imgUrl } price = {products[2].price} productName ={products[2].productName} productLink = {products[2].productLink} />
      <Recomedatioan  imgUrl = { products[3].imgUrl } price = {products[3].price} discount = {products[3].discount} money = {products[3].money} productName ={products[3].productName} productLink = {products[3].productLink} discountImg = {products[3].discountImg} />
    </div>
  </div>
    
  )
}
