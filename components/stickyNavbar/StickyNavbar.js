import React from "react";

const StickyNavbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  return <div></div>;
};

export default StickyNavbar;
