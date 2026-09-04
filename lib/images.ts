/** Sized Unsplash URLs — sharp enough for retina, small enough to load fast. */
export function heroImageUrl(
  photoPath: string,
  options: { w?: number; q?: number; h?: number } = {},
) {
  const { w = 1920, q = 82, h } = options;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
    fm: "jpg",
  });

  if (h) {
    params.set("h", String(h));
  }

  return `https://images.unsplash.com/${photoPath}?${params.toString()}`;
}

/** Mobile static hero — portrait crop, sharp on phone screens without 4K weight. */
export function mobileHeroImageUrl(photoPath: string) {
  return heroImageUrl(photoPath, { w: 1600, h: 2400, q: 80 });
}

/** Desktop slideshow — wide crop for large displays. */
export function desktopHeroImageUrl(photoPath: string) {
  return heroImageUrl(photoPath, { w: 2560, q: 82 });
}

export const HERO_PHOTO_ID = "photo-1665334217407-6688e6941a47";
