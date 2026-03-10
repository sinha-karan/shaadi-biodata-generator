export default function TemplateSelector({ templateId, setTemplate }) {

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "Traditional biodata layout with simple sections and centered photo."
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Two column modern layout with profile style biodata."
    },
    {
      id: "premium",
      name: "Premium",
      preview:
        "Premium styled biodata card with highlighted sections."
    }
  ];

  return (

    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        Select Template
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {templates.map((t) => (

          <div
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition 
            ${templateId === t.id ? "border-blue-500" : "border-gray-300"}`}
          >

            <h3 className="font-semibold text-lg mb-2">
              {t.name}
            </h3>

            <div className="h-32 bg-gray-100 flex items-center justify-center text-sm text-gray-600">
              Template Preview
            </div>

            <p className="text-sm text-gray-600 mt-3">
              {t.preview}
            </p>

            {templateId === t.id && (
              <p className="text-blue-600 text-sm mt-2">
                Selected
              </p>
            )}

          </div>

        ))}

      </div>

    </div>

  );
}