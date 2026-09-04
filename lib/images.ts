/** High-res Unsplash hero URL for sharp full-bleed backgrounds. */
export function heroImageUrl(
  photoPath: string,
  options: { w?: number; q?: number; h?: number } = {},
) {
  const { w = 2400, q = 90, h } = options;
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });

  if (h) {
    params.set("h", String(h));
  }

  return `https://images.unsplash.com/${photoPath}?${params.toString()}`;
}

/** True 4K source for mobile hero (no slideshow). Portrait-friendly crop. */
export function mobileHeroImageUrl(photoPath: string) {
  return heroImageUrl(photoPath, { w: 3840, h: 3840, q: 95 });
}

/** Desktop slideshow / wide hero. */
export function desktopHeroImageUrl(photoPath: string) {
  return heroImageUrl(photoPath, { w: 3840, q: 92 });
}
