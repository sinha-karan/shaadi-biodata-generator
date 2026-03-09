import { useEffect, useState } from "react";
import axios from "axios"
import { ClassicTemplate } from "../templates/ClassicTemplate";
import { PremiumTemplate } from "../templates/PremiumTemplate";
import { ModernTemplate } from "../templates/ModernTemplate";

export const PreviewPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    
          axios.get("http://localhost:3000/api/biodata/64ab82dhthydyh48565r6g8sre4g6g46",{
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
          } 
        })
        .then((res) => {
          setData(res.data.biodata);
        })
       .catch((error) => {c
        onsole.error("An error occured while data fetching", error);
        setError("Failed to load biodata. Please try again later.");
        })
        .finally(() => {
        setLoading(false);
        });
      
    },[])
  

  if (loading) {
    return <div>
      Loading....
    </div>
  }

  if (error) {
    return(
      <>
      {error}
      </>
    )
  }

  let SelectedTemplate = null;

  if (data.templateId === "classic") {
    SelectedTemplate = ClassicTemplate;
  } else if (data.templateId === "modern") {
    SelectedTemplate = ModernTemplate;
  } else if (data.templateId === "premium") {
    SelectedTemplate = PremiumTemplate;
  }

  if (!SelectedTemplate) {
    return <div className="p-10 text-center">Template not found!</div>;
  }

  return (
    <div className="preview-container">
      <SelectedTemplate biodata={data} />
    </div>
  );
}