import React, {createContext, useState, FC } from "react";
import dayjs, {Dayjs} from "dayjs";

interface RoutesContextType {

    selectedOrigin: string;
    selectedDestination: string;
    selectedDate: Dayjs;
    selectedPassengers: string;
    setOrigin: (origin: string) => void;
    setDestination: (destination: string) => void;
    setDate: (date: Dayjs) => void;
    setPassengers: (passengers: string) => void;

}

export const RoutesContext = createContext<RoutesContextType | null> (null);

type Props = {
    children: JSX.Element
  };
  
export const RoutesProvider = ({ children  }:Props) => {
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [selectedPassengers, setSelectedPassengers] = useState("");
  
    const setOrigin = (origin: string) => setSelectedOrigin(origin);
    const setDestination = (destination: string) =>
      setSelectedDestination(destination);
    const setDate = (date: Dayjs) => setSelectedDate(date);
    const setPassengers = (passengers: string) =>
      setSelectedPassengers(passengers);
  
    const contextValue: RoutesContextType = {
      selectedOrigin,
      selectedDestination,
      selectedDate,
      selectedPassengers,
      setOrigin,
      setDestination,
      setDate,
      setPassengers,
    };
  
    return (
      <RoutesContext.Provider value={contextValue}>{children}</RoutesContext.Provider>
    );
  };