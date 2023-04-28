import { useState } from "react";
import { useEffect } from "react";

const KeyPatternDetector = ({ pattern, onPatternMatch }) => {
  const [currentPattern, setCurrentPattern] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      // Add the key to the current pattern
      const newPattern = currentPattern + event.key.toLowerCase();
      setCurrentPattern(newPattern);

      // Check if the pattern matches
      if (newPattern.endsWith(pattern)) {
        return onPatternMatch();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPattern, pattern, onPatternMatch]);

  return null;
};
export default KeyPatternDetector;
