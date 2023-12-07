import Cat from "public/classes/Cat";

export function initializeCats(): Cat[] {
  const waggingCat = new Cat(
    'waggingCat',
    'spritesheets/cat/waggingCat.json', 
    'catWagging', 
    0.15, 
    {x: 0, y: 100}, 
    {x: 3, y: 3}
  );

  const angryCat = new Cat(
    'angryCat',
    'spritesheets/cat/angryCat.json', 
    'angry', 
    0.15, 
    {x: 100, y: 100}, 
    {x: 3, y: 3}
  );

  const heartCats = new Cat(
    'heartCats',
    'spritesheets/cat/heartCats.json', 
    'heart', 
    0.15, 
    {x: 200, y: 100}, 
    {x: 3, y: 3}
  );

  const pullupCat = new Cat(
    'pullupCat',
    'spritesheets/cat/pullupCat.json', 
    'pullup', 
    0.15, 
    {x: 300, y: 100}, 
    {x: 3, y: 3}
  );


  const drawingCat = new Cat(
    'drawingCat',
    'spritesheets/cat/drawingCat.json', 
    'draw', 
    0.15, 
    {x: 400, y: 100}, 
    {x: 3, y: 3}
  );

  return [waggingCat, angryCat, heartCats, pullupCat, drawingCat];
}
