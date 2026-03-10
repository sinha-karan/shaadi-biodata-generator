export default function ProfessionalInfo({ data, update }) {

  const handleChange = (e) => {

    update({
      ...data,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="space-y-3">

      <h2 className="text-xl font-semibold">
        Professional Info
      </h2>

      <input name="education" placeholder="Education" className="border p-2 w-full" value={data.education} onChange={handleChange} />

      <input name="occupation" placeholder="Occupation" className="border p-2 w-full" value={data.occupation} onChange={handleChange} />

      <input name="salary" placeholder="Salary" className="border p-2 w-full" value={data.salary} onChange={handleChange} />

    </div>
  );
}