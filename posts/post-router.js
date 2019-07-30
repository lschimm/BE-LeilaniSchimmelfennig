const express = require("express");
const router = require("express").Router();

const Posts = require("./post-model.js");

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
        res.status(201).json(goal);
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });

  //   Posts.createItem(req.body)
  //     .then(res => {
  //       res.status(200).json({ id: res });
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: "error2", error });
  //     });
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

router.put("/item/:id", (req, res) => {
  Posts.updateItem(req.params.id, req.body)
    .then(res => {
      res.status(200).json({ id: res });
    })
    .catch(error => {
      res.status(500).json({ message: "error3", error });
    });
});

router.delete("/item/:id", (req, res) => {
  Posts.deleteItem(req.params.id)
    .then(res => {
      res.status(200).json({ message: `deleted id ${req.params.id}` });
    })
    .catch(error => {
      res.status(500).json({ message: "delete error", error });
    });
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

// get users and items

module.exports = router;
