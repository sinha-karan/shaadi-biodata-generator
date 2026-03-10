export default function ContactInfo({ data, update }) {

  const handleChange = (e) => {

    update({
      ...data,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="space-y-3">

      <h2 className="text-xl font-semibold">
        Contact Info
      </h2>

      <input name="mobileNumber" placeholder="Mobile Number" className="border p-2 w-full" value={data.mobileNumber} onChange={handleChange} />

      <input name="email" placeholder="Email" className="border p-2 w-full" value={data.email} onChange={handleChange} />

      <input name="currentAddress" placeholder="Current Address" className="border p-2 w-full" value={data.currentAddress} onChange={handleChange} />

      <input name="permanentAddress" placeholder="Permanent Address" className="border p-2 w-full" value={data.permanentAddress} onChange={handleChange} />

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={data.hideContactInfo}
          onChange={(e) =>
            update({
              ...data,
              hideContactInfo: e.target.checked
            })
          }
        />

        Hide Contact Info

      </label>

    </div>
  );
}