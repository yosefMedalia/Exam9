import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const navigate = useNavigate();
    //קבלת הקומה מהפראמס ןשליפת הגישה מהסטור
    const { floorIndex } = useParams<{ floorIndex: string }>(); 
    const access = useSelector((state: any) => state.floor.access); 

    // בדיקה אם יש גישה לקומה הנדרשת
    const isAccessible = floorIndex ? access[parseInt(floorIndex)] : false;

    if (!isAccessible) {
        navigate("/forbidden");
        return null;
    }
    //אם יש גישה אני שולח אותו לפרופס שהתקבל
    return <>{component}</>;
};

export default PrivateRoute;
