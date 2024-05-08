export default function ProductBrandImage({ brand }) {

    
  const imageURLS = {
    apple: "/appleLogo.png",
    samsung: "/samsungLogo.jpg",
    sony: "/sonyLogo.png",
  };

  return (
    <div className="detail-image-category-area">
      {!imageURLS[brand] && <p>Product Image Not Served</p>}
      {imageURLS[brand] && (
        <img src={imageURLS[brand]} style={{ width: "30px" }} alt="" />
      )}
    </div>
  );
}
