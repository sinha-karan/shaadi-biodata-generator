export const ModernTemplate = ({ biodata }) => {

  const p = biodata?.personalInfo;
  const c = biodata?.contactInfo;
  const pro = biodata?.professionalInfo;
  const f = biodata?.familyInfo;

  return (

    <div className="max-w-5xl mx-auto bg-white shadow-lg p-10 grid grid-cols-2 gap-10">


      <div className="space-y-6">

        {biodata?.profilePhoto && (
          <img
            src={biodata.profilePhoto}
            className="w-40 h-40 object-cover rounded-full border"
          />
        )}

        <div>

          <h2 className="text-xl font-semibold mb-3">
            Personal Details
          </h2>

          <p>Name: {p?.name}</p>
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

          <h2 className="text-xl font-semibold mb-3">
            Professional
          </h2>

          <p>Education: {pro?.education}</p>
          <p>Occupation: {pro?.occupation}</p>
          <p>Salary: {pro?.salary}</p>

        </div>

      </div>



      <div className="space-y-6">

        <div>

          <h2 className="text-xl font-semibold mb-3">
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

          <h2 className="text-xl font-semibold mb-3">
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
              Contact details hidden for privacy
            </p>

          )}

        </div>


        <div>

          <h2 className="text-xl font-semibold mb-3">
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

    </div>

  );
};