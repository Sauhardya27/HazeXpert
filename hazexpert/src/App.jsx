import styles from "./style";
import { Navbar, Hero, Design, Design1, Upload, Step } from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className="bg-[url('src/assets/bgImg.svg')] w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <Design />
    <Upload />

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
          <span className="text-gradient">Steps To</span>{" "}
          Upload The File <br className="sm:block hidden" />{" "}
        </h1>
      </div>

      <Step />
      <Design1 />
    </div>
  </div>
);

export default App