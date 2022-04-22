

/**
 * 
 * @param {number} seconds seconds since 12:00:00
 * @returns {array} array of degrees from hour hand, minute hand, and second hand
 */
function clockHandAngles(seconds) {
    // First figure out, where each hand will be given the input
    // Start out with the hour hand
    const hourSeconds = 60 * 60 // seconds in an hour
    const hourHand = Math.floor(seconds / hourSeconds);
    const hourHandAngle = Math.ceil((hourHand/12) * 360);

    // Next work on the minute hand
    const leftOverMinutes = seconds % (hourHand * hourSeconds);
    const minuteHand = Math.floor(leftOverMinutes / 60);
    const minuteHandAngle = Math.ceil((minuteHand / 60) * 360);

    // Next work on the second hand
    const leftOverSeconds = seconds % ((hourHand * hourSeconds) + (minuteHand*60));
    const secondHand = Math.floor(leftOverSeconds / 60);
    const secondHandAngle = Math.ceil((secondHand / 60) * 360);
    
    return [hourHandAngle, minuteHandAngle, secondHandAngle];
}

console.log(clockHandAngles(10800));