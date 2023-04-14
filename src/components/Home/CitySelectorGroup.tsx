/** @format */

import React, { FC } from "react";
import { VStack } from "native-base";
import CitySelector from "./CitySelector";
import SwitchButton from "../shared/SwitchButton";
import { useLocalization } from "../../context/LocalizationContext";
interface CitySelectorGroupProps {
  origin: string;
  setOrigin: (item: string) => void;
  destination: string;
  setDestination: (item: string) => void;
  hasReturn: boolean;
}

const CitySelectorGroup: FC<CitySelectorGroupProps> = (props) => {
  const { origin, setOrigin, destination, setDestination, hasReturn } = props;
  const { strings } = useLocalization();
  return (
    <VStack space={3}>
      <CitySelector
        onSelect={(item) => setOrigin(item)}
        value={origin}
        placeholder={strings.origin}
      />

      <CitySelector
        onSelect={(item) => setDestination(item)}
        value={destination}
        placeholder={strings.destination}
      />
      <SwitchButton
        onPress={() => {
          setOrigin(destination);
          setDestination(origin);
        }}
      />
    </VStack>
  );
};

export default CitySelectorGroup;
