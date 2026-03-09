
export const ClassicTemplate = ({biodata}) => {
  return (
    <div>

      <div className="flex flex-col mb-5">
        <div className="pb-2">Personal Details</div>
        <div>
          <div>Name: {biodata?.personalInfo?.name}</div>
          <div>Age: {biodata?.personalInfo?.age}</div>
          <div>Height: {biodata?.personalInfo?.height}</div> 
          <div>complexion: {biodata?.personalInfo?.complexion}</div>
          <div>religion: {biodata?.personalInfo?.religion}</div>
          <div>caste: {biodata?.personalInfo?.caste}</div>
          <div>gotra: {biodata?.personalInfo?.gotra}</div>
          <div>rashi: {biodata?.personalInfo?.rashi}</div>
          <div>manglik: {biodata?.personalInfo?.manglik}</div>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <div className="pb-2">professional Info</div>
        <div>
          <div>education: {biodata?.professionalInfo?.education}</div> 
          <div>occupation: {biodata?.professionalInfo?.occupation}</div>
          <div>salary: {biodata?.professionalInfo?.salary}</div>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <div>Family Details</div>
        <div>
          <div>fatherName: {biodata?.familyInfo?.fatherName}</div>
          <div>fatherOccupation: {biodata?.familyInfo?.fatherOccupation}</div>
          <div>motherName: {biodata?.familyInfo?.motherName}</div>
          <div>motherOccupation: {biodata?.familyInfo?.motherOccupation}</div>
          <div>brothers: {biodata?.familyInfo?.brothers}</div>
          <div>sisters: {biodata?.familyInfo?.sisters}</div>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <div className="pb-2">Contact Details</div>
        <div>
          <div>mobileNumber: {biodata?.contactInfo?.mobileNumber}</div>
          <div>email: {biodata?.contactInfo?.email}</div> 
          <div>currentAddress: {biodata?.contactInfo?.currentAddress}</div>
          <div>permanentAddress: {biodata?.contactInfo?.permanentAddress}</div>
        </div>
      </div>

      <div className="flex flex-col mb-5">
        <div className="pb-2">Other Details</div>
        <div>
          <div>hobbies: {biodata?.hobbies}</div>
          <div>expectations: {biodata?.expectations}</div>
        </div>
      </div>

    </div>
  )
}