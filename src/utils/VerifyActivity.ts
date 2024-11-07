import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams): boolean => {
  const roleIndex = roles.indexOf(role);
  const activityIndex = activities.indexOf(activity);
    //אימות שנמצאים ברשימה
  if (roleIndex === -1 || activityIndex === -1) {
    return false;
  }
  if (roleIndex > activityIndex){
    return false;
  }
  return true;
};

export default useIsVerified;
