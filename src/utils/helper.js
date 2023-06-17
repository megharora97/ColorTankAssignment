export function getColorByPercentage(percentage) {
    percentage = Math.abs(percentage - 100) / 100
    const hue = ((1 - percentage) * 120).toFixed(0);
    return `hsl(${hue}, 100%, 50%)`;
}