// This file defines the layout for the Alphabet Runner game level.

export const levelData = {
  // Platforms: id, x position, y position, width, height
  platforms: [
    // Ground
    { id: 1, x: 0, y: 560, width: 5000, height: 40 },
    // First set of platforms
    { id: 2, x: 300, y: 450, width: 200, height: 20 },
    { id: 3, x: 600, y: 380, width: 250, height: 20 },
    { id: 4, x: 950, y: 300, width: 180, height: 20 },
    // Second set
    { id: 5, x: 1200, y: 420, width: 200, height: 20 },
    { id: 6, x: 1500, y: 350, width: 150, height: 20 },
    { id: 7, x: 1750, y: 280, width: 250, height: 20 },
    // Third Set
    { id: 8, x: 2100, y: 450, width: 300, height: 20 },
    { id: 9, x: 2300, y: 350, width: 100, height: 20 },
    { id: 10, x: 2500, y: 250, width: 200, height: 20 },
    // Moving platform example (functionality not yet implemented in game loop)
    // { id: 11, x: 2800, y: 400, width: 150, height: 20, type: 'moving', range: 200 },
    { id: 11, x: 2800, y: 400, width: 150, height: 20 },
    { id: 12, x: 3100, y: 320, width: 200, height: 20 },
    { id: 13, x: 3400, y: 450, width: 150, height: 20 },
    { id: 14, x: 3650, y: 380, width: 200, height: 20 },
    { id: 15, x: 3950, y: 300, width: 250, height: 20 },
    { id: 16, x: 4300, y: 420, width: 180, height: 20 },
    { id: 17, x: 4600, y: 350, width: 200, height: 20 },
  ],
  // Letters: id, character, x position, y position
  letters: [
    { id: 'L1', char: 'A', x: 350, y: 400 },
    { id: 'L2', char: 'B', x: 650, y: 330 },
    { id: 'L3', char: 'C', x: 1000, y: 250 },
    { id: 'L4', char: 'D', x: 1250, y: 370 },
    { id: 'L5', char: 'E', x: 1550, y: 300 },
    { id: 'L6', char: 'F', x: 1800, y: 230 },
    { id: 'L7', char: 'G', x: 2150, y: 400 },
    { id: 'L8', char: 'H', x: 2325, y: 300 },
    { id: 'L9', char: 'I', x: 2550, y: 200 },
    { id: 'L10', char: 'J', x: 2850, y: 350 },
    { id: 'L11', char: 'K', x: 3150, y: 270 },
    { id: 'L12', char: 'L', x: 3450, y: 400 },
    { id: 'L13', char: 'M', x: 3700, y: 330 },
    { id: 'L14', char: 'N', x: 4000, y: 250 },
    { id: 'L15', char: 'O', x: 4350, y: 370 },
    { id: 'L16', char: 'P', x: 4650, y: 300 },
    { id: 'L17', char: 'Q', x: 750, y: 500 }, // On the ground
    { id: 'L18', char: 'R', x: 1300, y: 500 },
    { id: 'L19', char: 'S', x: 1900, y: 500 },
    { id: 'L20', char: 'T', x: 2600, y: 500 },
    { id: 'L21', char: 'U', x: 3000, y: 500 },
    { id: 'L22', char: 'V', x: 3500, y: 500 },
    { id: 'L23', char: 'W', x: 3850, y: 500 },
    { id: 'L24', char: 'X', x: 4200, y: 500 },
    { id: 'L25', char: 'Y', x: 4500, y: 500 },
    { id: 'L26', char: 'Z', x: 4800, y: 500 },
  ],
  // Bombs: id, x position, y position
  bombs: [
    { id: 'B1', x: 500, y: 520 },
    { id: 'B2', x: 1100, y: 520 },
    { id: 'B3', x: 1650, y: 310 },
    { id: 'B4', x: 2200, y: 410 },
    { id: 'B5', x: 2900, y: 520 },
    { id: 'B6', x: 3200, y: 280 },
    { id: 'B7', x: 4100, y: 520 },
    { id: 'B8', x: 4700, y: 310 },
  ],
};

    