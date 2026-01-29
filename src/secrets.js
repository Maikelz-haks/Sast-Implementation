// WARNING: This file allows us to test Gitleaks integration
// DO NOT USE REAL KEYS HERE
export const AWS_CONFIG = {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE", // Vulnerability: Hardcoded AWS Key
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", // Vulnerability: Hardcoded Secret
    region: "us-east-1"
};
