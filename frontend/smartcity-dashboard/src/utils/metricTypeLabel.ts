export function metricTypeLabel(type: number): string {
  switch (type) {
    case 1:
      return 'Traffic';
    case 2:
      return 'Air Quality';
    case 3:
      return 'Energy';
    default:
      return 'Unknown';
  }
}
