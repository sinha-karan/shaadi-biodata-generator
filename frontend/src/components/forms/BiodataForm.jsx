import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImageUploader } from "../ImageUploader";

export const BiodataForm = ({ initialData, onSubmit }) => {

  const navigate = useNavigate();
  const [biodata, setBiodata] = useState({
    templateId: "classic",

    personalInfo: {
      name: "",
      age: "",
      height: "",
      complexion: "",
      religion: "",
      caste: "",
      gotra: "",
      rashi: "",
      nakshatra: "",
      birthTime: "",
      birthPlace: "",
      manglik: false
    },

    contactInfo: {
      mobileNumber: "",
      email: "",
      currentAddress: "",
      permanentAddress: "",
      hideContactInfo: false
    },

    professionalInfo: {
      education: "",
      occupation: "",
      salary: ""
    },

    familyInfo: {
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      brothers: "",
      sisters: ""
    },

    hobbies: "",
    expectations: "",
    profilePhoto: ""
  });

  useEffect(() => {
    if (initialData) {
      setBiodata(initialData);
    }
  }, [initialData]);

  const updateSection = (section, field, value) => {
    setBiodata(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(biodata);
  };

  return (

<form onSubmit={handleSubmit} className="space-y-6">

{/* Template */}

<h2 className="font-bold text-lg">Template</h2>

<select
value={biodata.templateId}
onChange={(e) =>
setBiodata({ ...biodata, templateId: e.target.value })
}
className="border p-2"
>

<option value="classic">Classic</option>
<option value="modern">Modern</option>
<option value="premium">Premium</option>

</select>

{/* Personal Info */}

<h2 className="font-bold text-lg">Personal Info</h2>

<input
placeholder="Name"
value={biodata.personalInfo.name}
onChange={(e) => updateSection("personalInfo","name",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Age"
value={biodata.personalInfo.age}
onChange={(e) => updateSection("personalInfo","age",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Height"
value={biodata.personalInfo.height}
onChange={(e) => updateSection("personalInfo","height",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Complexion"
value={biodata.personalInfo.complexion}
onChange={(e) => updateSection("personalInfo","complexion",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Religion"
value={biodata.personalInfo.religion}
onChange={(e) => updateSection("personalInfo","religion",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Caste"
value={biodata.personalInfo.caste}
onChange={(e) => updateSection("personalInfo","caste",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Gotra"
value={biodata.personalInfo.gotra}
onChange={(e) => updateSection("personalInfo","gotra",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Rashi"
value={biodata.personalInfo.rashi}
onChange={(e) => updateSection("personalInfo","rashi",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Nakshatra"
value={biodata.personalInfo.nakshatra}
onChange={(e) => updateSection("personalInfo","nakshatra",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Birth Time"
value={biodata.personalInfo.birthTime}
onChange={(e) => updateSection("personalInfo","birthTime",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Birth Place"
value={biodata.personalInfo.birthPlace}
onChange={(e) => updateSection("personalInfo","birthPlace",e.target.value)}
className="border p-2 w-full"
/>

{/* Contact */}

<h2 className="font-bold text-lg">Contact Info</h2>

<input
placeholder="Mobile Number"
value={biodata.contactInfo.mobileNumber}
onChange={(e) => updateSection("contactInfo","mobileNumber",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Email"
value={biodata.contactInfo.email}
onChange={(e) => updateSection("contactInfo","email",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Current Address"
value={biodata.contactInfo.currentAddress}
onChange={(e) => updateSection("contactInfo","currentAddress",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Permanent Address"
value={biodata.contactInfo.permanentAddress}
onChange={(e) => updateSection("contactInfo","permanentAddress",e.target.value)}
className="border p-2 w-full"
/>

{/* Professional */}

<h2 className="font-bold text-lg">Professional Info</h2>

<input
placeholder="Education"
value={biodata.professionalInfo.education}
onChange={(e) => updateSection("professionalInfo","education",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Occupation"
value={biodata.professionalInfo.occupation}
onChange={(e) => updateSection("professionalInfo","occupation",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Salary"
value={biodata.professionalInfo.salary}
onChange={(e) => updateSection("professionalInfo","salary",e.target.value)}
className="border p-2 w-full"
/>

{/* Family */}

<h2 className="font-bold text-lg">Family Info</h2>

<input
placeholder="Father Name"
value={biodata.familyInfo.fatherName}
onChange={(e) => updateSection("familyInfo","fatherName",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Father Occupation"
value={biodata.familyInfo.fatherOccupation}
onChange={(e) => updateSection("familyInfo","fatherOccupation",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Mother Name"
value={biodata.familyInfo.motherName}
onChange={(e) => updateSection("familyInfo","motherName",e.target.value)}
className="border p-2 w-full"
/>

<input
placeholder="Mother Occupation"
value={biodata.familyInfo.motherOccupation}
onChange={(e) => updateSection("familyInfo","motherOccupation",e.target.value)}
className="border p-2 w-full"
/>

{/* Other */}

<h2 className="font-bold text-lg">Other</h2>

<input
placeholder="Hobbies"
value={biodata.hobbies}
onChange={(e) => setBiodata({...biodata,hobbies:e.target.value})}
className="border p-2 w-full"
/>

<textarea
placeholder="Expectations"
value={biodata.expectations}
onChange={(e) => setBiodata({...biodata,expectations:e.target.value})}
className="border p-2 w-full"
/>

<h2 className="font-bold text-lg">Profile Photo</h2>

<ImageUploader
  setImage={(url) =>
    setBiodata({ ...biodata, profilePhoto: url })
  }
/>

{biodata.profilePhoto && (
  <img
    src={biodata.profilePhoto}
    className="w-32 mt-4"
  />
)}

<button onClick={() => {navigate("/dashboard")}} className="bg-blue-500 text-white px-4 py-2 rounded">
Save Biodata
</button>

</form>

  );
};