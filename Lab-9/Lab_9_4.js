function Picture() {
    const maxStars = 29;
    const minStars = 9;
    for (var stars = minStars; stars <= maxStars; stars += 4) {
        console.log("*".repeat(stars));
    }
    for (var stars = maxStars; stars >= minStars; stars -= 4) {
        console.log("*".repeat(stars));
    }
}
Picture();
