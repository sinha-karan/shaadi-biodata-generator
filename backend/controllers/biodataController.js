import Biodata from "../models/Biodata.js";

export const createBiodata = async (req, res) => {
  try {
    const userId = req.userId;
    const {templateId, personalInfo, contactInfo, professionalInfo, familyInfo, hobbies, expectations, profilePhoto} = req.body;

    if (!templateId || !personalInfo || !contactInfo || !professionalInfo || !familyInfo) {
      return res.status(400).send("Required fields are missing")
    }

    const biodata = await Biodata.create({
      userId,
      templateId,personalInfo, contactInfo, professionalInfo, familyInfo, hobbies, expectations, profilePhoto
    })

    res.status(201).json({
      message: "Biodata created successfully",
      biodata: biodata
    })

  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error")
  }
}

export const getAllBiodata = async (req, res) => {
  try {
    const userId = req.userId;

    const allBiodata =await Biodata.find({
      userId: userId
    });

    res.status(200).json({
      biodata: allBiodata
    })

  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error");
  }
}

export const getSingleBiodata = async (req, res) => {
  try {
    const biodataId = req.params.id;
    const userId = req.userId;

    if (!biodataId) {
      return res.status(400).send("Required fields are missing")
    }

    const biodata = await Biodata.findById(biodataId)

    if (biodata === null) {
      return res.status(404).json({
        message: "Biodata doesn't exist"
      })
    }

    if (biodata.userId.toString() !== userId) {
      return res.status(403).json({
        message: "unauthorized access"
      })
    }

    res.status(200).json({
      biodata: biodata
    })

  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error");
  }
}

export const updateBiodata = async (req, res) => {
  try {
    const biodataId = req.params.id
    const userId = req.userId;
    const {templateId, personalInfo, contactInfo, professionalInfo, familyInfo, hobbies, expectations, profilePhoto} = req.body;

    if (Object.keys(req.body || {}).length === 0) {
      return res.status(403).json({
        message: "No info is provided"
      })
    }

    if (!biodataId) {
      return res.status(400).send("Required fields are missing")
    }

    const biodata = await Biodata.findById(biodataId)

    if (biodata === null) {
      return res.status(404).json({
        message: "Biodata doesn't exist"
      })
    }

    if (biodata.userId.toString() !== userId) {
      return res.status(403).json({
        message: "unauthorized access"
      })
    }

    const updatedBiodata = await Biodata.findByIdAndUpdate(
      biodataId
    ,{
      templateId, personalInfo, contactInfo, professionalInfo, familyInfo, hobbies, expectations, profilePhoto
    }, {
      new: true
    })

    res.status(200).json({
      message: "Biodata updated successfully",
      biodata: updatedBiodata
    })

  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error")
  }
}

export const deleteBiodata = async (req, res) => {
  try {
    const biodataId = req.params.id
    const userId = req.userId;

    if (!biodataId) {
      return res.status(400).send("Required fields are missing")
    }

    const biodata = await Biodata.findById(biodataId)

    if (biodata === null) {
      return res.status(404).json({
        message: "Biodata doesn't exist"
      })
    }

    if (biodata.userId.toString() !== userId) {
      return res.status(403).json({
        message: "unauthorized access"
      })
    }

    await Biodata.findByIdAndDelete(biodataId);

    res.status(200).json({
      message: "Biodata deleted successfully"
    })

  } catch (error) {
    console.error("An error occurred", error);
    return res.status(500).send("Internal error")
  }
}

