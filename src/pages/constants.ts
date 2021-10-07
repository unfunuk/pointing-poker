export enum TypeofCards {
  FibonacciNumbers = "Fibonacci numbers",
  PowerOdNumber2 = "Power of number 2",
}
export enum AdmitMechanism {
  AutoAdmit = "Auto admit",
  AdmitReject = "Admit/Reject mechanism",
}
export interface Session {
  sessionId: string;
  headingText: string;
  isGameStarted: boolean;
}
