const express = require("express");
const router = require("express").Router();

const Posts = require("./post-model.js");

const { authenticate } = require("../auth/restricted-middleware.js");
// will need to use this ^
router.use(express.json());

// will be at /api/item

// router.get("/goals/:id", async (/*requireToken*/ req, res) => {
//   try {
//     const goals = await Posts.find(req.query);
//     res.status(200).json(goals);
//   } catch (error) {
//     res.status(500).json({ message: `error retreiving the goals` });
//   }
// });

router.post("/item", (req, res) => {
  const itemInfo = req.body;
  const { user_id, goal, complete, journalEntry, photoUrl } = req.body;

  Posts.insert(itemInfo)
    .then(goal => {
      if (!user_id) {
        res.status(400).json({ message: "need id, etc " });
      } else {
        res.status(201).json({ message: `item good`, itemInfo });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/item/:id", (req, res) => {
  Posts.getItemById(req.params.id)
    .then(res => {
      if (res) {
        res.status(200).json({ item: res });
      } else {
        res.status(404).json({ message: "Item not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "error1", error });
    });
});

// deleting item at id
// not hooked up yet // errno1

router.delete("/item/:id", async (req, res) => {
  try {
    const item = await Posts.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: `deleted id ${req.params.id}` });
    } else {
      res.status(404).json({ message: "could not find at that id" });
    }
  } catch (error) {
    res.status(500).json({ message: "error removing the item" });
  }
});

// updating an item at the id // works

router.put("/item/:id", async (req, res) => {
  try {
    const item = await Posts.update(req.params.id, req.body);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "the item could not be found" });
    }
  } catch (error) {
    res.status(500).json({ message: "error updating the item" });
  }
});

/// posting an item

router.post("item/:id", (req, res) => {});

// router.post("/item", (req, res) => {
//   Posts.createItem(req.body)
//     .then(res => {
//       res.status(200).json({ id: res });
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// get all the items
router.get("/item", (req, res) => {
  Posts.find()
    .then(items => {
      res.status(200).json({ items });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
