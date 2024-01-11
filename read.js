db.inventory.find({qty:90})

db.inventory.find({tags:{$in:["red", "D"]}})