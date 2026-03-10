export const PremiumTemplate = ({ biodata }) => {

  const p = biodata?.personalInfo;
  const c = biodata?.contactInfo;
  const pro = biodata?.professionalInfo;
  const f = biodata?.familyInfo;

  return (

    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-10 space-y-8">


      <div className="text-center">

        {biodata?.profilePhoto && (
          <img
            src={biodata.profilePhoto}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border"
          />
        )}

        <h1 className="text-3xl font-bold">
          {p?.name}
        </h1>

        <p className="text-gray-600">
          {pro?.occupation}
        </p>

      </div>


      <div>

        <h2 className="font-semibold border-b mb-3">
          Personal Details
        </h2>

        <p>Age: {p?.age}</p>
        <p>Height: {p?.height}</p>
        <p>Complexion: {p?.complexion}</p>
        <p>Religion: {p?.religion}</p>
        <p>Caste: {p?.caste}</p>
        <p>Gotra: {p?.gotra}</p>
        <p>Rashi: {p?.rashi}</p>
        <p>Nakshatra: {p?.nakshatra}</p>
        <p>Birth Time: {p?.birthTime}</p>
        <p>Birth Place: {p?.birthPlace}</p>
        <p>Manglik: {p?.manglik ? "Yes" : "No"}</p>

      </div>


      <div>

        <h2 className="font-semibold border-b mb-3">
          Professional Details
        </h2>

        <p>Education: {pro?.education}</p>
        <p>Occupation: {pro?.occupation}</p>
        <p>Salary: {pro?.salary}</p>

      </div>


      <div>

        <h2 className="font-semibold border-b mb-3">
          Family Details
        </h2>

        <p>Father: {f?.fatherName}</p>
        <p>Father Occupation: {f?.fatherOccupation}</p>
        <p>Mother: {f?.motherName}</p>
        <p>Mother Occupation: {f?.motherOccupation}</p>
        <p>Brothers: {f?.brothers}</p>
        <p>Sisters: {f?.sisters}</p>

      </div>


      <div>

        <h2 className="font-semibold border-b mb-3">
          Contact
        </h2>

        {!c?.hideContactInfo ? (

          <>
            <p>Mobile: {c?.mobileNumber}</p>
            <p>Email: {c?.email}</p>
            <p>Current Address: {c?.currentAddress}</p>
            <p>Permanent Address: {c?.permanentAddress}</p>
          </>

        ) : (

          <p className="italic text-gray-500">
            Contact hidden for privacy
          </p>

        )}

      </div>


      <div>

        <h2 className="font-semibold border-b mb-3">
          Other Details
        </h2>

        <p>
          Hobbies: {Array.isArray(biodata?.hobbies)
            ? biodata.hobbies.join(", ")
            : biodata?.hobbies}
        </p>

        <p>
          Expectations: {biodata?.expectations}
        </p>

      </div>

    </div>

  );
};