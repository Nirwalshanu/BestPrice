var mongoose=require("mongoose");
var orderDetailsSchema=new mongoose.Schema({
	items:[],
	address:{
		fullName : String,
		number : String,
		email : String,
		address : String,
		city : String,
		district : String,
		zipCode : String
	},
	orderId:String,
	totalPrice:String,
    payType:String,
    userId:String,
    status:String,
    orderDate: {type: Date, default: Date.now}
	
});

module.exports=mongoose.model("OrderDetails",orderDetailsSchema);