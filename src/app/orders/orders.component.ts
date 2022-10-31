import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  menu=false;
  nameDiv=true;
  name=" "
  orders:any[]=[];
  constructor() { }

  ngOnInit(): void {
    
  }
   getName(item:any){
    this.name=item.value;
    this.nameDiv=false;
   }
  showMenu(){
    this.menu=!this.menu;
   }

  getValue(item:any){
    alert(item.id +" is added in cart ");
    // console.log(item.innerHTML);
    this.orders.push(
      {
        sno:this.orders.length,
        type:item.id,
        cost:item.innerHTML
      }
      
    )
    this.totalCost();
  }

  deleteOrder(sno:number){
    console.log(sno);
   this.orders=this.orders.filter((item)=>{
    return item.sno!==sno;
   })
   this.totalCost();
  }

   total:number=0;
    totalCost(){
    this.total=0;
    this.orders.forEach((order:any)=>{
      this.total+=Number(order.cost)
    })
    }
  
}
