// Building the Database
db.inventory.insertMany( [
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
 ] );

// sort
db.inventory.find().sort({qty: 1}) // ascending order of qty
db.inventory.find().sort({qty: -1}) // descending order of qty

// skip
db.inventory.find().skip(1) // skips first document
db.inventory.find().skip(2) // skips first 2 documents