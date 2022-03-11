import "./main.css";
import ArrowUp from "../../../resources/arrow_up.svg";
import { useEffect, useState } from "react";

 function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 nos lleva de vuelta al inicio de la página
  // Behavior: smooth hace el movimiento suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    //El componente se muestra despues de hacer scroll 100 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a className="back-to-top" onClick={scrollToTop}>
          <ArrowUp fill={"white"} width="33px" height="33px" />
        </a>
      )}
    </>
  );
}

export default ScrollTop;