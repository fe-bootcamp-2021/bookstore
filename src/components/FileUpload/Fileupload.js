export const encodeToBase64 = (file, setFileBase64) => {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      setFileBase64(base64);
    };
    reader.onerror = (err) => console.log(err);
  }
};
