import { useFlow } from "@bam.tech/flow-navigator";
import { Button, Text, View } from "react-native";
import { useAppContext } from "./flow";

export const Step1Page = () => {
  const {
    goToNextStep,
    goToPreviousStep,
    canGoToNextStep,
    canGoToPreviousStep,
    quitFlow,
  } = useFlow();
  const { setStep2Enabled, step2Enabled } = useAppContext();

  const goNext = async () => {
    setStep2Enabled(true);

    // canGoToNextStep is not enabled here?
    if (canGoToNextStep) {
      goToNextStep();
    } else {
      console.warn(
        "Should not happen because we enable step 2 first so we can always go to a next step"
      );
    }
  };

  const goBack = () => {
    if (canGoToPreviousStep) {
      goToPreviousStep();
    } else {
      quitFlow();
    }
  };

  const toggleNextScreen = () => {
    setStep2Enabled(!step2Enabled);
  };

  return (
    <View>
      <Text>Step 2 enabled:{step2Enabled ? "YES" : "NO"}</Text>
      <Button title="Toggle next screen" onPress={toggleNextScreen} />
      <Button title="Enable step 2 and go to next page" onPress={goNext} />
      <Button title="Go to previous page" onPress={goBack} />
    </View>
  );
};
