import { transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
export declare const winstonTransports: (transports.ConsoleTransportInstance | DailyRotateFile)[];
export declare const winstonLogger: import("winston").Logger;
