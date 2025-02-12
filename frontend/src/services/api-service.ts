export default class ApiService {
    private static instance: ApiService;
    private baseUrl: string;
    private constructor() {
        this.baseUrl = process.env.API_BASE_URL || "http://localhost:5000/api";
    }
    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }
    public async getPatients(): Promise<any> {
        const response = await fetch(`${this.baseUrl}/patients`);
        return await response.json();
    }
    public async getPatientById(id: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/patients/${id}`);
        return await response.json();
    }
    public async createPatient(data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/patients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    public async updatePatient(id: string, data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/patients/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    public async deletePatient(id: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/patients/${id}`, {
            method: "DELETE",
        });
        return response.json();
    }
    public async getConsultations(): Promise<any> {
        const response = await fetch(`${this.baseUrl}/consultations`);
        return response.json();
    }
    public async getConsultationById(id: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/consultations/${id}`);
        return response.json();
    }
    public async createConsultation(data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/consultations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    public async updateConsultation(id: string, data: any): Promise<any> {
        const response = await fetch(`${this.baseUrl}/consultations/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    public async deleteConsultation(id: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/consultations/${id}`, {
            method: "DELETE",
        });
        return response.json();
    }
    public async uploadFile(file: File): Promise<any> {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${this.baseUrl}/upload`, {
            method: "POST",
            body: formData,
        });
        return response.json();
    }
    public async uploadBulk(files: File[]): Promise<any> {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        const response = await fetch(`${this.baseUrl}/upload/bulk`, {
            method: "POST",
            body: formData,
        });
        return response.json();
    }
    public async deleteUpload(key: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/upload/delete/${key}`, {
            method: "DELETE",
        });
        return response.json();
    }
}