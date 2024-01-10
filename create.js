db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)

db.inventory.insertMany(
    [{ item: "canvas1", qty: 50, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 90, tags: ["copper"], size: { h: 2, w: 5.5, uom: "cm" } },
    { item: "canvas3", qty: 20, tags: ["zinc"], size: { h: 28, w: 35, uom: "cm" } },
    { item: "canvas4", qty: 80, tags: ["aluminium"], size: { h: 8, w: 35.5, uom: "cm" } }]
)