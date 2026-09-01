/** High-res Unsplash hero URL for sharp full-bleed backgrounds (up to 4K). */
export function heroImageUrl(photoPath: string) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: "3840",
    q: "92",
  });

  return `https://images.unsplash.com/${photoPath}?${params.toString()}`;
}
