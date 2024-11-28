function convertCentimetersToMeters(centimeters: number): number {
  return centimeters / 100;
}

export function formatHeight(height: number): string {
  return `${convertCentimetersToMeters(height).toString().replace('.', ',')}m`;
}