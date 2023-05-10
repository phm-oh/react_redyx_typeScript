import React, { useEffect, useState } from "react";

type AppHeaderProps = {
  title: string;
  year?: number;
};

const AppHeader = ({ title, year }: AppHeaderProps) => {
  const [isShow, setIsShow] = useState(false);
  const [showYear, setShowYear] = useState(false);
//--------------------------------------------------------------------
//   useEffect(() => {
//     console.log("use effect AppHeader");   // ทำทุกครั้งที่มีการ render
//   })

//  // -------------------------------------
//   useEffect(() => {
//     console.log("use effect AppHeader");      // ทำครั้งเดียวที่มีการ render หน้า  
//   }, []);
//------------------------------------------

useEffect(() => {
    console.log("use effect AppHeader");      // ทำทุกครั้งที่มีการเปลี่ยนค่า state ที่ระบุ
  }, [isShow]);



  const mouseOver1 = () => {
    setIsShow(!isShow); //togle
  };

  const mouseOver2 = () => {
    setShowYear(!showYear); //togle
  };

  return (
    <>
      <h2 onMouseOver={mouseOver1}> APP Header name:</h2>
      { isShow &&
        <h2 onMouseOver={mouseOver2}>
            {title} 
        </h2>
      }

      { showYear &&
         <h2 >
            create at: {year}
         </h2>
      }
    </>
  );
};

export default AppHeader;
