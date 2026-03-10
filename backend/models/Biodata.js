import mongoose from "mongoose";

const biodataSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  templateId: {
    type: String,
    enum: ["classic", "modern", "premium"]
  },

  personalInfo: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: String, required: true },
    complexion: { type: String },
    religion: { type: String, required: true },
    caste: { type: String, required: true },
    gotra: { type: String, required: true },
    rashi: { type: String },
    nakshatra: { type: String },
    birthTime: { type: String },
    birthPlace: { type: String },
    manglik: { type: Boolean, default: false }
  },

  contactInfo: {
    mobileNumber: { type: String, required: true },
    email: { type: String },
    currentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    hideContactInfo: { type: Boolean, default: false }  
  },

  professionalInfo: {
    education: { type: String, required: true },
    occupation: { type: String, required: true },
    salary: { type: String }
  },

  familyInfo: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },
    motherName: { type: String, required: true },
    motherOccupation: { type: String },
    brothers: { type: String },
    sisters: { type: String }
  },

  hobbies: [String],

  expectations: { type: String },

  profilePhoto: {
    type: String,
    default: "https://res.cloudinary.com/demo/image/upload/v1/sample.jpg"
  }

}, { timestamps: true });

const Biodata = mongoose.model("Biodata", biodataSchema);

export default Biodata;