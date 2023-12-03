// components/PixelAnimation.tsx
import { AnimatedSprite, Assets } from 'pixi.js';

const CatSprite = async (type?: string) => {
  const sleepingCat = () => {
    const catImages = ['/images/cat1.png', '/images/cat2.png'];
    const animatedSprite = AnimatedSprite.fromImages(catImages);
    animatedSprite.position.set(50, 50);
    animatedSprite.scale.set(5, 5); // Adjust the scale to fit the canvas better
  
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.play();

    return animatedSprite;
  }

  const waggingCat = async () => {
    const animations  = Assets.cache.get('spritesheets/cat/cat.json').data.animations;
    const character = AnimatedSprite.fromFrames(animations['catWagging']);

    // configure + start animation:
    character.animationSpeed = 1 / 6;                     // 6 fps
    character.position.set(200, 200);
    character.scale.set(5, 5);
    character.play();
    return character;
  }

  return type ? await waggingCat() : sleepingCat();
};

export default CatSprite;
