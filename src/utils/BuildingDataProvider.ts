import { useState, useEffect } from 'react';
import buildingDataJSON from '../data/building.json';


interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

useEffect(() => {
  setBuildingData(buildingDataJSON); // קביעת נתוני הבניין מהיבוא 
}, []);


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
      return buildingData[floorIndex];
    };  
    //ללא כפילויות
  const getListOfActivities = ():string[]=>{
    return Array.from(new Set(buildingData.map((floor) => floor.activity)));
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;


  

