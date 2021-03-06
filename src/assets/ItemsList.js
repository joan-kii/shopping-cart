import React, { createContext, useState } from 'react';
import T68 from '../assets/ng-t68.jpg';
import T69TL from '../assets/ng-t69tl.jpg';
import T56GT from '../assets/ng-s81.jpg';
import T2HB from '../assets/ng-t2hb.jpg';
import T72TL from '../assets/ng-t72tl.jpg';
import S63 from '../assets/ng-s63.jpg';
import SurferGreen from '../assets/ng-surfer-green.jpg';
import Black from '../assets/ng-black.jpg';

export const ItemsContext = createContext();

const ItemsContextProvider = (props) => {
  const [items, setItems] = useState([
    { 
      id: 0,
      name: 'NG-T68',
      image: T68,
      text: "After sourcing a yard of the original material found in Germany, we set about a lengthy process of replicating the paisley overlay accurately. You won't find a more faithful representation on a modern build. The nitrocellulose lacquer (as opposed to polyurethane) gives our T68 a marked improvement in resonance.",
      price: 3330,
      addedToCart: false
    },
    {
      id: 1,
      name: 'NG-T69TL',
      image: T69TL,
      text: "A radical departure from the solid body T Models, the T69TL's semi-hollow body offers both weight relief and unique tonal characteristics. While most opt for the more traditional look of natural finish on mahogany (as pictured here), we also offer ash and alder bodies in any of our standard finishes. A maple or rosewood fingerboard and a distinctly shaped  3-ply pickguard in Black, White, Pearl, or Tortoise Shell complete this alluring gem.",
      price: 1890,
      addedToCart: false
    },
    {
      id: 2,
      name: 'NG-T56GT',
      image: T56GT,
      text: "Our T56GT is the perfect choice for those looking to capture the best of both worlds. It maintains the clean lines and feel of the T Models, but introduces a wide range humbucker in the neck. Additional volume and tone knobs allow for independent control of each pickup. The T56GT maintains a traditional tone in the bridge position, while the wide range humbucker in the neck opens the door to tones typically associated with the Les Paul. Shown here in Black on alder with a maple fretboard and a 3-ply Black pickguard. This model is available in both ash and alder, in all of our standard finishes, with either a maple or rosewood fretboard. ",
      price: 2200,
      addedToCart: false
    },
    {
      id: 3,
      name: 'NG-T2HB',
      image: T2HB,
      text: "A subtle yet remarkable departure from our traditional T Model builds. The T2HB offers players the ability to delve into tonal territory not usually associated with this classic body style. The T2HB features two humbucking pickups, a 500K volume pot, and a cut vintage style bridge with compensated brass saddles. This guitar offers a unique tonal experience while maintaining a familiar presentation. The T2HB is available in all our standard colors, with either a 3-ply pickguard in Black, Pearl, Tortoise Shell, or White, or a 1-ply pickgaurd in Black or White.",
      price: 2655,
      addedToCart: false
    },
    {
      id: 4,
      name: 'NG-T72TL',
      image: T72TL,
      text: "Our T72TL is an iteration of the T69TL that maintains the semi-hollow body, while introducing two wide-range humbuckers and an S Model hardtail bridge. These pickups offer more energy, bigger sound, and reduced hum as compared to the T69TL. This model is available in ash or alder in any of our standard finishes, with a maple or rosewood fingerboard and a 3-ply pickgaurd in Black, White, Pearl, or Tortoise Shell.",
      price: 2150,
      addedToCart: false
    },
    {
      id: 5,
      name: 'NG-S63',
      image: S63,
      text: "Our S63 introduces the vast palette of colors from the heyday of the 1960's car culture. Alder bodies and rosewood necks are standard, though ash and maple may also be used. 3-ply pickguards in White, Mint, Tortoise, Black and Pearl add to the wide variety of looks of our most popular S Model.",
      price: 2280,
      addedToCart: false
    },
    {
      id: 6,
      name: 'NG-Green',
      image: SurferGreen,
      text: "The Wayfarer is not only straightforward but is extremely versatile as well. We have paired the three humbuckers with a push/pull coil tap tone knob and a five way selector switch. This guitar features DiMarzio Bluesbuckers in the neck and middle positions, and an Air Norton in the bridge. Unlike most humbuckers, the Bluesbucker is the only pickup we have come across that has a genuine single coil sound when tapped. In single coil mode this guitar has the sound you would expect from our S Models, including the 2 and 4 position quack. In humbucking mode you get everything you'd want from true humbucking guitar. Additionally, there's no sacrifice in sustain because these pickups have extremely low string pull while still offering high output.",
      price: 1995,
      addedToCart: false
    },
    {
      id: 7,
      name: 'NG-Black',
      image: Black,
      text: "The Wayfarer is not only straightforward but is extremely versatile as well. We have paired the three humbuckers with a push/pull coil tap tone knob and a five way selector switch. This guitar features DiMarzio Bluesbuckers in the neck and middle positions, and an Air Norton in the bridge. Unlike most humbuckers, the Bluesbucker is the only pickup we have come across that has a genuine single coil sound when tapped. In single coil mode this guitar has the sound you would expect from our S Models, including the 2 and 4 position quack. In humbucking mode you get everything you'd want from true humbucking guitar. Additionally, there's no sacrifice in sustain because these pickups have extremely low string pull while still offering high output.",
      price: 1995,
      addedToCart: false
    }
  ]);

  const toggleItemToCart = (itemId, isAdded) => {
    setItems([...items], items[itemId].addedToCart = isAdded);
  };

  return (
    <ItemsContext.Provider value={{items, toggleItemToCart}}>
      {props.children}
    </ItemsContext.Provider>
  )
};

export default ItemsContextProvider;