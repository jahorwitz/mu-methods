//body component for seed-phrase.jsx
import { faker } from "@faker-js/faker";
import _ from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Pill } from "../../../../components";
import { WizardContext } from "../../sign-up";

//TODO: Should Download button have an error popup?

export const Body = ({ isVisible, setIsVisible }) => {
  // Get updateSeed
  const { updateSeedPhrases } = useContext(WizardContext);

  const [isCopied, setIsCopied] = useState(false);

  // These are seed phrases generated by the library
  // Triggered on page loading with use effect from SDK
  // At this step, they can still be overwritten (not in context yet)
  const [seedPhrases, setSeedPhrases] = useState([]);

  // Generate Seed Phrases
  useEffect(() => {
    setSeedPhrases(
      Array.from({ length: 12 }, () =>
        faker.music.genre()
      ) /** Sdk.generateSeedPhrases()  */
    );
  }, []);

  // Regenerate Seed Phrases
  const regenerateSeedPhrases = useCallback(() => {
    setSeedPhrases(
      Array.from({ length: 12 }, () =>
        faker.word.adjective()
      ) /** Sdk.generateSeedPhrases()  */
    );
  }, []);

  // Update Context store when seedPhrases changes
  useEffect(() => {
    updateSeedPhrases(seedPhrases);
  }, [seedPhrases]);

  // Copy to clipboard function
  // Get seeds from store
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(seedPhrases.join(" "));
      setIsCopied(true);
      setIsVisible(true);
      alert(seedPhrases.join(" "));
    } catch (err) {
      alert("Could not copy to clipboard");
    }
  };

  // Download to text function
  const downloadTextFile = () => {
    const element = document.createElement("a");
    const blobData = seedPhrases.join(" ");
    const file = new Blob([blobData], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <h3 className="pb-12px m-0 fw-bold text-white text-opacity-90 fs-18px">
        Save your seed phrase
      </h3>

      <div className="d-flex flex-wrap justify-content-center gap-8px square rounded w-100 bg-beta px-14px py-20px mb-12px">
        {seedPhrases.map((phrase) => (
          <Pill
            text={phrase}
            key={_.uniqueId("seed-phrase-")}
            className="fs-16px fw-normal"
            opacity="20"
            shape="square"
            textOpacity={100}
          ></Pill>
        ))}
      </div>
      <Button onClick={regenerateSeedPhrases}>Regenerate</Button>
      {isVisible && (
        <p className="position-absolute top-0 start-50 translate-middle mt-40px fs-16px w-100 fw-normal py-20px mb-0 lh-sm text-center text-white text-opacity-100 bg-beta bg-opacity-100 rounded">
          {isCopied ? "Seed phrase copied to clipboard" : ""}
        </p>
      )}

      <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-32px">
        Write down your seed phrase in a secure place. If you loose it without
        setting up peers to restore it, you'll loose access to your account
        forever
      </p>
      <div className=" d-flex gap-16px">
        <Button onClick={copy}>Copy</Button>
        <Button onClick={downloadTextFile}>Download</Button>
      </div>
    </>
  );
};