db.inventory.deleteMany({})

db.inventory.deleteOne( { status: "D" } )

db.inventory.deleteMany({ status : "A" })

//limit
db.inventory.find().limit(1)

//skip
db.inventory.find().skip(1)

//sort
db.inventory.find().sort({qty: 1}) //ascending
db.inventory.find().sort({qty: -1}) //descending