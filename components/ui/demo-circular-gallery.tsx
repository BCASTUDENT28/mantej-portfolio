import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const portfolioGalleryData: GalleryItem[] = [
  {
    common: 'One World Festival',
    binomial: 'LPU Cultural Delegation',
    photo: {
      url: 'images/lpu_auditorium.jpg',
      text: 'One World Cultural Festival - African Student Delegation with Mantej',
      pos: 'center',
      by: 'Mantej Singh'
    }
  },
  {
    common: 'Custom Denim Art',
    binomial: 'HustleSmith Studio 1-of-1',
    photo: {
      url: 'images/hustlesmith_denim_hero.png',
      text: 'Hand painted custom luxury denim jacket',
      pos: 'center',
      by: 'HustleSmith Fine Arts'
    }
  },
  {
    common: 'Robotics & AI Hub',
    binomial: 'Embedded Systems Station',
    photo: {
      url: 'images/lpu_robo_park.jpg',
      text: 'Robotics Park at Lovely Professional University',
      pos: 'center',
      by: 'LPU Tech Lab'
    }
  },
  {
    common: 'LPU Campus Gate',
    binomial: 'Jalandhar, Punjab',
    photo: {
      url: 'images/lpu_main_gate.webp',
      text: 'LPU Grand Entrance Gate',
      pos: 'center',
      by: 'Mantej Vlogs'
    }
  },
  {
    common: 'Student Hub & Mall',
    binomial: 'Startup Incubator Zone',
    photo: {
      url: 'images/lpu_mall.jpg',
      text: 'LPU Unimall & Innovation Center',
      pos: 'center',
      by: 'HustleSmith HQ'
    }
  },
  {
    common: 'Campus Life',
    binomial: 'Lovely Professional University',
    photo: {
      url: 'images/lpu_admission.jpeg',
      text: 'LPU Academic Block',
      pos: 'center',
      by: 'LPU Campus'
    }
  }
];

const CircularGalleryDemo = () => {
  return (
    <div className="w-full bg-background text-foreground" style={{ height: '300vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold">Portfolio 3D Gallery</h1>
          <p className="text-muted-foreground">Scroll to rotate through Mantej Singh's ventures &amp; campus story</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={portfolioGalleryData} radius={500} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
