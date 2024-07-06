import { Route, Routes } from "react-router-dom";
import SubscriptionsPage from "../pages/Subscriptions/SubscriptionsPage";
import ErrPage from "../pages/Error/Error";
import SubscribeRegisterPage from "../pages/SubscribeRegister/SubscribeRegisterPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SubscriptionsPage />} />
      <Route path="/:id" element={<SubscribeRegisterPage/>} />
      <Route path="*" element={<ErrPage />} />
    </Routes>
  );
}
