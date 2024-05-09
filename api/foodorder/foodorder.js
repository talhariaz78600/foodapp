const express = require('express');
const router = express.Router();
const FoodOrder = require('../../models/foodOrder')

///////////////////// /api/order/foodorder/////////////////////
router.post('/foodorder', async (req, res) => {
    const {userId,productId,price} = req.body;
    try {
        const item = new FoodOrder({
            userId: userId,
            productId: productId,
            price: price,
        })
        await item.save();
        res.status(200).json({message:"payment successfully",item})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})
///////////////////// /api/order/getallorder /////////////////////
router.get('/getallorder',async (req,res)=>{
    try {
        const data= await FoodOrder.find();
        if(!data){
            res.status(404).json({message:"order not found"});
        }

        res.status(200).json({data});
    } catch (error) {
        res.json({message:"Internal server error"})
    }
})
///////////////////// /api/order/getorder/:id /////////////////////
router.get('/getorder/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const singledata= await FoodOrder.findById(id);
        if(!singledata){
            res.status(404).json({message:"order not found"})
        }
        res.status(200).json({singledata})
    } catch (error) {
        res.status(500).json({message:"Internal sever error"});
    }
})
///////////////////// /api/order/updateitem/:id /////////////////////
router.put('/updatestatus/:id',async (req,res)=>{
    const { status } = req.body;
    const { id }=req.params;
    try {
        let item= await FoodOrder.findById(id);
        if(!item){
            res.status(404).json({message:"item not found"})
        }
        if(status){
            item.title=title;
        }
      
        await item.save();

        res.status(200).json({message:"Status update successfully",item});
    } catch (error) {
        res.status(500).json({message:"Internal server error",error});
    }
})
///////////////////// /api/order/deleteOrder/:id /////////////////////
router.delete('/deleteOrder/:id',async(res,req)=>{
    try {
        const {id}=req.params;
        let item= await FoodOrder.findById(id);
        if(!item){
            res.status(404).json({message:"item not found"})
        }
        item= await Food.findByIdAndDelete(id);
        res.status(200).json({message:"item deleted successfully",item})
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
})
  
module.exports = router;