import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";

import { ClassicTemplate } from "../templates/ClassicTemplate";
import { ModernTemplate } from "../templates/ModernTemplate";
import { PremiumTemplate } from "../templates/PremiumTemplate";

export const PreviewPage = () => {

  const { id } = useParams();

  const [biodata, setBiodata] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const pdfRef = useRef();

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:3000/api/biodata/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {

        setBiodata(res.data.biodata);

        if (res.data.isPremium) {
          setIsPremium(true);
        }

      })
      .catch((err) => {
        console.error("Error fetching biodata", err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  const downloadPDF = () => {

    const element = pdfRef.current;

    const options = {
      margin: 10,
      filename: "biodata.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();

  };

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!biodata) {
    return <div className="p-10">No biodata found</div>;
  }

  const templates = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    premium: PremiumTemplate,
  };

  const SelectedTemplate = templates[biodata.templateId] || ClassicTemplate;

  return (

    <div className="p-10">

      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Download PDF
      </button>

      <div ref={pdfRef} className="relative bg-white p-10 shadow-lg">

        {!isPremium && (

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <h1 className="text-6xl font-bold opacity-20 rotate-45">
              CodeMyFyp
            </h1>

          </div>

        )}

        <SelectedTemplate biodata={biodata} />

      </div>

    </div>

  );

};