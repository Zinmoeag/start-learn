 
export const transformArrayToObjectByKey = <T extends Record<string, any>, K extends keyof T>(
    array: Array<T>,
    key: K
  ): Record<string, Omit<T, keyof K>> => {
    return array.reduce((acc, item) => {
      acc[String(item[key])] = item as Omit<T, K>;
      return acc;
    }, {} as Record<string, Omit<T, K>>);
  };
  
  export interface IOptions {
    label: string;
    value: string | undefined;
  }
  
  export const formatDate = (dateString: string | Date, options?: { withTime?: boolean }): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
  
    if (!options?.withTime) {
      return `${year}-${month}-${day}`;
    }
  
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHour = hours % 12 || 12;
  
    return `${year}-${month}-${day} ${formattedHour}:${minutes} ${ampm}`;
  };
  
  export const converToOption = (
    rawData: any,
    optionKey: string,
    optionValue: string,
    setting?: {
      includeAll: boolean;
    }
  ): Array<any> => {
    const modifiedVals = rawData.map((item: any) => ({
      label: item[optionKey],
      value: item[optionValue],
    }));
  
    return [...(setting?.includeAll ? [{ label: "All", value: null }] : []), ...modifiedVals];
  };
  
  export function isBannerActive(startDate?: string, endDate?: string): boolean {
    if (!startDate || !endDate) return false;
  
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    return now >= start && now <= end;
  }
  
  export const getLast7Days = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split("T")[0];
  };
  