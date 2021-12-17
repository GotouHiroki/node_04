const item = require('../models/item')

exports.index = (req,res) =>{
    data.items = item.values
    res.render('item/index.ejs',data)
}


router.show('/item/:id',(req,res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    res.render('item/show.ejs',data)
})