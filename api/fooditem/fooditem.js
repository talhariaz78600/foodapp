const express = require('express');
const router = express.Router();
const Food = require('../../models/foodItem')

////////////////////////////////////add food item //////////////////////////////////
router.post('/addfooditem', async (req, res) => {
    const { title, Ingredients, Description, itemImageUrl, itemPrice } = req.body;
    try {
        const item = new Food({
            title: title,
            Ingredients: Ingredients,
            Description: Description,
            itemImageUrl: itemImageUrl,
            itemPrice: itemPrice,
        })
        await item.save();
        res.status(200).json({message:"Item add successfully",item})
    } catch (error) {
        res.status(500).json({message:"Internel server error"})
    }
})

router.get('/getallitems',async (req,res)=>{
    try {
        const data= await Food.find();
        if(!data){
            res.status(400).json({message:"items not found"});
        }

        res.status(200).json({data});
    } catch (error) {
        res.json({message:"Internel server error"})
    }
})




module.exports = router;