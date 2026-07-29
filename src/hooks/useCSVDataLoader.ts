   import { useEffect, useState } from "react";
import Papa from "papaparse";

export interface Project {
  id: number;
  title: string;
  preview: string;
  description: string;
  date: string;
  images: string[];
}

const useCSVDataLoader = (
  csvUrl: string,
  rowFilter?: (project: Project) => boolean,
) => {
  const [csvData, setCsvData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!csvUrl) return;

    const fetchCSV = async () => {
      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        const parsed = Papa.parse<string[]>(csvText, {
          header: false,
          skipEmptyLines: true,
        });

        const headers = parsed.data[0] || [];
        const rows = parsed.data.slice(1);

        const mappedData: Project[] = rows.map((row, rowIndex) => {
          const rowData = headers.reduce<Record<string, string>>(
            (acc, header, i) => {
              acc[header.trim().toLowerCase()] = row[i] || "";
              return acc;
            },
            {},
          );

          // Convert Google Drive links to direct image URLs
          const images: string[] = rowData["images"]
            ? rowData["images"]
                .split(",")
                .map((link) => {
                  const trimmedLink = link.trim();

                  const fileId = trimmedLink.match(/[-\w]{25,}/)?.[0];

                  return fileId
                    ? `https://drive.google.com/uc?export=view&id=${fileId}`
                    : trimmedLink;
                })
                .filter(Boolean)
            : [];

          return {
            id: rowIndex + 1,
            title: rowData["title"] || "",
            preview: rowData["preview"] || "",
            description: rowData["description"] || "",
            date: rowData["date"] || "",
            images,
          };
        });

        const filteredData = rowFilter
          ? mappedData.filter(rowFilter)
          : mappedData;

        setCsvData(filteredData);
      } catch (error) {
        console.error("CSV load error:", error);
        setCsvData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCSV();
  }, [csvUrl, rowFilter]);

  return { csvData, loading };
};

export default useCSVDataLoader;
