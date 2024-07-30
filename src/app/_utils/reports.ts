export const baseUrlExpress = "http://localhost:3001";
export const telechargeAction = async (queryName: string) => {
  try {
    const response = await fetch(`${baseUrlExpress}/export-csv/${queryName}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error fetching the report count:", error);
    throw error;
  }
};
