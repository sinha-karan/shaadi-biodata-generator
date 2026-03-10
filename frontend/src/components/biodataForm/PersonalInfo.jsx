export default function PersonalInfo({ data, update }) {

  const handleChange = (e) => {

    update({
      ...data,
      [e.target.name]: e.target.value
    });

  };

  return (

    <div className="space-y-3">

      <h2 className="text-xl font-semibold">
        Personal Info
      </h2>

      <input name="name" placeholder="Name" className="border p-2 w-full" value={data.name} onChange={handleChange} />

      <input name="age" placeholder="Age" className="border p-2 w-full" value={data.age} onChange={handleChange} />

      <input name="height" placeholder="Height" className="border p-2 w-full" value={data.height} onChange={handleChange} />

      <input name="complexion" placeholder="Complexion" className="border p-2 w-full" value={data.complexion} onChange={handleChange} />

      <input name="religion" placeholder="Religion" className="border p-2 w-full" value={data.religion} onChange={handleChange} />

      <input name="caste" placeholder="Caste" className="border p-2 w-full" value={data.caste} onChange={handleChange} />

      <input name="gotra" placeholder="Gotra" className="border p-2 w-full" value={data.gotra} onChange={handleChange} />

      <input name="rashi" placeholder="Rashi" className="border p-2 w-full" value={data.rashi} onChange={handleChange} />

      <input name="nakshatra" placeholder="Nakshatra" className="border p-2 w-full" value={data.nakshatra} onChange={handleChange} />

      <input name="birthTime" placeholder="Birth Time" className="border p-2 w-full" value={data.birthTime} onChange={handleChange} />

      <input name="birthPlace" placeholder="Birth Place" className="border p-2 w-full" value={data.birthPlace} onChange={handleChange} />

    </div>
  );
}