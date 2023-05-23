const express = require("express")

const { requestCreate, getRequests, getMachineDetails, deleteRequests, updateRequests  } = require("../Controllers/MachineController");

const router = express.Router();

//plant insertion
router.post("/createRequest", requestCreate);

//get all products
router.get("/getAllRequests",getRequests);

//get selected product
router.get("/getMachines/:id", getMachineDetails)

//delete a specific machine
router.delete("/deleteRequests/:id", deleteRequests)

//update selected machine details
router.put("/updateRequests",  updateRequests )

module.exports = router;