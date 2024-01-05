import { useEffect, useState } from "react";

interface UseMediaQueryProps {
  minWidth?: number;
  maxWidth?: number;
}

const useMediaQuery = ({ minWidth, maxWidth }: UseMediaQueryProps) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (!minWidth && !maxWidth) return;

      const minQuery = minWidth && `(min-width: ${minWidth}px)`;
      const maxQuery = maxWidth && `(max-width: ${maxWidth}px)`;
      const mediaQuery = window.matchMedia(
        [minQuery, maxQuery].filter(Boolean).join(" and ")
      );

      setMatches(mediaQuery.matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, maxWidth]);

  return matches;
};

export default useMediaQuery;
