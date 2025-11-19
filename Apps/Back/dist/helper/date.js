"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTimestamp = toTimestamp;
exports.getCurrentDateInYearMonthDay = getCurrentDateInYearMonthDay;
const common_1 = require("@nestjs/common");
function toTimestamp(value, unit = 'ms') {
    const logger = new common_1.Logger('toTimestamp');
    if (value == null) {
        logger.warn(`Received null or undefined value`);
        return null;
    }
    let ms;
    try {
        if (typeof value === 'number') {
            ms = value > 1e12 ? value : value * 1000;
            logger.debug(`Parsed number: ${value} → ${ms} ms`);
        }
        else if (value instanceof Date) {
            ms = value.getTime();
            logger.debug(`Parsed Date: ${value.toISOString()} → ${ms} ms`);
        }
        else if (typeof value === 'string') {
            const parsed = Date.parse(value);
            if (!Number.isNaN(parsed)) {
                ms = parsed;
                logger.debug(`Parsed string (Date.parse): "${value}" → ${ms} ms`);
            }
            else {
                const d = new Date(value);
                if (!Number.isNaN(d.getTime())) {
                    ms = d.getTime();
                    logger.debug(`Parsed string (new Date): "${value}" → ${ms} ms`);
                }
                else {
                    logger.error(`Invalid date string: "${value}"`);
                    return null;
                }
            }
        }
        else {
            logger.error(`Unsupported type: ${typeof value}`);
            return null;
        }
        const result = unit === 'ms' ? ms : Math.floor(ms / 1000);
        logger.debug(`Final result (${unit}): ${result}`);
        return result;
    }
    catch (err) {
        logger.error(`Error parsing value "${value}": ${err}`);
        return null;
    }
}
function getCurrentDateInYearMonthDay(today) {
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const curretday = year.concat('-').concat(month).concat('-').concat(day);
    return curretday;
}
//# sourceMappingURL=date.js.map