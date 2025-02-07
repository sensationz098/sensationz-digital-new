import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import Seo from "./AllServices/Seo/Seo";
import GraphicDesigning from "./AllServices/GraphicDesigning/GraphicDesigning";
import SocialMediaManagement from "./AllServices/SocialMediaManagement/SocialMediaManagement";
import VideoEditing from "./AllServices/VideoEditing/VideoEditing";
import WebDesigning from "./AllServices/WebDesigning/WebDesigning";
import BrandPromotion from "./AllServices/BrandPromotion/BrandPromotion";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="services/seo" element={<Seo />} />
      <Route path="services/graphicdesigning" element={<GraphicDesigning />} />
      <Route
        path="services/socialmediamanagement"
        element={<SocialMediaManagement />}
      />
      <Route path="services/videoediting" element={<VideoEditing />} />
      <Route path="services/webdesigning" element={<WebDesigning />} />
      <Route path="services/brandpromotion" element={<BrandPromotion />} />
      {/*/>
      <Route path="/PrivacyPolicy" element={<Policy />} />  */}
    </Route>
  )
);
