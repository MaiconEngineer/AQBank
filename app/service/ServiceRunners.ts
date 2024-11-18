import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetch = require('node-fetch')

type Runner = {
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

type ListRunners = Runner[];

export class ServiceRunners {
  static getRunners(): UseQueryResult<ListRunners, Error> {
    return useQuery({
      queryKey: ["GET_RUNNERS"],
      queryFn: async () => {
        try {

          const response = await fetch("http://ergast.com/api/f1/drivers.json");

          if (!response.ok) {
            throw new Error("Failed to fetch runners");
          }

          const data = await response.json();

          const drivers: ListRunners = data?.MRData?.DriverTable?.Drivers?.map(
            (driver: any) => ({
              givenName: driver.givenName || "",
              familyName: driver.familyName || "",
              dateOfBirth: driver.dateOfBirth || "",
              nationality: driver.nationality || ""
            })
          );

          return drivers;
        } catch (error) {
          console.error("Error fetching runners:", error);
          throw new Error("Error fetching runners");
        }
      },
    });
  }
}
