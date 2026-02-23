/**
 * CSS objectPosition per image src.
 * Ensures the main subject is correctly framed when images are cropped
 * by objectFit:cover at portrait (4/5, 3/4, 1/1) aspect ratios.
 */
export const imgPos: Record<string, string> = {
  // Diptych: main portrait on LEFT panel
  '/images/editorial-classic.jpg':         'left center',
  '/images/editorial-birkin.jpg':          'left center',
  // Diptych: Chanel CC portrait on RIGHT panel
  '/images/editorial-chanel-boutique.jpg': 'right center',
  // Single: face at LEFT side (lying pose, head on left)
  '/images/editorial-chanel-tweed.jpg':    'left center',
  // Single: model on RIGHT, OROS card inset on lower-left
  '/images/editorial-fur-coat.jpg':        'right center',
  // Single: face in upper-right quadrant
  '/images/editorial-cream-chanel.jpg':    'right top',
  // Triptych: center card (white frame with model) is roughly center
  '/images/editorial-oros.jpg':            'center',
  // Covers are already portrait — center works
};

export function pos(src: string): string {
  return imgPos[src] ?? 'center';
}
