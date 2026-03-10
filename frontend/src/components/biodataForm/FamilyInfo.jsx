export default function FamilyInfo({ data, update }) {

  const handleChange = (e) => {

    update({
      ...data,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="space-y-3">

      <h2 className="text-xl font-semibold">
        Family Info
      </h2>

      <input name="fatherName" placeholder="Father Name" className="border p-2 w-full" value={data.fatherName} onChange={handleChange} />

      <input name="fatherOccupation" placeholder="Father Occupation" className="border p-2 w-full" value={data.fatherOccupation} onChange={handleChange} />

      <input name="motherName" placeholder="Mother Name" className="border p-2 w-full" value={data.motherName} onChange={handleChange} />

      <input name="motherOccupation" placeholder="Mother Occupation" className="border p-2 w-full" value={data.motherOccupation} onChange={handleChange} />

      <input name="brothers" placeholder="Brothers" className="border p-2 w-full" value={data.brothers} onChange={handleChange} />

      <input name="sisters" placeholder="Sisters" className="border p-2 w-full" value={data.sisters} onChange={handleChange} />

    </div>
  );
}