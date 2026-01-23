import { transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
export declare const winstonTransports: (DailyRotateFile | transports.ConsoleTransportInstance)[];
export declare const winstonLogger: import("winston").Logger;
