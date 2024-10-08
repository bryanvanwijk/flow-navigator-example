import { createFlowNavigator } from "@bam.tech/flow-navigator";
import { Step1Page } from "./Step1Page";
import { Step2Page } from "./Step2Page";
import { createContext, ReactNode, useContext, useState } from "react";

const FlowNavigator = createFlowNavigator();

interface AppContextValue {
  step2Enabled: boolean;
  setStep2Enabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [step2Enabled, setStep2Enabled] = useState(false);

  return (
    <AppContext.Provider value={{ step2Enabled, setStep2Enabled }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export const FlowNavigatorExample = () => {
  const { step2Enabled } = useAppContext();
  return (
    <FlowNavigator.Navigator>
      <FlowNavigator.Screen name="Step1" component={Step1Page} />
      {step2Enabled && (
        <FlowNavigator.Screen name="Step2" component={Step2Page} />
      )}
    </FlowNavigator.Navigator>
  );
};
