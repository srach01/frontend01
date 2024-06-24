import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center bg-primary p-5">
          HEADER
        </div>
      </div>
       <div className="row">
        <div className="col-6 text-center bg-warning p-5">
         CONTENT1
        </div>
        <div className="col-6 text-center bg-success p-5">
          CONTENT2
        </div>
       </div>

       <div className="row">
        <div className="col-12 text-center bg-danger p-5">
          HEADER
        </div>
      </div>
    </div>
    </>
  );
}
