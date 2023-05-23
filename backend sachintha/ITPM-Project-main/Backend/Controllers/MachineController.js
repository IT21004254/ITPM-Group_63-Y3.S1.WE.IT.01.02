const RequestModel = require("../Models/MachineModel");

//insertRequest
const requestCreate= async (req, res) => {

 
    const {
   
        city,
        disaster,
        date,
        description,
        camps    } = req.body;



    try {
        const machines = new RequestModel({
            
            city,
            disaster,
            date,
            description,
            camps
        });
        return await machines
            .save()
            .then((value) => {
                console.log(value,"value")
                return res.status(201).json({ value })
            }).catch((err) => {

                return res.status(500).json({ err });
            })
    } catch (error) {
        console.log("Error", error);
        res.status(400).json({ error: error.message });
    }

}

//get all Requests
const getRequests = async (req, res) => {
    try {
        const machines = await RequestModel.find();
        return res.status(200).json(machines);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//get selected machine
const getMachineDetails = async (req, res) => {
    try {
        const ID = req.params.id;
        const machines = await MachineModel.find({ _id: ID });
        res.status(200).send({ status: "Machine data recieved", MachineDetails: machines });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

//delete a spacific machine
const deleteRequests = async (req, res) => {
    console.log(" delete in")
    const id = req.params.id;

    await RequestModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ send: err });
    })
}

//update a specific machine item
const updateRequests = async (req, res) => {
    console.log(req,"update req in")
    const id = req.body.id;
    const {
        city,
        disaster,
        date,
        description,
        camps 
    } = req.body;

    console.log("ID==>", id);

    const newMachine = {
        city,
        disaster,
        date,
        description,
        camps 
    };

    await RequestModel.findByIdAndUpdate(id, newMachine).then(() => {
        res.status(200).send({ state: "Updates", data: newMachine });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

module.exports = {
    requestCreate,
    getRequests,
    getMachineDetails,
    deleteRequests,
    updateRequests 
}
