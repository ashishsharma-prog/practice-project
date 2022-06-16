import moment from 'moment'
class OrderModel{
    constructor(id,items,totalAmount,totalQuantity,date){
        this.id = id;
        this.items=items;
        this.totalAmount=totalAmount;
        this.totalQuantity=totalQuantity;
        this.date=date
        }
        get readableDate(){
      
            return moment(this.date).format(" MMMM Do YYYY, h:mm:ss a")
        }
}
export default OrderModel