import { Route, Routes } from "react-router";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProtectedAuthRoutes from "./routes/ProtectedAuthRoutes";
import PageSuspenseFallback from "./animations/PageSuspenseFallback";

// Lazy Load Pages
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/registerPage/RegisterPage"));
const TypeOfTourism = lazy(
  () => import("./pages/Type of Tourism/TypeOfTourism")
);
const Governorates = lazy(() => import("./pages/Governorates/Governorates"));
const Recommendation = lazy(
  () => import("./pages/Recommendation/Recommendation")
);
const SinglePlace = lazy(() => import("./pages/Single place/SinglePlace"));
const SingleTourism = lazy(
  () => import("./pages/Type of Tourism/SingleTourism")
);
const SingleGovernorate = lazy(
  () => import("./pages/Governorates/SingleGovernorate")
);
const MachineQuotations = lazy(
  () => import("./pages/Machine Quotations/MachineQuotations")
);
const TripDetails = lazy(
  () => import("./pages/Recommendation/Trip Details/TripDetails")
);
const Profile = lazy(() => import("./pages/profile/Profile"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedAuthRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route
          path="/machine-quotations"
          element={
            <PageSuspenseFallback>
              <MachineQuotations />
            </PageSuspenseFallback>
          }
        />
        <Route
          path="/"
          element={
            <PageSuspenseFallback>
              <MainLayout />
            </PageSuspenseFallback>
          }
        >
          <Route
            index
            element={
              <PageSuspenseFallback>
                <HomePage />
              </PageSuspenseFallback>
            }
          />
          <Route
            path="/type-of-tourism"
            element={
              <PageSuspenseFallback>
                <TypeOfTourism />
              </PageSuspenseFallback>
            }
          />
          <Route
            path="/governorates"
            element={
              <PageSuspenseFallback>
                <Governorates />
              </PageSuspenseFallback>
            }
          />
          <Route
            path="/type-of-tourism/:name"
            element={
              <PageSuspenseFallback>
                <SingleTourism />
              </PageSuspenseFallback>
            }
          />
          <Route
            path="/governorates/:name"
            element={
              <PageSuspenseFallback>
                <SingleGovernorate />
              </PageSuspenseFallback>
            }
          />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/recommendation"
              element={
                <PageSuspenseFallback>
                  <Recommendation />
                </PageSuspenseFallback>
              }
            />
            <Route
              path="/profile"
              element={
                <PageSuspenseFallback>
                  <Profile />
                </PageSuspenseFallback>
              }
            />
            <Route
              path="/recommendation/trips/:name"
              element={
                <PageSuspenseFallback>
                  <TripDetails />
                </PageSuspenseFallback>
              }
            />
            <Route
              path="/places/:name"
              element={
                <PageSuspenseFallback>
                  <SinglePlace />
                </PageSuspenseFallback>
              }
            />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
