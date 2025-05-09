import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const FrogEasterEgg = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (visible) {
      controls.start({
        x: [0, 300, -300, 0],
        y: [0, -100, 100, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      });
    }
  }, [visible]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000); // 2초 뒤 등장
  }, []);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      {visible && (
        <motion.div
          animate={controls}
          onClick={handleClick}
          className="fixed top-1/2 left-1/2 z-50 w-16 h-16 cursor-pointer"
        >
          <Image
            src="/images/crazy_frog.png"
            alt="귀여운 두꺼비"
            width={64}
            height={64}
            priority
          />
        </motion.div>
      )}
      {showMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl text-black z-50">
          🐸 콩두몰 준비 중!
        </div>
      )}
    </>
  );
};

export default FrogEasterEgg; 