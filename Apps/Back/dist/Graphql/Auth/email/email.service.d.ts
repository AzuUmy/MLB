import { sendPulseService } from 'src/services/send-pulse-service';
export declare class EmailService {
    private readonly sendPulseService;
    constructor(sendPulseService: sendPulseService);
    generateSendPulseToken(): Promise<void>;
    getSendPulseToken(): Promise<void>;
}
