const express = require("express");
const router = express.Router();
// list Model
const list = require("../../models/list");
//---------------- pour afficher les données-------------------
router.get("/", (req, res) => {
  list
    .find()
    // .sort({ date: -1 }) pour trier par ordre de date
    .then(lists => res.json(lists));
});
// ---------------ajouter les données-----------------------
router.post("/", (req, res) => {
  const newList = new list({
    name: req.body.name,
    telephone: req.body.telephone,
    email: req.body.email
  });
  newList.save().then(list => res.json(list));
});
// -------------------supprimer les données---------------------

router.delete("/:id", (req, res) => {
    list
        .findById(req.params.id)
        .then(lists => lists.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// -------------------modifier les données---------------------
router.put("/:id",(req, res)=> {

  const modifiedContact ={$set:{ name: req.body.name, telephone: req.body.telephone, email: req.body.email }}
  list.updateOne({_id:req.params.id}, modifiedContact).then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
  });
module.exports = router;
