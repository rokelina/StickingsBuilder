import { useEffect, useState } from 'react';

export type StaffSize = {
  divWidth: number;
  divHeight: number;
  staffX: number;
  staffY: number;
  staffWidth: number;
  scaleX?: number;
  scaleY?: number;
};

const xtraSmallStaff: StaffSize = {
  divWidth: 350,
  divHeight: 100,
  staffX: 5,
  staffY: 30,
  staffWidth: 525,
  scaleX: 0.65,
  scaleY: 0.6,
};
const smallStaff: StaffSize = {
  divWidth: 500,
  divHeight: 110,
  staffX: 0,
  staffY: 25,
  staffWidth: 650,
  scaleX: 0.75,
  scaleY: 0.65,
};
const mediumStaff: StaffSize = {
  divWidth: 650,
  divHeight: 160,
  staffX: 5,
  staffY: 30,
  staffWidth: 630,
};
const largeStaff: StaffSize = {
  divWidth: 800,
  divHeight: 200,
  staffX: 50,
  staffY: 40,
  staffWidth: 700,
};

export function useResizeStaff() {
  //get viewport's width
  const [width, setWidth] = useState(window.innerWidth);

  //useEffect
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    //add viewport width to dependency array
  }, [width]);

  let outputStaff: StaffSize;

  switch (true) {
    case width < 481:
      outputStaff = xtraSmallStaff;
      break;
    case width >= 481 && width <= 640:
      outputStaff = smallStaff;
      break;
    case width > 640 && width < 992:
      outputStaff = mediumStaff;
      break;

    default:
      outputStaff = largeStaff;
      break;
  }
  return outputStaff;
}
