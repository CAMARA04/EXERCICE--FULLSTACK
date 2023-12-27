const express = require("express");
const router = express.Router();
const auth = require("../midleware/auth");
const multer = require("../midleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

router.get("/", auth, stuffCtrl.getAllThings);
router.post("/", auth, multer, stuffCtrl.createThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.put("/:id", multer, auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
