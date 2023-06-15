import { Outlet } from "react-router-dom"
import TopNav from "../header/topnav"
import Footer from '../footer/footer';

export default function RootLayout() {
  return (
    <main>
        <div>
            <TopNav />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </main>
  )
}
