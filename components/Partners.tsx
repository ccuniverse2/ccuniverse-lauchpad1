import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
// Import dummy partner logos
import { partnerLogos } from '@/images';

import Bull from '../images/Bull.png';
import HeroCC from '../images/heroCC.png';
import HeroImg from '../images/heroImg.jpg';

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-slate-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl font-bold text-center text-teal-400 glitch-text sm:text-3xl">
          Latest Projects
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                     <Image
                            src={HeroImg}
                            width={600}
                            height={450}
                            alt={""}
                            style={{
                              objectFit: "cover",
                              height: "100%",
                    
                              borderRadius: "10px",
                            }}
                          />
                          <Image
                            src={HeroCC}
                            width={600}
                            height={450}
                            alt={""}
                            style={{
                              objectFit: "cover",
                    
                              borderRadius: "10px",
                            }}
                          />
                          <Image
                            src={Bull}
                            width={600}
                            height={450}
                            alt={""}
                            style={{
                              objectFit: "cover",
                    
                              borderRadius: "10px",
                            }}
                          />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
