import BookTrip from "@/Layout/BookTrip";
import Category from "@/Layout/Category";
import Dastination from "@/Layout/Dastination";
import Header from "@/Layout/Header";
import Subscribe from "@/Layout/Subscribe";
import Testimonials from "@/Layout/Testimonials";

export default function Home() {
  return (
    <div className=" "  >
   <Header />
   <Category />
   <Dastination />
   <BookTrip   />
   <Testimonials />
   <Subscribe />
    </div>
  );
}
