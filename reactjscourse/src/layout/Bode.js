import Btns from "./Btns";
import Posts from "./Post";

export default function Bode() {
  const stylescardbtn = {
    margin: "20px 0 0 100px",
    height: "fit-content",
    border: "5px solid #13c7a3ff",
    flex: "0 0 20%",
  };

   const styleposts = {
     height: "fit-content",
    flex: "0 0 50%"   
      };
   const stylebodys = {
        display: "flex",
     width: "100%",
  gap: "10px",
   };


  const listbtn = [
    { id: 1, titles: "up" },
    { id: 2, titles: "down" },
    { id: 3, titles: "left" },
    { id: 4, titles: "right" },
    { id: 5, titles: "saminj" },
  ];

  const listmapbtn = listbtn.map((item) => (
    <Btns key={item.id} names={item.titles} />
  ));
  return (
    <>
      <div style={stylebodys}>
         <div style={styleposts}>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div style={stylescardbtn}>
          {listmapbtn}
          </div>
      </div>
    </>
  );
}
