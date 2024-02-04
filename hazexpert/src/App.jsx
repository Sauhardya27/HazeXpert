import styles from "./style";
import { Navbar, Hero, Design, Upload } from "./components";

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

  </div>
);

export default App