export type TimestampUnit = 'ms' | 's';
export declare function toTimestamp(value: string | number | Date | null | undefined, unit?: TimestampUnit): number | null;
